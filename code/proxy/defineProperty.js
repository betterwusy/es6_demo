var twice = {
  apply (target, ctx, args) {
    return Reflect.apply(...arguments) * 2;
  }
};
function sum (left, right) {
  return left + right;
};
var proxy = new Proxy(sum, twice);
console.log(proxy(1,2));
console.log(proxy.call(null, 5, 6));
// proxy(1, 2) // 6
// proxy.call(null, 5, 6) // 22
// proxy.apply(null, [7, 8]) // 30
