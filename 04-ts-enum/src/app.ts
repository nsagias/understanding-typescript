
enum Role {
  ADMIN, 
  READ_ONLY, 
  AUTHOR
};

enum RoleString {
  ADMIN = "ADMIN", 
  READ_ONLY = "READ_ONLY", 
  AUTHOR = "AUTHOR"
}

interface Person {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; 
  enum_role_value?: Role;
  enum_role_string?: RoleString;
}
const person: Person = {
  name: "Dingo",
  age: 1000,
  hobbies: ['sports', 'cookies'],
  role: [1, 'player'],
  enum_role_value: Role.ADMIN,
  enum_role_string: RoleString.ADMIN
};


for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

