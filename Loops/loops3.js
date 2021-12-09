export function averageFn() {
  const input = prompt("Enter a number");
  let sum = 0;
  let count = 0;

  for (let i = 1; i <= input; i += 1) {
    if (i % 2 !== 0) {
      count += 1;
      sum += i;
    }
  }
  console.log(sum / count);
}

averageFn();
