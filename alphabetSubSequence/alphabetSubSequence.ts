export function alphabetSubsequence(s: string): boolean {
  const chars: string[] = s.split('');
  const charValues: number[] = [];

  // get ASCII values of each char
  chars.forEach((char: string) => {
    charValues.push(char.charCodeAt(0));
  });

  // check if there are any duplicates
  if (new Set(charValues).size !== charValues.length) {
    return false;
  }

  // if any letter that come before are larger than the letter after it, return false
  for (let i = 0; i < charValues.length; i++) {
    if (charValues[i] >= charValues[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log(alphabetSubsequence('zab'));
console.log(alphabetSubsequence('effg'));
console.log(alphabetSubsequence('cdce'));
console.log(alphabetSubsequence('ace'));
console.log(alphabetSubsequence('bxz'));
