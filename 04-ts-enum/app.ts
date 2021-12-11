
interface Person3 {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple
}
const person3: Person3 = {
  name: "Dingo",
  age: 1000,
  hobbies: ['sports', 'cookies'],
  role: [1, 'player']
};


for (const hobby of person3.hobbies) {
  console.log(hobby.toUpperCase());
}

