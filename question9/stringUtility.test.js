const replaceWithNextCharacterInString1 = require('./stringUtility');
const replaceWithNextCharacterInString2 = require('./stringUtility');

describe('Test to check functionality to replace each character in string with its next character',()=>{
  test('test case one',()=>{
        
    expect(replaceWithNextCharacterInString1('abcd')).toBe('bcde');
  });

  test('test case two',()=>{
    expect(replaceWithNextCharacterInString2('hello')).toBe('ifmmp');
        
  });

  test('test case three',()=>{
       
    expect(replaceWithNextCharacterInString2('Darshit')).toBe('Ebstiju');
  });

    
}
         
);
