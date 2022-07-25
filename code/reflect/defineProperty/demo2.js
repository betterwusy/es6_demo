const proxy = new Proxy({}, {
  defineProperty(target, prop, desc) {
    console.log(desc);
    return Reflect.defineProperty(target, prop, desc);
  }
})

proxy.foo = 321;
