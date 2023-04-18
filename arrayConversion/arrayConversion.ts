/* 
Given an array of 2k integers (for some integer k), perform the following operations until the array contains only one element:

-   On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
-   On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product.
After the algorithm has finished, there will be a single element left in the array. Return that element.
*/
export function arrayConversion(inputArray: number[]): number {
  // keep track if the current iteration is odd or even
  let isOdd = true;

  // iterate array and decrease its size by half until it is 1
  while (inputArray.length !== 1) {
    inputArray = sumProduct(inputArray, isOdd);
    isOdd = !isOdd;
  }
  return inputArray[0];
}

function sumProduct(num: number[], isOdd: boolean): number[] {
  const sumProducts: number[] = [];

  if (isOdd) {
    for (let i = 0; i < num.length; i += 2) {
      sumProducts.push(num[i] + num[i + 1]);
    }
  } else {
    for (let i = 0; i < num.length; i += 2) {
      sumProducts.push(num[i] * num[i + 1]);
    }
  }
  return sumProducts;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));

// TODO solve with recursion
