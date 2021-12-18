const names1 = ["nick", "bingo"];
const names2: any = [];
const names3: Array<any> = [];
const names4: Array<string> = [];
const names5: Array<number> = [];
const names6: Array<string | number> = [];

// can call string methods and no complaints 
// names4[0].split(' ');

// promises type
// const promise = new Promise((resolve, reject) => {});
const promise: Promise<string> = new Promise((resolve) => {
  setTimeout( () => {
    resolve('This is done');
  }, 2000);
});

promise.then(x => console.log(x));


// custom Generics Functions
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

function merge2<T, U, V>(objA: T,objB: U, objC: V) {
  return Object.assign(objA, objB, objC);
}

function merge3<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

function merge4<T extends object, U extends object, V extends object>(objA: T,objB: U, objC: V) {
  return Object.assign(objA, objB, objC);
}

// use Interface
interface Person {
  name: string
}
function merge5<T extends Person, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// use union type
function merge6<T extends string | number, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj =  merge<{name: string, hobbies: string[]}, {age: number}>({name: "Nick", hobbies: ['fun']}, {age: 1000});
const mergeOb2 =  merge2<{name: string},{hobbies: string[]}, {age: number}>({name: "Nick"}, {hobbies: ['any']}, {age: 1000});

console.log("mergeObj:",mergeObj);
console.log("mergeObj2:",mergeOb2);


interface hasLength {
  length: number;
}

function countAndDescribe<T extends hasLength>(element: T): [T, string]{
  let descriptionText = "No value here";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = `Has ${element.length} elements.`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe([]));


// keyof Constraint
function extractAndConvert<T extends object, U  extends keyof T >(obj: T, key: U) {
  return obj[key];
}
