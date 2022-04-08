let arr2 = ['c', 'd'];
arr2[Symbol.isConcatSpreadable] = false;
let res = ['a', 'b'].concat(arr2, 'e')
console.log(res);
