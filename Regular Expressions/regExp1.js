/* eslint-disable */
export function date() {
  let inputDate = prompt("Enter a date");
  let regexp = /[0-9]{2,4}[-\/\.|\s][0-9]{2}[-\/\.|\s][0-9]{2,4}/;
  console.log(regexp.test(inputDate));
}
date();
