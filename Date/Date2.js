export function minPass(now) {
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const minutesPass = 60 * hours + minutes;

  return minutesPass;
}
