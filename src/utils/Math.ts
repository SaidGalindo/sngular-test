
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

// Función para encontrar el (n+1)-ésimo número primo
export function calcularSiguientePrimo(n: number):number {
  // while (!esPrimo(n)) n++;
  // return n;
  return esPrimo(n) ? n : calcularSiguientePrimo(n+1)
}

export function serie(n: number) {
  console.log('n', n);
  
  const triangularRes = calcularTriangular(n);
  console.log('triangular:', triangularRes);
  
  const fibonacciRes = fibonacci(n);
  console.log('fibonacci:', fibonacciRes);
  const primoRes = calcularSiguientePrimo(n + 1);
  console.log('siguiente primo:', primoRes);
  return 5 * triangularRes - 2 * fibonacciRes + primoRes;
}
