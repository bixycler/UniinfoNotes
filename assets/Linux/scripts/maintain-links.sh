#!/bin/sh
# Master script to maintain hard links across different Git events
# Configured based on "hard links in UniinfoNotes" listed in `pages/Mind Jungle.md` (block id: 66978876-9378-4059-8783-868d041e8e2e)

# Get the name of the hook that triggered this script
HOOK_NAME=$(basename "$0")

# If triggered by post-index-change, check if the working tree actually updated
if [ "$HOOK_NAME" = "post-index-change" ]; then
    WORKING_TREE_UPDATED=$1
    # If the working tree wasn't updated (argument is 0), exit early
    if [ "$WORKING_TREE_UPDATED" = "0" ]; then
        exit 0
    fi
fi

# Helper function to re-establish hard links safely and interactively
link_file() {
    src="$1"
    dst="$2"

    # 0. Silently ignore snap targets if snap directory is not installed
    case "$dst" in
        "$HOME/snap/logseq/"*|*/snap/logseq/*)
            if [ ! -d "$HOME/snap/logseq" ]; then
                return 0
            fi
            ;;
    esac

    # 1. Verify source existence
    if [ ! -f "$src" ]; then
        echo "[$HOOK_NAME] Warning: Source file $src not found."
        return 1
    fi

    # 2. Check if already linked to the same inode
    if [ "$src" -ef "$dst" ]; then
        return 0
    fi

    # 3. Check if target exists
    if [ ! -f "$dst" ] && [ ! -d "$dst" ]; then
        # Target does not exist -> Prompt user (default: don't create)
        if [ -c /dev/tty ]; then
            printf "[$HOOK_NAME] Target does not exist: %s\nCreate hard link from %s? [y/N] " "$dst" "$src"
            read reply < /dev/tty
            case "$reply" in
                [yY]|[yY][eE][sS])
                    mkdir -p "$(dirname "$dst")"
                    rm -f "$dst"
                    if ln "$src" "$dst" 2>/dev/null; then
                        echo "[$HOOK_NAME] Created hard link: $dst -> $src"
                    else
                        echo "[$HOOK_NAME] Error: Failed to link $dst -> $src"
                    fi
                    ;;
                *)
                    echo "[$HOOK_NAME] Skipped creation of $dst"
                    ;;
            esac
        else
            echo "[$HOOK_NAME] Target does not exist (non-interactive): $dst"
        fi
        return 0
    fi

    # 4. Target exists but different inode: check if contents are identical
    if cmp -s "$src" "$dst"; then
        # Content is identical -> link automatically without prompt
        mkdir -p "$(dirname "$dst")"
        rm -f "$dst"
        if ln "$src" "$dst" 2>/dev/null; then
            echo "[$HOOK_NAME] Content identical. Linked $dst -> $src"
        else
            echo "[$HOOK_NAME] Error: Failed to link $dst -> $src"
        fi
        return 0
    fi

    # 5. Target exists and content differs from source -> Prompt user (default: Option 1)
    if [ -c /dev/tty ]; then
        echo "=========================================================================="
        echo "[$HOOK_NAME] Difference detected:"
        echo "--------------------------------------------------------------------------"
        diff -u "$dst" "$src"
        echo "--------------------------------------------------------------------------"
        echo "  Target (---): $dst"
        echo "  Source (+++): $src"
        echo "Select action:"
        echo "  [1] Overwrite target with hard link to source (default)"
        echo "  [2] Overwrite source with hard link to target"
        echo "  [s] Skip"
        printf "Choice [1/2/s] (default 1): "
        read reply < /dev/tty
        case "$reply" in
            2)
                mkdir -p "$(dirname "$src")"
                rm -f "$src"
                if ln "$dst" "$src" 2>/dev/null; then
                    echo "[$HOOK_NAME] Overwrote source with hard link to target: $src -> $dst"
                else
                    echo "[$HOOK_NAME] Error: Failed to link $src -> $dst"
                fi
                ;;
            [sS]*)
                echo "[$HOOK_NAME] Skipped $dst"
                ;;
            1|*)
                mkdir -p "$(dirname "$dst")"
                rm -f "$dst"
                if ln "$src" "$dst" 2>/dev/null; then
                    echo "[$HOOK_NAME] Overwrote target with hard link to source: $dst -> $src"
                else
                    echo "[$HOOK_NAME] Error: Failed to link $dst -> $src"
                fi
                ;;
        esac
    else
        echo "[$HOOK_NAME] Non-interactive: Files differ between $src and $dst"
    fi
}

# 1. Logseq Global Config
link_file "${HOME}/source/UniinfoNotes/assets/logseq/global/config.edn" "${HOME}/.logseq/config/config.edn"
link_file "${HOME}/source/UniinfoNotes/assets/logseq/global/config.edn" "${HOME}/snap/logseq/current/.logseq/config/config.edn"

# 2. Logseq Graph Config
link_file "${HOME}/source/UniinfoNotes/assets/logseq/config.edn" "${HOME}/source/UniinfoNotes/logseq/config.edn"
link_file "${HOME}/source/UniinfoNotes/assets/logseq/config.edn" "${HOME}/opt/personal/logseq-notes/logseq/config.edn"

# Note: configs.edn is explicitly excluded from auto-linking (must be copied manually per instance).

# 3. Logseq Theme / Custom CSS
link_file "${HOME}/source/UniinfoNotes/assets/logseq/custom.css" "${HOME}/source/UniinfoNotes/logseq/custom.css"
link_file "${HOME}/source/UniinfoNotes/assets/logseq/custom.css" "${HOME}/opt/personal/logseq-notes/logseq/custom.css"

# 4. Custom Workflow Plugin Settings
link_file "${HOME}/source/UniinfoNotes/assets/logseq/settings/logseq-custom-workflows.json" "${HOME}/.logseq/settings/logseq-custom-workflows.json"
link_file "${HOME}/source/UniinfoNotes/assets/logseq/settings/logseq-custom-workflows.json" "${HOME}/snap/logseq/current/.logseq/settings/logseq-custom-workflows.json"

# 5. Shared Markdown Pages
link_file "${HOME}/source/UniinfoNotes/pages/share/technical/Git.md" "${HOME}/opt/personal/logseq-notes/pages/share/technical/Git.md"
link_file "${HOME}/source/UniinfoNotes/pages/share/technical/Linux.md" "${HOME}/opt/personal/logseq-notes/pages/share/technical/Linux.md"
link_file "${HOME}/source/UniinfoNotes/pages/share/technical/JavaScript.md" "${HOME}/opt/personal/logseq-notes/pages/share/technical/JavaScript.md"
link_file "${HOME}/source/UniinfoNotes/pages/share/technical/Database.md" "${HOME}/opt/personal/logseq-notes/pages/share/technical/Database.md"
link_file "${HOME}/source/UniinfoNotes/pages/share/Theme Demo.md" "${HOME}/opt/personal/logseq-notes/pages/share/Theme Demo.md"
