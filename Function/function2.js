export function isWord(value) {
  const result = value.split(" ").length;
  if (result === 1) {
    return true;
  } 
    return false;
  
}
// console.log(isWord("hello"));
console.log(isWord("hello Mr Smith"));
