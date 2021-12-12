class Department {
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }
}

const marketing = new Department("Marketing");
console.log(marketing)