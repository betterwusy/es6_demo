function Foo(name) {
  this.name = name;
}

const f1 = new Foo('test');

const f2 = Reflect.construct(Foo, ['test']);
console.log(f1, f2);
