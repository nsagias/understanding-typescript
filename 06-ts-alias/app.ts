


interface Combine {
  (
    input1: number | string, 
    input2: number | string, 
    resultConversion: 'as-number' | 'as-string'
  );
}

function combine(
  input1: number | string, 
  input2: number | string, 
  resultConversion: 'as-number' | 'as-string') {
  let result;
  if (
    typeof input1 === "number" 
    && typeof input2 === "number" 
    || resultConversion === 'as-number') {

    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}


const combineAges = combine(30, 26, 'as-number');
const combineNames = combine("Bob", "toaster", 'as-string')