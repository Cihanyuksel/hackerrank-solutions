function stones(n, a, b) {
  const result = [];
  for (let i = 0; i < n; i++) {
    const min = Math.min(a, b) * (n - 1 - i);
    const max = Math.max(a, b) * i;
    result.push(min + max);
  }
  return [...new Set(result.sort((a, b) => a - b))];
}

console.log(stones(4, 10, 100));
console.log(stones(3, 1, 2));
console.log(stones(58, 69, 24));
console.log(stones(5, 3, 23));
console.log(stones(73, 25, 25));