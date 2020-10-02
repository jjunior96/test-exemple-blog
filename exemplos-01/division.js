export function division(int1, int2) {
  const number1 = parseInt(int1);
  const number2 = parseInt(int2);

  if(number2 === 0) {
    throw new Error('Please, not allow division by 0');
  }

  return number1 / number2;
}