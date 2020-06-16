const findPath = require('./findPath');
const DATA = require('./constant');

describe('findPath', () => {
  test('Should return the name if the path name exists', () => {
    const expected = 'Mary';
    const path = ['name'];

    const actual = findPath(path, DATA);

    expect(actual).toBe(expected);
  });

  test(`Should return Tia if the path is ['pet', 'kid', 'name']`, () => {
    const expected = 'Tia';
    const path = ['pet', 'kid', 'name'];

    const actual = findPath(path, DATA);

    expect(actual).toBe(expected);
  });

  test('Should return the owner object', () => {
    const expected = {
      name: 'Tim'
    };
    const path = ['pet', 'kid', 'owner'];

    const actual = findPath(path, DATA);

    expect(actual).toEqual(expected);
  });

  test('Should return undefined when the path is invalid', () => {
    const expected =  undefined;
    const path = ['pet', 'kid', 'age'];

    const actual = findPath(path, DATA);

    expect(actual).toBe(expected);
  });

  test('Should return undefined if one the path is invalid', () => {
    const expected =  undefined;
    const path = ['pet', 'owner'];

    const actual = findPath(path, DATA);

    expect(actual).toBe(expected);
  });
});
