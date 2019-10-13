import second_test from "./second-test";

it('test function second 1', () => {
  const a = [1, 4, 2, 3, 5];
  expect(second_test(a)).toEqual(9);
});

it('test function second 2', () => {
  const a = [];
  expect(second_test(a)).toEqual(0);
});

it('test function second 3', () => {
  const a = [1, 1, 1, 1, 1];
  expect(second_test(a)).toEqual(2);
});
