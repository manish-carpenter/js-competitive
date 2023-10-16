class items {
  arr = []
  push(item) {
    this.arr.push(item);
    return item;
  }

  pop() {
    return this.arr.pop();
  }

  pick() {
    return this.arr.length;
  }
}

const stack = new items();
console.log(`pick`, stack.pick());
stack.push(12);
console.log(`pick`, stack.pick());
stack.push(10);
console.log(`pick`, stack.pick());
console.log(`pop`, stack.pop());
console.log(`pick`, stack.pick());