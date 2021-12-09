export function diff(num1, num2) {
  if (num1 >= num2) {
    return num1 - num2;
  } 
    return num2 - num1;
  
}
const result = diff(2, 5);
console.log(result);
