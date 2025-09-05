const fizzBuzz = require('../src/fizzbuzz');

describe('FizzBuzz Tests', () => {
  test('Devuelve "Fizz" si es múltiplo de 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(6)).toBe('Fizz');
    expect(fizzBuzz(9)).toBe('Fizz');
  });
});
