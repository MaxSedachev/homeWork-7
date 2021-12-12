/* eslint-disable */
export function phoneNumber() {
  let inputPhoneNum = prompt("Enter a phone number");
  let regexp3 =
    /[+]{0,1}[7?8]{1}[\-\s\(]{0,1}[0-9]{3}[-\s\)]{0,1}[-0-9\s]{7,9}/;

  console.log(regexp3.test(inputPhoneNum));
}
