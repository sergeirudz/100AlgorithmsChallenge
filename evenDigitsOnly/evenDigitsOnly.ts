/* 
Check if all digits of the given integer are even.
*/
export function evenDigitsOnly(n: number): boolean {
  const digits = n.toString().split('');

  return digits.every((digit) => parseInt(digit) % 2 === 0);
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));
