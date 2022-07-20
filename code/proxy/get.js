var person = {
  name: '张三'
};

var proxy = new Proxy(person, {
  get(target, propKey) {
    if (propKey in target)
      return target[propKey];
    else
      throw new ReferenceError("Prop name \"" + propKey + "\" does not exist.")
  }
})

proxy.name   // "张三"
proxy.age;
