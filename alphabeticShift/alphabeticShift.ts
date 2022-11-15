// Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).
// replace each character with the next one in the alphabet
export function alphabeticShift(inputString: string): string {
  // dictionary of alphabet letters
  const alphabet = {
    a: 'b',
    b: 'c',
    c: 'd',
    d: 'e',
    e: 'f',
    f: 'g',
    g: 'h',
    h: 'i',
    i: 'j',
    j: 'k',
    k: 'l',
    l: 'm',
    m: 'n',
    n: 'o',
    o: 'p',
    p: 'q',
    q: 'r',
    r: 's',
    s: 't',
    t: 'u',
    u: 'v',
    v: 'w',
    w: 'x',
    x: 'y',
    y: 'z',
  };

  let inputShifted = inputString.split('');
  console.log(inputShifted);

  for (let i = 0; i < inputShifted.length; i++) {
    inputShifted[i] = alphabet[inputShifted[i]];
  }
  return inputShifted.join('');
}

console.log(alphabeticShift('crazy'));
