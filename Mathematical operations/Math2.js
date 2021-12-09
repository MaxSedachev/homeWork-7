export function lengthArea() {
  const r = prompt("enter r");

  const l = 2 * Math.PI * r;
  console.log(Math.floor(l));

  const s = Math.PI * r ** 2;
  console.log(Math.floor(s));
}
lengthArea();
