class Department {
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  describe(this: Department): void {
    console.log(`Department name is: ${this.name}`);
  }
}

const marketing = new Department("Marketing");

marketing.describe();
