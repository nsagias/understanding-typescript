
interface Person {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple
}
const person: Person = {
  name: "Dingo",
  age: 1000,
  hobbies: ['sports', 'cookies'],
  role: [1, 'player']
};

let favouriteActivitiesString: string[];
let favouriteActivitiesNumber: number[];
let favouriteActivitiesAny: any[];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

interface Product {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}

const product3: Product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
