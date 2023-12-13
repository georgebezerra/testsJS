// 1- Object to query string

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

// 2 - Query string to object

module.exports.parse = string => {
  console.log(string.split('&'));
};

module.exports.parse = string => {
  console.log(
    string.split('&').map(item => {
      return item.split('=');
    }),
  );
};

module.exports.parse = string => {
  return Object.fromEntries(
    string.split('&').map(item => {
      return item.split('=');
    }),
  );
};

module.exports.parse = string =>
  Object.fromEntries(string.split('&').map(item => item.split('=')));

//SEM REFATORAR
module.exports.parse = string =>
  Object.fromEntries(
    string.split('&').map(item => {
      const parts = item.split('=');
      if (parts[1].indexOf(',') > 1) {
        parts[1] = parts[1].split(',');
      }
      return parts;
    }),
  );

//REFATORANDO
module.exports.parse = string =>
  Object.fromEntries(
    string.split('&').map(item => {
      let [key, value] = item.split('=');

      if (value.indexOf(',') > 1) {
        value = value.split(',');
      }
      return [key, value];
    }),
  );
