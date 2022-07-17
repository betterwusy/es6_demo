let obj = { length: 2, 0: 'c', 1: 'd' };
let arr = ['a', 'b'].concat(obj, 'e');
console.log(arr);
//  [ 'a', 'b', { '0': 'c', '1': 'd', length: 2 }, 'e' ]

obj[Symbol.isConcatSpreadable] = true;
arr = ['a', 'b'].concat(obj, 'e');
console.log(arr);
// [ 'a', 'b', 'c', 'd', 'e' ]
