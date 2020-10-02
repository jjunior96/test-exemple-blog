describe('Learning basics concepts of Jest', () => {
  it('should be null', () => {
    const n = null;

    // Vão passar
    expect(n).toBeNull(); 
    expect(n).toBeDefined();
    expect(n).toBeFalsy();

    const number = 10;

    expect(number).not.toBeNull();
    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).toBeGreaterThan(0);
    expect(number).toBeLessThan(11);
  });
});

test('adicionando números de ponto flutuante', () => {
  const value = 0.1 + 0.2;

  // Isso não vai funcionar por causa de um erro de arredondamento
  // expect(value).toBe(0.3);     

  // Isso funciona
  expect(value).toBeCloseTo(0.3); 
});

test('should be test with objects', () => {
  const obj = { name: 'Jack', 'age': 32 };

  expect(obj).toHaveProperty('name');
  expect(obj).toHaveProperty('name', 'Jack');
  expect(obj.name).toBe('Jack');

  const obj2 = { name: 'Jack', 'age': 32 };
  expect(obj).toBe(obj2); // Erro, pois o obj só é igual a ele mesmo
})