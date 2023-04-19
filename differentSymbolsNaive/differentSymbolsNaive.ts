/* 
Given a string, find the number of different characters in it.

*/
export function differentSymbolsNaive(s: string): number {
  const uniqueChars = new Set();

  const inputChars = s.split('');
  inputChars.forEach((char: string) => {
    uniqueChars.add(char);
  });

  return uniqueChars.size;

  //! Method2
  /*   const uniqueChars = {};
  const inputChars = s.split('');

  inputChars.forEach((char: string) => {
    uniqueChars[char] = 1;
  });

  return Object.keys(uniqueChars).length; */

  //! Method1
  /*   const uniqueChars: string[] = [];
  const inputChars: string[] = s.split('');

  inputChars.forEach((char: string) => {
    if (!uniqueChars.includes(char)) {
      uniqueChars.push(char);
    }
  });

  return uniqueChars.length; */
}

console.log(differentSymbolsNaive('cabca'));
