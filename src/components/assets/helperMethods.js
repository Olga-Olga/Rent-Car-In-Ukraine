export function addCommasToNumber(number) {
  let numberString = number.toString();
  const parts = numberString.split('.');
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const formattedNumber =
    parts.length > 1 ? integerPart + '.' + parts[1] : integerPart;
  return formattedNumber;
}

export function cuttingText(text, num) {
  if (text.length > num) {
    return text.slice(0, num) + '...';
  } else {
    return text;
  }
}

export function cuttingTextLastSpace(text, max) {
  text.slice(0, 47);
  const lastSpace = text.lastIndexOf(' ');
  return text.slice(0, lastSpace);
}

export function listOfUnique(cars, field) {
  if (field === 'rentalPrice') {
    return cars
      .map(car => car[field].replace(/\$/g, ''))
      .filter((value, index, arr) => arr.indexOf(value) === index)
      .filter(value => parseInt(value) % 10 === 0)
      .sort((a, b) => a - b);
  }
  return cars
    .map(car => car[field])
    .filter((value, index, arr) => arr.indexOf(value) === index);
}
