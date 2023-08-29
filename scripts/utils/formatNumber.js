
export function numToString(number) {
  return number.toLocaleString();
}

export function stringToNum(string) {
  const numericString = string.replace(/[^\d.-]/g, '');
  return parseInt(numericString);
}


