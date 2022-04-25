const sum = require('./sum');

test('Test : adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('Test : adds 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4);
});

test('Test : adds 4 + 4 to equal 8', () => {
    expect(sum(4, 4)).toBe(8);
});
