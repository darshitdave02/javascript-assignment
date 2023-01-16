const concatenate1 = require('./concatenate');
const concatenate2 = require('./concatenate');

describe('Test to check concatenation of strings without first character',()=>{
  test('test case one',()=>{
        
    expect(concatenate1(['hello','guys'])).toBe('ellouys');
  });

  test('test case two',()=>{
    expect(concatenate2(['Code','Academy'])).toBe('odecademy');
        
  });

  test('test case three',()=>{
       
    expect(concatenate1(['One','Two'])).toBe('newo');
  });

   
}
);