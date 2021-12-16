export function dayOfWeek() {
  const input = window.prompt("enter DD.MM.YYYY");

  const [day, month, year] = input.split(".");
  const inputDate = new Date(`${year}-${month}-${day}`);

  const dayWeek = inputDate.getDay();
  return dayWeek;
}
