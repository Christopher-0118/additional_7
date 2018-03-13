function getCandidats(matrix, matRow, matColumn) {
  let candidats = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let lengthMatrix = matrix.length;
  let posRowCandidats;
  let posColumnCandidats;
  let rowCandidats;
  let columnCandidats;

  for (let i = 0; i < lengthMatrix; i++) {
    posRowCandidats = candidats.indexOf(matrix[matRow][i]);
    posColumnCandidats = candidats.indexOf(matrix[i][matColumn]);
    rowCandidats = matrix[matRow][i];
    columnCandidats = matrix[i][matColumn];

    if (rowCandidats !== 0 && posRowCandidats) {
      candidats.slice(posRowCandidats, 1);
    } else if (columnCandidats !== 0 && posColumnCandidats) {
      candidats.slice(posColumnCandidats, 1);
    }
  }
  if (candidats.length === 1) {
    return candidats[0];
  }
  return candidats; 
}

module.exports = function solveSudoku(matrix) {
  let theEnd = true;
  let lengthMatrix = matrix.length;

  for (let row = 0; row < lengthMatrix; row++) {
    for (let column = 0; column < lengthMatrix; column++) {
      if (matrix[row][column] === 0) {
        matrix[row][column] = getCandidats(matrix, row, column);
      }
    }
  }
  return matrix;
}
