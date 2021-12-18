class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    // this.data.push(item);
    const newItem = [ ...this.data, item ];
    this.data = newItem;
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

// string example
const textStorage = new DataStorage<string>();
textStorage.addItem('Nick');
console.log(textStorage.getItems());