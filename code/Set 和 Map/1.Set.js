const s = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
for (let i of s) {
  console.log(i);
}

const set = new Set([1, 2, 3, 4, 4]);
console.log([...set]);
