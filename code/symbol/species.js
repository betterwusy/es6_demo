class MyArray extends Array {
  static get [Symbol.species]() {
    // return this;
    return Array;
  }
}

const a = new MyArray(1, 2, 3);
const b = a.map(x => x);
// const c = a.filter(x => x > 1);

console.log(b instanceof MyArray);
console.log(b instanceof Array);
