import '@testing-library/jest-dom';

test('penjumlahan sederhana', () => {
    expect(1 + 2).toBe(3);
  });
  
  test('Penjumlahan 1 + 2 sama dengan 3', () => {
    expect(1 + 2).toBe(3);
  });
  
  // 2. Pengujian string
  test('Menggabungkan string "Madang" dan "Sega"', () => {
    expect('Madang' + 'Sega').toBe('MadangSega');
  });
  
  // 3. Pengujian array
  test('Array [1, 2, 3] mengandung angka 2', () => {
    const arr = [1, 2, 3];
    expect(arr).toContain(2);
  });
  
