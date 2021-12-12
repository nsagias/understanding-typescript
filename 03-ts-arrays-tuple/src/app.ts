
interface Person2 {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple
}
const person3: Person2 = {
  name: "Dingo",
  age: 1000,
  hobbies: ['sports', 'cookies'],
  role: [1, 'player']
};

let favouriteActivitiesString1: string[];
let favouriteActivitiesNumber1: number[];
let favouriteActivitiesAny1: any[];

for (const hobby of person3.hobbies) {
  console.log(hobby.toUpperCase());
}

interface Product2 {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}

const product3: Product2 = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
