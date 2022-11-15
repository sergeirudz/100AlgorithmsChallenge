// build a wall around the given array of strings
export function addBorder(picture: string[]): string[] {
  const wall = '*'.repeat(picture[0].length + 2);
  console.log(wall);

  picture.unshift(wall);
  picture.push(wall);

  for (let i = 1; i < picture.length; i++) {
    picture[i] = '*'.concat(picture[i], '*');
  }

  return picture;
}

console.log(addBorder(['abc', 'ded']));
