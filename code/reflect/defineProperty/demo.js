const obj = {};

Reflect.defineProperty(obj, 'foo', {
  value: 1
})

console.log(Reflect.getOwnPropertyDescriptor(obj,'foo'));
