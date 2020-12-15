let iArr = [
  [1, [5]],
  [2, [5, 18]],
  [3, [5, 12]],
  [4, [5]],
  [5, [1, 2, 3, 4]],
  [18, [2]],
  [12, [3]],
];
let result = [];
for (let i = 0; i < iArr.length; i++) {
  for (let j = 0; j < iArr[i].length / 2; j++) {
    result.push(iArr[i][j]);
  }
}
result.sort((a, b) => a - b);

iArr.sort((a, b) => a - b);
//result.sort();
//let x = [1, 2, 5, 4];

console.log(result);
console.log(iArr);
//console.log(x.sort());
