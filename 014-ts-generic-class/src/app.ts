class DataStorage<T extends string | number | boolean > {
  private data: T[] = [];

  addItem(item: T) {
    // this.data.push(item);
    const newItem = [ ...this.data, item ];
    this.data = newItem;
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

// string example
const textStorage = new DataStorage<string>();
textStorage.addItem('Nick');
textStorage.addItem('Dingo');
console.log(textStorage.getItems());
textStorage.removeItem('Dingo');
console.log(textStorage.getItems());

// number example
const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
console.log(numberStorage.getItems());
numberStorage.removeItem(2);
console.log(numberStorage.getItems());



class DataStorageObjects<T> {
  private data: T[] = [];

  addItem(item: T) {
    // this.data.push(item);
    const newItem = [ ...this.data, item ];
    this.data = newItem;
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}
// objects example
const objectStorage = new DataStorageObjects<object>();
// need to use same pointer reference in memory for objects
const nickObject = {name: "Nick"};
objectStorage.addItem(nickObject);

const dingoObject = {name: "Dingo"};
objectStorage.addItem(dingoObject);

console.log(objectStorage.getItems());
objectStorage.removeItem(dingoObject);
console.log(objectStorage.getItems());