module.exports.sum = (num1, num2) => {
    return num1 + num2;
}

module.exports.sumFALSEPOSITIVE = (num1, num2) => {
    return num1 + num2;
}

//FALSO POSITIVO COM 3 PARÂMETROS AO INVÉS DE 2.
// module.exports.sumFALSEPOSITIVE = (num1, num2, num3) => {
//     return num1 + num2 + num3;
// }

module.exports.sum = (num1, num2) => {
    return +num1 + parseInt(num2, 10);
}

module.exports.sum = (num1, num2) => {
    const int1 = parseInt(num1, 10);
    const int2 = parseInt(num2, 10);

    if(Number.isNaN(int1) || Number.isNaN(int2)) {
        throw new Error('Please check your input')
    }

    return num1 + num2;
}