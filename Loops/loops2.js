export function multiplicationBySeven() {
  const num = 7;
  let mult = "";
  for (let i = 1; i < 10; i += 1) {
    const res = num * i;
    mult += `${num}*${i}=${res}; `;
  }
  return mult;
}
