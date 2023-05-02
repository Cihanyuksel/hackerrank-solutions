function cavityMap(grid) {
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[i].length - 1; j++) {
      const current = +grid[i][j];
      const north = +grid[i - 1][j];
      const south = +grid[i + 1][j];
      const east = +grid[i][j + 1];
      const west = +grid[i][j - 1];

      if (current > (north && south && east && west)) {
        grid[i] = grid[i].substring(0, j) + "X" + grid[i].substring(j + 1);
      }
    }
  }
  return grid;
}