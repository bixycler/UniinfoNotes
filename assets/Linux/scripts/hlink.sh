#!/bin/bash
# Independent hard-link helper tool
# Usage: hlink.sh [-h|--help] [-v|--verbose] [-i|--interactive] $src $dst1 [$dst2 ...]

HOOK_NAME="${HOOK_NAME:-hlink}"
VERBOSE=0
DEFAULT=''

var (){ printf '%s' "$(tput smul)$1$(tput rmul)"; }
show_help() {
    cat << EOF
Usage: $(basename "$0") [-h|--help] [-v|--verbose] [-d|--default] $(var 'source_file') $(var 'target_file_1') [$(var 'target_file_2') ...]

Maintain hard links safely from a source file to one or more target files.

Options:
  -h, --help     Show this help message and exit
  -v, --verbose  Enable verbose output logging
  -d, --default  Use default choice when target is missing (don't link) or differs from source (overwrite with source)

Environment Variables:
  HOOK_NAME      Name of calling script/hook for logging prefix (default: hlink)
EOF
}

# Parse CLI options
while [ $# -gt 0 ]; do
    case "$1" in
        -h|--help)
            show_help
            exit 0
            ;;
        -v|--verbose)
            VERBOSE=1
            shift
            ;;
        -d|--default)
            DEFAULT=1
            shift
            ;;
        --)
            shift
            break
            ;;
        -*)
            echo "[$HOOK_NAME] Unknown option: $1" >&2
            show_help >&2
            exit 1
            ;;
        *)
            break
            ;;
    esac
done

if [ $# -lt 2 ]; then
    echo "[$HOOK_NAME] Error: Missing source or target arguments." >&2
    show_help >&2
    exit 1
fi

SRC="$1"
shift

if [ ! -f "$SRC" ]; then
    echo "[$HOOK_NAME] Warning: Source file $SRC not found." >&2
    exit 1
fi

# Helper to link $DST to $SRC with custom $MSG
link_file() {
    DST="$1"
    MSG="$2"
    mkdir -p "$(dirname "$DST")"
    rm -f "$DST"
    if ln "$SRC" "$DST" 2>/dev/null; then
        [ "$VERBOSE" -eq 1 ] && echo "[$HOOK_NAME] $MSG:\n    $DST -> $SRC"
    else
        echo "[$HOOK_NAME] Error: Failed to link $DST -> $SRC" >&2
    fi
}

# Link all $DST in arguments
for DST in "$@"; do
    # Check if already linked to the same inode
    if [ "$SRC" -ef "$DST" ]; then
        if [ "$VERBOSE" -eq 1 ]; then
            echo "[$HOOK_NAME] Already linked: $DST -> $SRC"
        fi
        continue
    fi

    # Check if target exists
    if [ ! -f "$DST" ] && [ ! -d "$DST" ]; then
        if [ -z "$DEFAULT" ] && [ -c /dev/tty ]; then
            printf "[$HOOK_NAME] Target does not exist: %s\nCreate hard link from %s? [y/N] " "$DST" "$SRC"
            read reply < /dev/tty
            case "$reply" in
                [yY]|[yY][eE][sS])
                    link_file "$DST" "Created hard link"
                    ;;
                *)
                    [ "$VERBOSE" -eq 1 ] && echo "[$HOOK_NAME] Skipped creation of $DST"
                    ;;
            esac
        else
            [ "$VERBOSE" -eq 1 ] && echo "[$HOOK_NAME] [Default: skip] Target does not exist: $DST"
        fi
        continue
    fi

    # Target exists but different inode: check if contents are identical
    if cmp -s "$SRC" "$DST"; then
        link_file "$DST" "Content identical. Linked"
        continue
    fi

    # Target exists and content differs from source
    if [ -z "$DEFAULT" ] && [ -c /dev/tty ]; then
        echo "=========================================================================="
        echo "[$HOOK_NAME] Difference detected:"
        echo "--------------------------------------------------------------------------"
        git --no-pager diff --no-index "$DST" "$SRC" 2>/dev/null
        echo "--------------------------------------------------------------------------"
        git --no-pager diff --no-index --stat "$DST" "$SRC" 2>/dev/null
        echo "  Target (---): $DST"
        echo "  Source (+++): $SRC"
        echo "Select action:"
        echo "  [1] Overwrite target with hard link to source (default)"
        echo "  [2] Overwrite source with hard link to target"
        echo "  [s] Skip"
        printf "Choice [1/2/s] (default 1): "
        read reply < /dev/tty
        case "$reply" in
            2)
                link_file "$DST" "Overwrote source with hard link to target"
                ;;
            [sS]*)
                [ "$VERBOSE" -eq 1 ] && echo "[$HOOK_NAME] Skipped $DST"
                ;;
            1|*)
                link_file "$DST" "Overwrote target with hard link to source"
                ;;
        esac
    else
        link_file "$DST" "[Default] Overwrote target with hard link to source"
    fi
done
