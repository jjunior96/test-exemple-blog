import { multiply } from './multiply';

it('should multiply 2 and 2 the result must be 4', () => {
  expect(multiply(2, 2)).toBe(4);
});

it('should multiply 2 and 2 even if on of them is a string and the result must be 2', () => {
  expect(multiply('2', 2)).toBe(4);
})

describe('not a number NaN', () => {
  it('should throw an error if what is provided to the method cannot be multiply', () => {
    expect(() => {
      multiply('', 2)
    }).toThrowError();

    expect(() => {
      multiply(2, '')
    }).toThrowError();

    expect(() => {
      multiply([2, 2])
    }).toThrowError();

    expect(() => {
      multiply({})
    }).toThrowError();

    expect(() => {
      multiply()
    }).toThrowError();
  });
});
