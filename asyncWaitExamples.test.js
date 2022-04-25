test.skip('The data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});

test.skip('The data is peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
});
