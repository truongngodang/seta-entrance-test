export default function second_test(a) {
  const arr = [...a];
  const arrSorted = arr.sort((a, b) => b - a);
  return arrSorted.filter((_, i) => i < 2).reduce((a, b) => a + b, 0);
}
