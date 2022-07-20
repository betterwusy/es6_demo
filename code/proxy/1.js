var obj = new Proxy({}, {
  get(target, propKey, receiver) {
    console.log(`getting ${propKey}!`);
    return Reflect.get(target, propKey, receiver);
  },
  set(target, propKey, value, receiver) {
    console.log(`setting ${propKey}!`);
    return Reflect.set(target, propKey, value, receiver);
  }
})
obj.count = 1;
++obj.count;


var proxy = new Proxy({}, {
  get(target, propKey) {
    return 35;
  }
})
console.log(proxy.a);
