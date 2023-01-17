const countVowels1 = require('./vowelCounter');
const countVowels2 = require('./vowelCounter');

describe('Test to count number of Vowels',()=>{
  test('test case one',()=>{
        
    expect(countVowels1('Hello')).toBe(2);
  });

  test('test case two',()=>{
    expect(countVowels2('Moto')).toBe(2);
        
  });

  test('test case three',()=>{
       
    expect(countVowels2('Umbrella')).toBe(3);
  });

  test('test case four',()=>{
       
    expect(countVowels1('Icecream')).toBe(4);
  });
}
);