export function sumAllElements() {
  const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  let sum = 0;
  arr.forEach((el) => {
    sum += el;
  });
  console.log(sum);
}
