// what is the max number I can get by adding k consecutive numbers in the array?
export function arrayMaxConsecutiveSum(
  inputArray: number[],
  k: number
): number {
  let sum = 0;
  let max = 0;

  // find consecutive numbers up to k to initialize our max value
  for (let i = 0; i < k; i++) {
    sum += inputArray[i];
  }

  max = sum;

  // start at k
  for (let i = k; i < inputArray.length; i++) {
    sum -= inputArray[i - k];
    sum += inputArray[i];

    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
