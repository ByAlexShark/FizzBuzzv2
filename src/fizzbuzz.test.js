const fizzBuzz = require('../src/fizzbuzz');

describe('FizzBuzz Tests', () => {
  
  test('Devuelve "Fizz" si es múltiplo de 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(6)).toBe('Fizz');
    expect(fizzBuzz(9)).toBe('Fizz');
  });

  test('Devuelve "Buzz" si es múltiplo de 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(10)).toBe('Buzz');
    expect(fizzBuzz(20)).toBe('Buzz');
  });

  test('Devuelve "FizzBuzz" si es múltiplo de 3 y 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
    expect(fizzBuzz(45)).toBe('FizzBuzz');
  });

  test('Devuelve el número mismo si no es múltiplo de 3 ni de 5', () => {
    expect(fizzBuzz(1)).toBe(1);
    expect(fizzBuzz(2)).toBe(2);
    expect(fizzBuzz(7)).toBe(7);
  });
});
