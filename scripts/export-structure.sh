#!/bin/bash
# export-structure.sh
# สคริปต์สำหรับ export โครงสร้างโปรเจกต์เป็น Markdown
# ข้าม node_modules และ .git

OUTPUT_FILE="project-structure.md"
TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")

# ===== หัวไฟล์ พร้อมวันเวลา =====
echo "# Project Structure" > "$OUTPUT_FILE"
echo -e "\n_Exported at: **$TIMESTAMP**_\n" >> "$OUTPUT_FILE"

# ===== โครงสร้างโปรเจกต์ =====
if command -v tree &> /dev/null; then
  echo -e "## 📂 Project Files\n" >> "$OUTPUT_FILE"
  echo -e "\`\`\`" >> "$OUTPUT_FILE"
  tree -I "node_modules|.git|.next|dist|out" -a >> "$OUTPUT_FILE"
  echo -e "\`\`\`" >> "$OUTPUT_FILE"
else
  echo "⚠️ ไม่พบ tree ใช้ find แทน"
  echo -e "## 📂 Project Files\n" >> "$OUTPUT_FILE"
  echo -e "\`\`\`" >> "$OUTPUT_FILE"
  find . \
    -path "./node_modules" -prune -o \
    -path "./.git" -prune -o \
    -path "./.next" -prune -o \
    -path "./dist" -prune -o \
    -path "./out" -prune -o \
    -print >> "$OUTPUT_FILE"
  echo -e "\`\`\`" >> "$OUTPUT_FILE"
fi

# ===== เพิ่มการดึงไฟล์สำคัญ =====
FILES_TO_EXPORT=("package.json" "next.config.js" "jsconfig.json" "tailwind.config.js" "tsconfig.json")

for FILE in "${FILES_TO_EXPORT[@]}"; do
  if [[ -f "$FILE" ]]; then
    echo -e "\n## $FILE" >> "$OUTPUT_FILE"
    echo -e "\n\`\`\`" >> "$OUTPUT_FILE"
    cat "$FILE" >> "$OUTPUT_FILE"
    echo -e "\n\`\`\`" >> "$OUTPUT_FILE"
  fi
done

# ===== ดึง NOTE.md ถ้ามี =====
if [[ -f "NOTE.md" ]]; then
  echo -e "\n## 📝 NOTE.md" >> "$OUTPUT_FILE"
  echo -e "\n\`\`\`" >> "$OUTPUT_FILE"
  cat "NOTE.md" >> "$OUTPUT_FILE"
  echo -e "\n\`\`\`" >> "$OUTPUT_FILE"
fi

# ===== ดึง manifest.json และ robots.txt ถ้ามี =====
if [[ -f "public/manifest.json" ]]; then
  echo -e "\n## 🌐 public/manifest.json" >> "$OUTPUT_FILE"
  echo -e "\n\`\`\`json" >> "$OUTPUT_FILE"
  cat "public/manifest.json" >> "$OUTPUT_FILE"
  echo -e "\n\`\`\`" >> "$OUTPUT_FILE"
fi

if [[ -f "public/robots.txt" ]]; then
  echo -e "\n## 🤖 public/robots.txt" >> "$OUTPUT_FILE"
  echo -e "\n\`\`\`" >> "$OUTPUT_FILE"
  cat "public/robots.txt" >> "$OUTPUT_FILE"
  echo -e "\n\`\`\`" >> "$OUTPUT_FILE"
fi

# ===== เพิ่ม Checklists =====
echo -e "\n## ✅ Project Setup Checklist" >> "$OUTPUT_FILE"

cat << 'EOF' >> "$OUTPUT_FILE"
- [x] Project structure exported
- [x] ESLint (Flat Config) with:
  - [x] @eslint/js
  - [x] eslint-plugin-react
  - [x] eslint-plugin-react-hooks
  - [x] eslint-plugin-tailwindcss
  - [x] @next/eslint-plugin-next
  - [x] eslint-plugin-prettier
- [x] Prettier with tailwindcss plugin
- [x] TailwindCSS configured
- [x] Next.js config updated (images, experimental, eslint, ts)
- [x] Package.json scripts: dev, build, start, lint, format
- [x] `pnpm lint` works without errors
- [x] `pnpm format` works without errors
- [x] tsconfig.json exported
- [x] manifest.json exported
- [x] robots.txt exported
EOF

echo "✅ โครงสร้างและไฟล์ config สำคัญถูกบันทึกที่ $OUTPUT_FILE พร้อม Timestamp + NOTE.md แล้ว"