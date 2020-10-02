import { division } from './division';

it('should division 2 and 2 the result must be 1', () => {
  expect(division(2, 2)).toBe(1);
});

it('should division 2 and 2 even if on of them is a string and the result must be 1', () => {
  expect(division('2', 2)).toBe(1);
});

it('should trow an error if the second params is 0', () => {
  expect(() => {
    division(2, 0)
  }).toThrowError();
});