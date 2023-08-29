const currentDate = new Date();
const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

export function getCurrentDate() {
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  return `${month} ${day}, ${year}`;
}

export function getCurrentTime() {
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const amPm = hours >= 12 ? 'PM' : 'AM';
  const hours12 = hours % 12 === 0 ? 12 : hours % 12;
  
  return `${hours12}:${minutes < 10 ? '0' : ''}${minutes} ${amPm}`;
}