const proxy = new Proxy({}, {
  set(target, prop, value, receiver) {
    console.log(`set ${prop} = ${value}`);
    target[prop] = value;
  },
  defineProperty(target, prop, desc) {
    console.log(`define ${prop} desc: ${desc}`);
    return false;
  }
})

proxy.foo = 123;
console.log(proxy.foo);
