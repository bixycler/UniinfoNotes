#!/bin/bash
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

# Locate hlink.sh executable in PATH or script directory
if command -v hlink.sh >/dev/null 2>&1; then
    HLINK="hlink.sh"
elif command -v hlink >/dev/null 2>&1; then
    HLINK="hlink"
else
    echo "[$HOOK_NAME] Error: Could not find 'hlink.sh' or 'hlink' in PATH." >&2
    exit 1
fi

# Pass HOOK_NAME to hlink via environment
export HOOK_NAME

# 1. Logseq Global Config
"$HLINK"    "${HOME}/source/UniinfoNotes/assets/logseq/global/config.edn" \
            "${HOME}/.logseq/config/config.edn" 
"$HLINK" -d "${HOME}/source/UniinfoNotes/assets/logseq/global/config.edn" \
            "${HOME}/snap/logseq/current/.logseq/config/config.edn"

# 2. Logseq Graph Config
"$HLINK"    "${HOME}/source/UniinfoNotes/assets/logseq/config.edn" \
            "${HOME}/source/UniinfoNotes/logseq/config.edn" \
            "${HOME}/opt/personal/logseq-notes/logseq/config.edn"

# Note: configs.edn is explicitly excluded from auto-linking (must be copied manually per instance).

# 3. Logseq Theme / Custom CSS
"$HLINK"    "${HOME}/source/UniinfoNotes/assets/logseq/custom.css" \
            "${HOME}/source/UniinfoNotes/logseq/custom.css" \
            "${HOME}/opt/personal/logseq-notes/logseq/custom.css"

# 4. Custom Workflow Plugin Settings
"$HLINK"    "${HOME}/source/UniinfoNotes/assets/logseq/settings/logseq-custom-workflows.json" \
            "${HOME}/.logseq/settings/logseq-custom-workflows.json" 
"$HLINK" -d "${HOME}/source/UniinfoNotes/assets/logseq/settings/logseq-custom-workflows.json" \
            "${HOME}/snap/logseq/current/.logseq/settings/logseq-custom-workflows.json"

# 5. Shared Markdown Pages
"$HLINK"    "${HOME}/source/UniinfoNotes/pages/share/technical/Git.md" "${HOME}/opt/personal/logseq-notes/pages/share/technical/Git.md"
"$HLINK"    "${HOME}/source/UniinfoNotes/pages/share/technical/Linux.md" "${HOME}/opt/personal/logseq-notes/pages/share/technical/Linux.md"
"$HLINK"    "${HOME}/source/UniinfoNotes/pages/share/technical/JavaScript.md" "${HOME}/opt/personal/logseq-notes/pages/share/technical/JavaScript.md"
"$HLINK"    "${HOME}/source/UniinfoNotes/pages/share/technical/Database.md" "${HOME}/opt/personal/logseq-notes/pages/share/technical/Database.md"
"$HLINK"    "${HOME}/source/UniinfoNotes/pages/share/Theme Demo.md" "${HOME}/opt/personal/logseq-notes/pages/share/Theme Demo.md"
