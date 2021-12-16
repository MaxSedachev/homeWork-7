export function isWord(value) {
  const result = value.split(" ").length;
  if (result === 1) {
    return true;
  }
  return false;
}
