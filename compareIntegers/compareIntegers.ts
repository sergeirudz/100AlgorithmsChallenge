/* 
Compare two integers given as strings.

**Example**
-   For a = "12" and b = "13", the output should be compareIntegers(a, b) = "less";

-   For a = "875" and b = "799", the output should be compareIntegers(a, b) = "greater";

-   For a = "1000" and b = "1000", the output should be compareIntegers(a, b) = "equal".
*/
export function compareIntegers(a: string, b: string): string {
  return parseInt(a) > parseInt(b)
    ? 'greater'
    : parseInt(a) < parseInt(b)
    ? 'less'
    : 'equal';
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));
