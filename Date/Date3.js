export function youngUser() {
  const user1 = "10.11.2015";
  const [day1, month1, year1] = user1.split(".");
  const date1 = new Date(`${year1}-${month1}-${day1}`);

  const user2 = "16.05.2020";
  const [day2, month2, year2] = user2.split(".");
  const date2 = new Date(`${year2}-${month2}-${day2}`);

  if (date1 > date2) {
    return user1;
  } 
    return user2;
  
}

youngUser();
