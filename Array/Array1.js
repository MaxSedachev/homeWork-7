export function twiceValue() {
  const arr1 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

  const newArr = arr1.map((el) => {
    const newValue = el * 2;
    return newValue;
  });
  // console.log(arr1);
  console.log(newArr);
}
