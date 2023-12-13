const { queryString, parse } = require('./queryString');

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
      abilities: {
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

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=George&profession=Developer';
    // parse(qs);
    expect(parse(qs)).toEqual({
      name: 'George',
      profession: 'Developer',
    });
  });

  it('should convert a query string of a single key-value pair', () => {
    const qs = 'name=George';
    // parse(qs);
    expect(parse(qs)).toEqual({
      name: 'George',
    });
  });

  it('should convert a query string to an object taking care of comma separate values', () => {
    const qs = 'name=George&abilities=JS,TDD';

    expect(parse(qs)).toEqual({
      name: 'George',
      abilities: ['JS', 'TDD'],
    });
  });
});
