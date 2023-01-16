const findSameDigitNumber1 = require('./sameDigitNumber');
const findSameDigitNumber2 = require('./sameDigitNumber');

describe('Test to check same digit number',()=>{
    
  test('2222 is a same digit number',() => {
        
    expect(findSameDigitNumber1(2222)).toBeTruthy();
  });
    
  test('2345 is not a same digit number',() => {
        
    expect(findSameDigitNumber2(2345)).toBeFalsy();
  });

  test('99999 is a same digit number',() => {
        
    expect(findSameDigitNumber2(99999)).toBeTruthy();
  });

  test('3334 is not a same digit number',() => {
        
    expect(findSameDigitNumber1(3334)).toBeFalsy();
  });
    
});


