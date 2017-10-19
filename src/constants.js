const hostname = 'https://mathematics-api.appspot.com';
const algebraFunctions = {
    nth_term: `${hostname}/algebra/nth_term`,
    sum_of_first_n_numbers: `${hostname}/algebra/sum_of_first_n_numbers`,
    factorial: `${hostname}/algebra/factorial`,
    combinations: `${hostname}/algebra/combinations`,
};
const calculusFunctions = {
    taylor_sine: `${hostname}/calculus/taylor_sine`,
};
const geometryFunctions = {
    sohcahtoa: `${hostname}/geometry/sohcahtoa`,
};
const calculusPath = `${hostname}/calculus`;
const algebraPath = `${hostname}/algebra`;
const geometryPath = `${hostname}/geometry`;
export { hostname, algebraFunctions, calculusPath, algebraPath, geometryPath, geometryFunctions, calculusFunctions };
