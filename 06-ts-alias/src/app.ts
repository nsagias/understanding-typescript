type CombinerType = number | string;
type CombinerConversionType = 'as-number' | 'as-string';
type UserType = { name: string, age: number}; // custom alias types objects


interface Combine2 {
  (
    input1: CombinerType, 
    input2: CombinerType, 
    resultConversion: CombinerConversionType
  ): CombinerType;
}

function combine2(
  input1: CombinerType, 
  input2: CombinerType, 
  resultConversion: CombinerConversionType) {
  let result;
  if (
    typeof input1 === "number" 
    && typeof input2 === "number" 
    || resultConversion === 'as-number'
  ) {

    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}


const combineAges2 = combine2(30, 26, 'as-number');
const combineNames2 = combine2("Bob", "toaster", 'as-string')


interface User {
  name: string;
  age: number;
}

function greet(user: UserType){
  console.log(`Hello i am ${user.name}`)
}

function isOlder(user: UserType, checkAge: number) {
  return checkAge > user.age
}

const greetUser = greet({name:"Nick", age: 100});
const isOlderThanUser = isOlder({name:"Nick", age: 100}, 10);
