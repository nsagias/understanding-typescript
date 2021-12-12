class Department {
  name: string;
  employees: string[] = [];
  
  constructor(name: string) {
    this.name = name;
  }
  describe(this: Department): void {
    console.log(`Department name is: ${this.name}`);
  }

  addEmployee(employee:string) {
    this.employees.push(employee);
  }
}

const marketing = new Department("Marketing");

marketing.describe();
