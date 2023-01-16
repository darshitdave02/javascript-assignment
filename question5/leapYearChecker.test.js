const checkLeapYear1 = require('./leapYearChecker');
const checkLeapYear2 = require('./leapYearChecker');

describe('Test to check leap year',()=>{
  test('test case one',()=>{
        
    expect(checkLeapYear1(2001)).toBeFalsy();
  });

  test('test case two',()=>{
    expect(checkLeapYear2(2016)).toBeTruthy();
        
  });

  test('test case three',()=>{
       
    expect(checkLeapYear1(2011)).toBeFalsy();
  });

    
}
);