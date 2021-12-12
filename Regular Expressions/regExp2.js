/* eslint-disable */
export function email() {
  let inputEmail = prompt("Enter email");
  let regexp2 = /[a-zA-Z0-9_\.]+@[a-z0-9]+\.[a-z]{2,5}/;

  console.log(regexp2.test(inputEmail));
}
