function makeIterator(array) {
  var nextIndex = 0;
  return {
    next() {
      return nextIndex < array.length ?
        { value: array[nextIndex++] } :
        {  done: true }
    }
  }
}

let it = makeIterator([1, 3, 5, 7]);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
