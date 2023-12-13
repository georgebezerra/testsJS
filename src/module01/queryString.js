//SEM REFATORAR
// module.exports.queryString = obj => {
//   console.log(Object.entries(obj));
//
//   const entries = Object.entries(obj).map(item => {
//     console.log(item);
//
//     return `${item[0]}=${item[1]}`;
//   });
//
//   console.log(entries.join('&'));
//
//   return entries.join('&');
// };

//COM REFATORAÇÃO
// module.exports.queryString = obj => {
//   return Object.entries(obj)
//     .map(item => {
//       return `${item[0]}=${item[1]}`;
//     })
//     .join('&');
// };

//MAIS REFATORAÇÃO
// module.exports.queryString = obj =>
//   Object.entries(obj)
//     .map(([key, value]) => `${key}=${value}`)
//     .join('&');

//ESTRESSANDO A IMPLEMENTAÇÃO PRA TORNA-LA RESILIENTE
// module.exports.queryString = obj =>
//   Object.entries(obj)
//     .map(([key, value]) => {
//       if (typeof value === 'object' && !Array.isArray(value)) {
//         throw new Error('Please check you params');
//       }
//       return `${key}=${value}`;
//     })
//     .join('&');

//REFATORANDO - ESTRESSANDO A IMPLEMENTAÇÃO PRA TORNA-LA RESILIENTE
const keyValueToString = ([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new Error('Please check you params');
  }
  return `${key}=${value}`;
};

module.exports.queryString = obj =>
  Object.entries(obj).map(keyValueToString).join('&');
