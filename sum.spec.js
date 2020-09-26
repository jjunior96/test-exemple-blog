const { sum } = require('./sum');

it('should sum 5 and 5 the result must be 10', () => {
  expect(sum(5, 5)).toBe(10);
});

it('should sum 5 and 5 even if on of them is a string and the result must be 10', () => {
  expect(sum('5', '5')).toBe(10);
});

it('should throw an error if what is provided to the method connot be summed', () => {
  expect(() => {
    sum('', 2)
  }).toThrowError();

  // Não pode ser um array
	expect(() => {
    sum([2, 2])
  }).toThrowError();
  
  // Não pode ser um objeto
  expect(() => {
    sum({})
  }).toThrowError();
  
	 // Não pode ser passado vazio
   expect(() => {
    sum()
 }).toThrowError();
});