/* 
Given an array of integers, write a function that determines whether the array contains any duplicates. Your function should return true if any element appears at least twice in the array, and it should return false if every element is distinct.

*/
export function containsDuplicates(a: number[]): boolean {
  a = a.sort((a, b) => a - b);

  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i + 1]) {
      return true;
    }
  }

  return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
