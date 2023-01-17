const {DivisionByZeroError, UnsupportedTypeError} = require('./errors');
const {division} = require('./numberUtilities');

describe('Number Utilities', () => {
  describe('Divison of two numbers', () => {
    it('Should return 1 when 2 is divide by 2', ()=> {
      expect(division(2, 2)).toBe(1);
    });
  
    it('Should throw unsupported type error when input is not a number', ()=> {
      expect(() => {division('a', 'b')}).toThrow(UnsupportedTypeError);
    });
  
    it('Should throw error divisor is 0', ()=> {
      expect(() => {division(2, 0)}).toThrow(DivisionByZeroError);
    });
  })
})