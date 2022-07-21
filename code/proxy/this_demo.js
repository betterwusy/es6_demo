const target = {
  m() {
    console.log(this === proxy);
  }
}
const handler = {};

const proxy = new Proxy(target, handler);

target.m();
proxy.m();
