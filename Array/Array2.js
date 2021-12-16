export function largestAndSmallestElement() {
  const arr2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

  const max = Math.max.apply(null, arr2);
  console.log(max);

  const min = Math.min.apply(null, arr2);
  console.log(min);
}
