class DataStorage<T> {
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

// objects example
const objectStorage = new DataStorage<object>();
objectStorage.addItem({name: "Nick"});
objectStorage.addItem({name: "Dingo"});
console.log(objectStorage.getItems());
objectStorage.removeItem({name: "Nick"});
console.log(objectStorage.getItems());