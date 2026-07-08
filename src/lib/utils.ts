export function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export function parseMarkdown(md: string): string {
  return md
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^> (.*)/gm, '<blockquote class="text-text-muted text-sm italic border-l-2 border-accent pl-4 my-4">$1</blockquote>')
    .replace(/\n/g, '<br>')
    .replace(/<br><br>/g, '</p><p>')
    .replace(/^/, '<p>')
    .replace(/$/, '</p>')
    .replace(/<p><blockquote/g, '<blockquote')
    .replace(/<\/blockquote><\/p>/g, '</blockquote>');
}
