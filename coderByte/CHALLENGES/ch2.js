function MathChallenge(num1, num2) {
  // code goes here
  let smallestNum, largestNum, reminder, GFC;
  if (num1 == num2) {
    return num1;
  } else if (num1 > num2) {
    smallestNum = num2;
    largestNum = num1;
  } else if (num1 < num2) {
    smallestNum = num1;
    largestNum = num2;
  }
  reminder = largestNum % smallestNum;
  if (smallestNum % reminder == 0) {
    GFC = reminder;
    return GFC;
  } else {
    return MathChallenge(smallestNum, reminder); // why can not without retun --revision recursion
  }
}

// keep this function call here
console.log(MathChallenge(56, 98));
