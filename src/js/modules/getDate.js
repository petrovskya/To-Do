function getDate() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  if(day <= 9) {
    day = '0' + day;
  }
  if(month <= 9) {
    month = '0' + month;
  }
  return `${day}.${month}.${year}`;
}

export {getDate};