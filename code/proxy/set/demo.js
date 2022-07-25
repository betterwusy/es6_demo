const proxy = new Proxy({}, {
  set(target, key, value, receiver) {
    console.log(`set ${key}`);
    Reflect.set(target, key, value, receiver);
  },
  defineProperty(target, key, attribute) {
    console.log('define property');
    Reflect.defineProperty(target, key, attribute);
  }
})

proxy.foo = 123;
