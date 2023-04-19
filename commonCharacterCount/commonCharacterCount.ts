/* 
Given two strings, find the number of common characters between them.

**Example**

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".
*/

export function commonCharacterCount(s1: string, s2: string): number {
  const s1Chars: string[] = s1.split('');
  const s2Chars: string[] = s2.split('');
  const s1CharCount = getCharList(s1Chars);
  const s2CharCount = getCharList(s2Chars);
  let total = 0;

  for (const prop in s1CharCount) {
    if (s2CharCount.hasOwnProperty(prop)) {
      if (s1CharCount[prop] > s2CharCount[prop]) {
        total += s2CharCount[prop];
      } else {
        total += s1CharCount[prop];
      }
    }
  }
  return total;
}

function getCharList(chars: string[]) {
  const wordCount = {};

  for (let i = 0; i < chars.length; i++) {
    if (wordCount.hasOwnProperty(chars[i])) {
      wordCount[chars[i]]++;
    } else {
      wordCount[chars[i]] = 1;
    }
  }

  return wordCount;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));
