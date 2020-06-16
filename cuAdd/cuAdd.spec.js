const cuAdd = require('./cuAdd');

describe('cuAdd', () => {
  test('Should return sum value', () => {
    const expected = 6;

    const actual = cuAdd(1, 2, 3);

    expect(actual).toBe(expected);
  });

  test('Should return sum value of 6 with two function calls', () => {
    const expected = 6;

    const actual = cuAdd(1)(2, 3);

    expect(actual).toBe(expected);
  });

  test('Should return sum value of 6 with two function calls', () => {
    const expected = 6;

    const actual = cuAdd(1, 2)(3);

    expect(actual).toBe(expected);
  });

  test('Should return sum value of 6 with three function calls', () => {
    const expected = 6;

    const actual = cuAdd(1)(2)(3);

    expect(actual).toBe(expected);
  });
});