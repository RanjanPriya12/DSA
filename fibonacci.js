const n = 5;

function fibonacci(a, b, count) {
  if (count === 0) return;

  console.log(a);
  fibonacci(b, a + b, count - 1);
}

fibonacci(0, 1, n + 1);
