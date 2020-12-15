function ArrayChallenge(strArr) {
  // code goes here
  let matchArr = [];
  let inputWordsArr = strArr[0].split("");
  let dictionaryWordsStrArr = strArr[1].split(",");
  let dictionaryWordsArr = dictionaryWordsStrArr.map(function (element) {
    return element.split("");
  });

  for (let j = 0; j < dictionaryWordsArr.length; j++) {
    if (inputWordsArr[0] === dictionaryWordsArr[j][0]) {
      matchArr.push(dictionaryWordsArr[j]);
      console.log(j);
    }
  }
  console.log(inputWordsArr[0], matchArr[0].length);
  let maxLength = matchArr[0].length;
  for (let i in matchArr) {
    if (maxLength < matchArr[i].length) {
      maxLength = matchArr[i].length;
    }
  }
  console.log(maxLength);

  let firstWord = strArr[0].substring(0, maxLength);
  let secondWord = strArr[0].substring(maxLength, strArr[0].length);
  let res = [];

  res.push(firstWord, ",", secondWord);
  console.log("resss", res);
  let fres = res.join("");
  console.log(firstWord, secondWord, "fress", fres);
}

ArrayChallenge(["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]);
