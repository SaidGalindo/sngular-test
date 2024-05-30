
export function calcularTriangular(n: number) { return (n * (n + 1)) / 2 }

export function fibonacci(n: number): number {
  // if (n <= 1) {
  //   return n;
  // } else {
  //   return fibonacci(n - 1) + fibonacci(n - 2);
  // }
  if (n <= 1) {
    return n;
  }
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

export function esPrimo(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

export function calcularSiguientePrimo(n: number):number {
  return esPrimo(n) ? n : calcularSiguientePrimo(n+1)
}

export function serie(n: number) {
  const triangularRes = calcularTriangular(n);
  const fibonacciRes = fibonacci(n);
  const primoRes = calcularSiguientePrimo(n + 1);
  return 5 * triangularRes - 2 * fibonacciRes + primoRes;
}
