const { sum } = require('./calculator');
const { sumFALSEPOSITIVE } = require('./calculator');

it('should sum 2 and 2 and the result must be 4', function () {
  expect(sum(2, 2)).toBe(4);
});

// it('TESTANDO O FALSO POSITIVO', function () {
//     expect(sumFALSEPOSITIVE(2,2)).not.toBe(4);
// });
// it('should  sum 2 and 2 even if one of them is a string and the result must be 4', function () {
//     expect(sum('2', '2')).toBe(4);
// });

//assinatura para capturar o ERRO quando o método for disparado.
it('should throw an error if what is provided to the method cannot be summed', function () {
  expect(() => {
    sum('', '2');
  }).toThrowError();

  expect(() => {
    sum([2, 2]);
  }).toThrowError();

  expect(() => {
    sum({});
  }).toThrowError();

  expect(() => {
    sum();
  }).toThrowError();
});
