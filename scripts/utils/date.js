export const currentDate = new Date();
export const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

export function getCurrentMonth() {
  return months[currentDate.getMonth()];
}

export function getCurrentTime() {
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const amPm = hours >= 12 ? 'AM' : 'PM';
  const hours12 = hours % 12 === 0 ? 12 : hours;
  
  return `${hours12}:${minutes < 10 ? '0' : ''}${minutes} ${amPm}`;
}