class Department {
  name: string;
  employees: string[] = [];
  
  constructor(name: string) {
    this.name = name;
  }
  describe(this: Department): void {
    console.log(`Department name is: ${this.name}`);
  }

  addEmployee(employee:string): void {
    this.employees.push(employee);
  }
  
  printEmployeeInfo(): void {
    console.log(this.employees);
  }
}

const marketing = new Department("Marketing");

marketing.describe();
marketing.addEmployee("Dingo");
marketing.printEmployeeInfo();
