var pipe = function (value) {
  var funcStack = [];
  var oproxy = new Proxy({}, {
    get(pipeObject, fnName) {
      if (fnName === 'get') {
        return funcStack.reduce(function (val, fn) {
          return fn(val);
        }, value);
      }
      funcStack.push(window[fnName]);
      return oproxy;
    }
  });
  return oproxy;
}
