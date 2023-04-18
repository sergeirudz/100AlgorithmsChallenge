// how many places can we touch to make a clean jump. How many obstacles can we avoid?
export function avoidObstacles(inputArray: number[]): number {
  inputArray.sort((a, b) => a - b);

  // get largest value in array
  const largestArrayVal = inputArray[inputArray.length - 1];

  for (let i = 1; i <= largestArrayVal + 1; i++) {
    if (inputArray.every((element) => element % i !== 0)) {
      return i;
    }
  }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
