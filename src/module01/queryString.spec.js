const { queryString } = require('./queryString')
describe('Object to query string', () => {
  it('should  create a valid query string when an object is provitect', function () {
    const obj = {
      name: 'George',
      profession: 'developer',
    }

    queryString(obj)

    expect(queryString(obj)).toBe('name=George&profession=developer')
  })
})

// describe('Query string to object', () => {
//
// });
