export function pythagoreanTheorem(a, b, c) {
  const a2 = a ** 2;
  const b2 = b ** 2;
  const c2 = c ** 2;

  if (a2 + b2 === c2) {
    return true;
  }
  return false;
}

pythagoreanTheorem(2, 2, 6);
