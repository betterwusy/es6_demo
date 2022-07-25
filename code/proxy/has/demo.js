const obj = {
  foo: 123
};

console.log('foo' in obj);
console.log(Reflect.has(obj, 'foo'));
