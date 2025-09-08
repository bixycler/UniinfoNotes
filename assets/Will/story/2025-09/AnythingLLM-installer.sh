#!/bin/sh
# This script installs AnythingLLMDesktop on Linux.
# Due to READ_ONLY issues on regular mounting of an AppImage
# we need to download the file then unpack it so it can be run.
set -eu

status() { echo ">>> $*" >&2; }
error() { echo "ERROR $*"; exit 1; }
warning() { echo "WARNING: $*"; }

[ "$(uname -s)" = "Linux" ] || error 'This script is intended to run on Linux only.'
if [ "$(id -u)" -eq 0 ]; then
    status "This script should not be run as root. Please run it as a regular user."
    exit 1
fi

APPIMAGE_URL="https://cdn.anythingllm.com/latest/AnythingLLMDesktop.AppImage"
APPIMAGE_FILE="AnythingLLMDesktop.AppImage"
EXE_FILE="$HOME/.local/bin/AnythingLLMDesktop"
EXTRACTED_DIR="anythingllm-desktop"
OUTDIR="$HOME/AnythingLLMDesktop"

rm -rf $OUTDIR
mkdir -p $OUTDIR

status "Downloading latest AnythingLLM Desktop..."
curl --fail --show-error --location --progress-bar -o $OUTDIR/$APPIMAGE_FILE $APPIMAGE_URL

cd $OUTDIR
status "Extracting..."
./$APPIMAGE_FILE --appimage-extract >/dev/null;
#rm -rf $APPIMAGE_FILE
mv squashfs-root $EXTRACTED_DIR
ln -sf $EXTRACTED_DIR/AppRun $EXE_FILE

status "AnythingLLMDesktop is ready to run with $EXE_FILE."
status "You can rerun this installer anytime to get the latest version of AnythingLLM without effecting your existing data."
status "Documentation: https://docs.anythingllm.com"
status "Issues: https://github.com/Mintplex-Labs/anything-llm"
