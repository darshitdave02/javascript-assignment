const { doubleNumbers, filterEvenNumbers, arrayOperation} = require('./arrayUtilities');

describe('Array utilities',() => {
  describe('Double numbers',() => {
    it('Should double the elements when the input is an array',() => {
      const result = doubleNumbers([1,2,3]);
      expect(result).toEqual([2,4,6]);
    });

    // it('Should return -1 when input is not an array',() => {
    //     const result = doubleNumbers('abc');
    //     expect(result).toBe(-1)
    // })

    it('Should throw an error when input is not an array',() => {
            
           
      expect(()=> doubleNumbers('abs')).toThrow('Input is not an array');
    });

    it('Should throw an error when array has an element which is not a number',() => {
            
           
      expect(()=> doubleNumbers([1,23,678,'hello',97])).toThrow('Array should consist of numbers only');
    });

  });

  describe('Filter even numbers',() => {
    it('Should give even numbers when the input is an array',() => {
      const result = filterEvenNumbers([1,2,3]);
      expect(result).toEqual([2]);
    });

    it('Should throw an error when input is not an array',() => {
            
           
      expect(()=> filterEvenNumbers('abs')).toThrow('Input is not an array');
    });

    it('Should throw an error when array has an element which is not a number',() => {
            
           
      expect(()=> filterEvenNumbers([1,23,678,'hello',97])).toThrow('Array should consist of numbers only');
    });

  });

  describe('Triple elements in array and filter out even numbers',() => {
    it('Should give even numbers when the input is an array',() => {
      const result = arrayOperation([1,2,3]);
      expect(result).toEqual([6]);
    });

    it('Should throw an error when input is not an array',() => {
            
           
      expect(()=> arrayOperation('abs')).toThrow('Input is not an array');
    });

    it('Should throw an error when array has an element which is not a number',() => {
            
           
      expect(()=> arrayOperation([1,23,678,'hello',97])).toThrow('Array should consist of numbers only');
    });

  });

  
});