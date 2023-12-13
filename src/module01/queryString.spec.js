const { queryString } = require('./queryString');

describe('Object to query string', () => {
  it('should  create a valid query string when an object is provided', () => {
    const obj = {
      name: 'George',
      profession: 'developer',
    };

    queryString(obj);
    expect(queryString(obj)).toBe('name=George&profession=developer');
  });

  it('should  create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'George',
      abilities: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe('name=George&abilities=JS,TDD');
  });

  it('should throw an error when an object is passed a value', () => {
    const obj = {
      name: 'George',
      abilites: {
        first: 'JS',
        second: 'TDD',
      },
    };

    console.log(queryString(obj));

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

// describe('Query string to object', () => {
//
// });
