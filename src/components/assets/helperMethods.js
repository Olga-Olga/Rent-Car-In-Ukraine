export function addCommasToNumber(number) {
  let numberString = number.toString();
  const parts = numberString.split('.');
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const formattedNumber =
    parts.length > 1 ? integerPart + '.' + parts[1] : integerPart;
  return formattedNumber;
}
