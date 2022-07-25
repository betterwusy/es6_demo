const obj = {
  foo: 123
};

console.log(
  Reflect.deleteProperty(obj, 'foo')

);
console.log(obj);
