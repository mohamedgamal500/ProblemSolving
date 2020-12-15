function SearchingChallenge(strArr) {
  let numOfZeros = 0;

  Arr = strArr.map(function (row) {
    return row.split("");
  });

  for (let i = 0; i < Arr.length; i++) {
    for (let j = 0; j < Arr[i].length; j++) {
      if (Arr[i][j] === "0") {
        numOfZeros = numOfZeros + getNumOfgroups(Arr, i, j);
      }
    }
  }
  // code goes here
  return numOfZeros;
}

function getNumOfgroups(Arr, i, j) {
  if (
    i < 0 ||
    i >= Arr.length ||
    j < 0 ||
    j >= Arr[i].length ||
    Arr[i][j] === "1"
  ) {
    return;
  }
  Arr[i][j] = "1";
  getNumOfgroups(Arr, i - 1, j);
  getNumOfgroups(Arr, i + 1, j);
  getNumOfgroups(Arr, i, j - 1);
  getNumOfgroups(Arr, i, j + 1);
  return 1;
}

// keep this function call here
console.log(SearchingChallenge(["01111", "01101", "00011", "11110"]));
