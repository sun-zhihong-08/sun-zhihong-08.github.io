import { readFileSync } from 'fs';
import { join } from 'path';

export function loadJson(file: string) {
  const path = join(process.cwd(), 'content', file);
  return JSON.parse(readFileSync(path, 'utf-8'));
}

export function loadMarkdown(file: string) {
  const path = join(process.cwd(), 'content', file);
  return readFileSync(path, 'utf-8');
}
