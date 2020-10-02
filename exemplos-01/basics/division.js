export function division(int1, int2) {
  const number1 = parseInt(int1);
  const number2 = parseInt(int2);

  if(number2 === 0) {
    throw new Error('Please, not allow division by 0.');
  }

  if(Number.isNaN(number1) || Number.isNaN(number2)) {
    throw new Error('Please, check your inputs.');
  }

  return number1 / number2;
}