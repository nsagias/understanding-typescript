// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Dingo",
//   age: 1000
// };

interface Person {
  name: string;
  age: number
}
const person1: Person = {
  name: "Dingo",
  age: 1000
};


// nested objects
interface Product {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}

const product1: Product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
