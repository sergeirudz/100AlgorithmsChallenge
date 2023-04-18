/* 
Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.
 */
export function arrayReplace(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  inputArray.forEach((element, index) => {
    if (element === elemToReplace) {
      inputArray[index] = substitutionElem;
    }
  });

  return inputArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));
