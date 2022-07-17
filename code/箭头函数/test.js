let arr1 = ['c', 'd'];
let arr = ['a', 'b'].concat(arr1, 'e')
console.log(arr);

let arr2 = ['c', 'd'];
arr2[Symbol.isConcatSpreadable] = false;
arr = ['a', 'b'].concat(arr2, 'e');
console.log(arr);

