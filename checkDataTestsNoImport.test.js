test.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`('returns $expected when $a is added $b', ({ a, b, expected }) => {
  expect(a + b).toBe(expected)
})

it.each`
      n     | expected
      ${1}  | ${1}
      ${2}  | ${4}
      ${4}  | ${16}
      ${12} | ${144}
    `('can square $n to $expected', ({ n, expected }) => {
            expect(n*n).toBe(expected);
});

test.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
  ])('.add(%s, %s)', (a, b, expected) => {
    expect(a + b).toBe(expected)
  })

it.each([[2,4], [6,36], [8,64]])('can square %i to %s', (n, expected) => {
    expect(n*n).toBe(expected);
});

it('should be even', () => {
    expect(2 % 2).toBe(0);
});

test.each([2,4,6,8])('%i should be even', (n) => {
    expect(n % 2).toBe(0);
});
