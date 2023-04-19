/* 
Given the string, check if it is a palindrome.

**Example**

- For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;
- For inputString = "abac", the output should be
checkPalindrome(inputString) = false;
- For inputString = "a", the output should be
checkPalindrome(inputString) = true.
*/

export function checkPalindrome(inputString: string): boolean {
  const originalWord = inputString.toLowerCase();
  const reversedWord = originalWord.split('').reverse().join('');

  return reversedWord === originalWord;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
