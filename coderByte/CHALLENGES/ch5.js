let Stack = [];
let ArrPop = [];
function GraphChallenge(strArr) {
  let result = [];
  let finalResultArr = [];
  let finalResultArredit = [];
  arr = strArr.map((element) => {
    return element.split(":");
  });

  iArr = arr.map((element) => {
    return element.map((i) => JSON.parse(i));
  });

  let sortediArr = sortArr(iArr);
  iArr = sortediArr;

  for (let i = 0; i < iArr.length; i++) {
    for (let j = 0; j < iArr[i].length / 2; j++) {
      result.push(dfsStack(iArr[i][j], iArr));
      finalResultArr.push(ArrDivide(result[i], getChildren(iArr[i][j], iArr)));
    }
    ArrPop = [];
  }

  finalResultArredit = finalResultArr.map((elObj) => {
    return `${elObj.City}:${elObj.Traffic},`;
    //finalResultArredit.push(",")
    //console.log(elObj.City, ":", elObj.Traffic, ",");

    //return finalResultArredit;
  });
  let fres = finalResultArredit.join("");
  let editedText = fres.slice(0, -1);
  // x = finalResultArredit.map(Number);

  return editedText;
}

// keep this function call here
console.log(
  GraphChallenge([
    "1:[5]",
    "2:[5,18]",
    "3:[5,12]",
    "4:[5]",
    "5:[1,2,3,4]",
    "18:[2]",
    "12:[3]",
  ])
);

function getChildren(nodeValue, iArr) {
  for (let i = 0; i < iArr.length; i++) {
    for (let j = 0; j < iArr[i].length / 2; j++) {
      if (iArr[i][j] == nodeValue) {
        return iArr[i][j + 1];
      }
    }
  }
}

function dfsStack(nodeValue, iArr) {
  if (ArrPop.indexOf(nodeValue) == -1) {
    //console.log("nodeValue", nodeValue);
    Stack.push(nodeValue);
    PopElemnt = Stack.pop();
    //console.log("PopElemnt", PopElemnt);
    ArrPop.push(PopElemnt);
    //console.log("ArrPop", ArrPop);
    PopElemntChildren = getChildren(PopElemnt, iArr);
    //console.log("PopElemntChildren", PopElemntChildren);
    PopElemntChildren.forEach((child) => {
      dfsStack(child, iArr);
    });
    return ArrPop;
  }
  return;
}

function ArrDivide(result, children) {
  let indexArr = [];
  //console.log("result", result, "children", children);
  indexArr = children.map((nodeValue) => {
    return getIndex(nodeValue, result);
  });

  return getSum(indexArr, result);
  //console.log("indexArr", indexArr);
}

function getIndex(nodeValue, Arr) {
  for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] == nodeValue) {
      return i;
    }
  }
}

function getSum(indexArr, result) {
  if (indexArr.length == 1) {
    let sumResult;
    indexArr.forEach((i) => {
      let sum = 0;
      for (let j = i; j < result.length; j++) {
        sum = sum + result[j];
      }
      sumResult = sum;
    });
    return { City: result[0], Traffic: sumResult };
  } else if (indexArr.length > 1) {
    let ArrSlice = [];
    for (let i = 0; i < indexArr.length; i++) {
      let indexChild = indexArr[i];
      let indexNextChild = indexArr[i + 1];
      ArrSlice.push(result.slice(indexChild, indexNextChild));
    }
    let ArrSum = [];
    ArrSlice.forEach((Arr) => {
      sum = 0;
      if (Arr.length == 1) {
        ArrSum.push((sum = Arr[0]));
        //console.log("sum", sum);
      } else {
        Arr.forEach((el) => {
          sum = sum + el;
          //console.log("sum", sum);
        });
        ArrSum.push(sum);
      }
    });

    //console.log("ArrSlice", ArrSlice);
    //console.log("ArrSum", ArrSum);
    sumResult = Math.max(...ArrSum);
    //console.log("ArrSumMaxSpred", ...ArrSum);

    return { City: result[0], Traffic: sumResult };
  }
}

function sortArr(iArr) {
  let nodeValuesArr = [];
  let sortedArr = [];
  for (let i = 0; i < iArr.length; i++) {
    for (let j = 0; j < iArr[i].length / 2; j++) {
      nodeValuesArr.push(iArr[i][j]);
    }
  }
  nodeValuesArr.sort((a, b) => a - b);
  //console.log(nodeValuesArr);

  nodeValueindexArr = nodeValuesArr.map((nodeValue) => {
    return getIndexMatrix(nodeValue, iArr);
  });
  //console.log(nodeValueindexArr);
  nodeValueindexArr.forEach((j) => {
    for (let i = 0; i < iArr.length; i++) {
      if (i == j) {
        sortedArr.push(iArr[i]);
      }
    }
  });
  //console.log(sortedArr);
  return sortedArr;
}

function getIndexMatrix(nodeValue, Arr) {
  for (let i = 0; i < Arr.length; i++) {
    for (let j = 0; j < iArr[i].length / 2; j++) {
      if (Arr[i][j] == nodeValue) {
        return i;
      }
    }
  }
}
