import first_test from "./first-test";

it('test function first 1', () => {
  const a = ['a', 'ab', 'abc', 'cd', 'def', 'gh'];
  expect(first_test(a)).toEqual(['ab', 'cd', 'gh']);
});

it('test function first 2', () => {
  const a = ['a', 'ab', 'abc', 'cd', 'def', 'gh', 'ghj', 'rty'];
  expect(first_test(a)).toEqual(['abc', 'def', 'ghj', 'rty']);
});

it('test function first 3', () => {
  const a = ['a', 'ab', 'abc', 'cd', 'def', 'gh', 'ghj', 'rty', 'fg'];
  expect(first_test(a)).toEqual(['ab', 'cd', 'gh', 'fg', 'abc', 'def', 'ghj', 'rty']);
});

it('test function first 4', () => {
  const a = [];
  expect(first_test(a)).toEqual([]);
});
