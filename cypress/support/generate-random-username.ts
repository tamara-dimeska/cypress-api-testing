export function generateRandomUsername(): string {
  return [...Array(6)]
    .map(() => String.fromCharCode(97 + Math.floor(Math.random() * 26)))
    .join('');
}
