/* 
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

export function factorializeANumber(num: number): number {
  let total = 0;

  for (let i = 1; i <= num; i++) {
    total *= i;
  }

  return total;
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));
