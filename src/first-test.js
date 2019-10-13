export default function first_test(a) {
  const lenArr = a.map(v => v.length).sort();

  let mode_arr = [];

  let most_f = 0;
  let currentCount = 0;

  lenArr.forEach((l, i) => {
    // Reset when move to next length type
    if (l !== lenArr[i - 1]) {
      currentCount = 0;
    }
    currentCount += 1;
    if (currentCount > most_f) {
      most_f = currentCount;
      mode_arr = [l]
    } else if (currentCount === most_f) {
      mode_arr.push(l)
    }
  });
  return  a.filter(e => mode_arr.includes(e.length)).sort((e1, e2) => e1.length - e2.length);
}
