/* 
Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

Given an integer, find its digit degree.

**Example**

- For n = 5, the output should be
digitDegree(n) = 0;
- For n = 100, the output should be
digitDegree(n) = 1.
1 + 0 + 0 = 1.
- For n = 91, the output should be
digitDegree(n) = 2.
9 + 1 = 10 -> 1 + 0 = 1.
*/

export function digitDegree(n: number): number {
  let count = 0;
  let currentNumber = n;

  if (n <= 9) {
    return count;
  } else {
    while (true) {
      count++;
      currentNumber = getDigit(currentNumber);

      if (currentNumber <= 9) break;
    }
  }

  return count;
}

function getDigit(num: number) {
  const nums: number[] = num
    .toString()
    .split('')
    .map((element) => parseInt(element));

  return nums.reduce((a, b) => {
    return a + b;
  });
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));
