#!/data/data/com.termux/files/usr/bin/bash
# Export project structure and key configs (Markdown format)
# Skip node_modules, .git, .next

OUTPUT="project-structure.md"
IGNORE="node_modules|.git|.next"
TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")

echo "# Project Export" > "$OUTPUT"
echo -e "\n_Exported at: **$TIMESTAMP**_" >> "$OUTPUT"

echo -e "\n## 📂 Project Structure (app, depth=10)\n" >> "$OUTPUT"
echo '```' >> "$OUTPUT"
tree app -L 10 -I "$IGNORE" >> "$OUTPUT" 2>/dev/null || echo "⚠️ no app directory found" >> "$OUTPUT"
echo '```' >> "$OUTPUT"

echo -e "\n## 📂 Project Structure (public, depth=10)\n" >> "$OUTPUT"
echo '```' >> "$OUTPUT"
tree public -L 10 -I "$IGNORE" >> "$OUTPUT" 2>/dev/null || echo "⚠️ no public directory found" >> "$OUTPUT"
echo '```' >> "$OUTPUT"

# ไฟล์ที่จะสแกนเพิ่ม
FILES="next.config.js jsconfig.json package.json NOTE.md README.md .gitignore tailwind.config.js"

for file in $FILES; do
  if [ -f "$file" ]; then
    echo -e "\n## 📄 $file\n" >> "$OUTPUT"
    echo '```' >> "$OUTPUT"
    cat "$file" >> "$OUTPUT"
    echo '```' >> "$OUTPUT"
  else
    echo -e "\n⚠️ $file not found" >> "$OUTPUT"
  fi
done

echo -e "\n✅ Export finished → $OUTPUT"