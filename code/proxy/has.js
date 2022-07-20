let stu1 = { name: '张三', score: 59 };
let stu2 = { name: '李四', score: 99 };

let handler = {
  has(target, prop) {
    if(prop === 'score' && target[prop] < 60) {
      console.log(`${target.name} 不及格`);
      return false;
    }
    return prop in target;
  }
}
let oproxy1 = new Proxy(stu1, handler);
let oproxy2 = new Proxy(stu2, handler);

'score' in oproxy1;
