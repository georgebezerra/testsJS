const { sum } = require('./calculator')

it('should sum 2 and 2 and the result must be 4', function () {
    expect(sum(2,2)).toBe(4);
});

it('TESTANDO O FALSO POSITIVO', function () {
    expect(sum(2,2)).not.toBe(4);
});