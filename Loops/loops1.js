export function sumOfNumbers() {
  let sum = 0;
  let num = 50;
  while (num > 49 && num < 101) {
    sum += num;
    num += 1;
  }
  return sum;
}
