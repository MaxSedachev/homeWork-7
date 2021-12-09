export function solutionEquation() {
  const a = +prompt("Enter number a");
  const b = +prompt("Enter number b");
  const c = +prompt("Eenter number c");

  const disсr = b ** 2 - 4 * a * c;

  if (disсr > 0) {
    const x1 = ((-b + Math.sqrt(disсr)) / 2) * a;
    const x2 = ((-b - Math.sqrt(disсr)) / 2) * a;
    return `${x1}, ${x2}`;
  }
  if (disсr === 0) {
    const x3 = (-b / 2) * a;
    return x3;
  }
  return "No roots";
}
