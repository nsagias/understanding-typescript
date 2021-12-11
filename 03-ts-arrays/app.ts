
interface Person {
  name: string;
  age: number;
  hobbies: string[];
}
const person1: Person = {
  name: "Dingo",
  age: 1000,
  hobbies: ['sports', 'cookies']
};

let favouriteActivities: string[];



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
