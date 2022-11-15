// pair of adjacent elements that has the largest product and return that product
export function adjacentElementsProduct(inputArray: number[]): number {
  let largestProduct = inputArray[0] * inputArray[1];

  for (let i = 1; i < inputArray.length - 1; i++) {
    const product = inputArray[i] * inputArray[i + 1];
    if (product > largestProduct) {
      largestProduct = largestProduct < product ? product : largestProduct;
    }
  }

  return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
