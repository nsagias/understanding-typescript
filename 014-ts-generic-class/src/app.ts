class DataStorage {
  private data = [];

  addItem(item) {
    this.data.push(item);
  }

  removeItem(item) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}