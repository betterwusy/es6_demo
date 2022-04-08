function createArray(...elements) {
  let target = [];
  target.push(...elements);
  return new Proxy(target, {
    get(target, propKey, receiver) {
      console.log(propKey);
      let index = Number(propKey);
      if (index < 0) propKey = String(target.length + index);
      return Reflect.get(target, propKey, receiver)
    }
  })
}
let arr = createArray('a', 'b', 'c');
console.log(arr[-1]);
