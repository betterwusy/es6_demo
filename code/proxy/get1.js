let proto = new Proxy({}, {
  get(target, prop, receiver) {
    console.log('GET ' + prop);
    return target[prop];
  }
})

let obj = Object.create(proto);
obj.foo  // "GET foo"
