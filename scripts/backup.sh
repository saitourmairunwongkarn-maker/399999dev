#!/usr/bin/env bash
set -euo pipefail

# ================== CONFIG ==================
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEST_DIR="$HOME/storage/downloads/Backup/saitourmairunwongkarn"
PROJECT_NAME="$(basename "$PROJECT_DIR")"

# Exclude folders/files
EXCLUDES=(
  "node_modules"
  ".git"
  ".next"
  "dist"
  "build"
  "tmp"
  "venv"
)

KEEP_LAST=7   # number of backups to keep (0 = keep all)
# ============================================

# ============== COLORS ======================
GREEN="\033[1;32m"
RED="\033[1;31m"
YELLOW="\033[1;33m"
CYAN="\033[1;36m"
RESET="\033[0m"
# ============================================

# ---------- Functions ----------
timestamp() {
  date +"%Y%m%d-%H%M%S"
}

cleanup() {
  [ -f "$TMP_ARCHIVE" ] && rm -f "$TMP_ARCHIVE"
}
# --------------------------------

# Create destination dir
mkdir -p "$DEST_DIR"

ARCHIVE_NAME="${PROJECT_NAME}_backup_$(timestamp).zip"
TMP_ARCHIVE="${PROJECT_DIR}/${ARCHIVE_NAME}.partial"
FINAL_ARCHIVE="${DEST_DIR}/${ARCHIVE_NAME}"

echo -e "${CYAN}Backing up $PROJECT_NAME ...${RESET}\n"

# cleanup trap
trap cleanup EXIT

# ---------- Backup ----------
(
  cd "$PROJECT_DIR"
  EXCLUDE_ARGS=()
  for e in "${EXCLUDES[@]}"; do
    EXCLUDE_ARGS+=(-x "$e/*")
  done
  # run zip in quiet mode
  zip -rq "$TMP_ARCHIVE" . "${EXCLUDE_ARGS[@]}"
)

mv "$TMP_ARCHIVE" "$FINAL_ARCHIVE"
# -----------------------------

# ---------- Result ----------
SIZE=$(du -h "$FINAL_ARCHIVE" | cut -f1)
STAMP=$(date +"%Y%m%d-%H%M%S")
echo -e "${GREEN}✅ Backup created:${RESET} $SIZE at $STAMP"
# -----------------------------

# ---------- Retention ----------
if [ "$KEEP_LAST" -gt 0 ]; then
  mapfile -t files < <(ls -1t "${DEST_DIR}/${PROJECT_NAME}_backup_"*.zip 2>/dev/null || true)
  if [ "${#files[@]}" -gt "$KEEP_LAST" ]; then
    for ((i=KEEP_LAST; i<${#files[@]}; i++)); do
      echo -e "${YELLOW}🗑️ Removing old backup:${RESET} ${files[$i]}"
      rm -f "${files[$i]}"
    done
  fi
fi
# -------------------------------

# ---------- Show backups ----------
echo -e "\n${CYAN}📂 Backups currently stored:${RESET}"
ls -lh "${DEST_DIR}/${PROJECT_NAME}_backup_"*.zip 2>/dev/null || echo "(no backups found)"
# ---------------------------------

exit 0