const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];
  
test('The shopping list has milk', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
});


test('A cheat sheet with some other small examples', () => {
  expect([]).toEqual(expect.any(Array))
  expect(['Alice', 'Bob', 'Eve']).toHaveLength(3)
  expect(['Alice', 'Bob', 'Eve']).toContain('Alice')
  expect([{ a: 1 }, { a: 2 }]).toContainEqual({ a: 1 })
  expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(['Alice', 'Bob']))
});