var handler = {
  get(target, name) {
    if (name === 'prototype') {
      return Object.prototype;
    }
    return 'hello,' + name;
  },
  apply(target, thisBinding, args) {
    return args[0];
  },
  constructor(target, args) {
    return { value: args[1] };
  }
};

var fproxy = new Proxy(function (x, y) {
  return x + y;
}, handler);

fproxy(1,2);
new fproxy(1,2);
fproxy.prototype === Object.prototype
fproxy.foo === 'hello,foo';
