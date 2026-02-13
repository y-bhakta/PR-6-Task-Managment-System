import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'src/components/Header.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace all javascript:void(0); patterns with href="#"
content = content.replace(/to="javascript:void\(0\);"/g, 'href="#" onClick={(e) => e.preventDefault()}');

// Replace all javascript:void(0) patterns (without semicolon)
content = content.replace(/to="javascript:void\(0\)"/g, 'href="#" onClick={(e) => e.preventDefault()}');

// Replace all .html file path links with href="#"
content = content.replace(/to="[^"]*\.html"/g, 'href="#"');

// Replace all remaining Link tags that have become anchor-like (with href attribute) from Link to a
content = content.replace(/<Link href=/g, '<a href=');
content = content.replace(/<\/Link>/g, '</a>');

// Also handle mailto links - convert them too
content = content.replace(/to="mailto:([^"]+)"/g, 'href="mailto:$1"');
content = content.replace(/to="\.\/auth-/g, 'href=".\/auth-');

fs.writeFileSync(filePath, content, 'utf8');
console.log('✓ File updated successfully!');
console.log('✓ All javascript:void(0) and .html references have been fixed');
console.log('✓ All file path links have been converted to anchor tags');
