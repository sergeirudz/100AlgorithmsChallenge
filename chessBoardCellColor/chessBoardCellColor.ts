/* 
Given two cells on the standard chess board, determine whether they have the same color or not.

**Example**

- For cell1 = "A1" and cell2 = "C3", the output should be
chessBoardCellColor(cell1, cell2) = true.

- For cell1 = "A1" and cell2 = "H3", the output should be
chessBoardCellColor(cell1, cell2) = false.

*/

export function chessBoardCellColor(cell1: string, cell2: string): boolean {
  const board = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  };

  const total1 = (board[cell1[0]] + parseInt(cell1[1])) % 2;
  const total2 = (board[cell2[0]] + parseInt(cell2[1])) % 2;

  return total1 === total2;
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
