const endsWithScript1 = require('./endsWithScript');
const endsWithScript2 = require('./endsWithScript');

describe('Test case to check if a string ends with Script',()=>{
  test('test case one',()=>{
        
    expect(endsWithScript1('hello')).toBeFalsy();
  });

  test('test case two',()=>{
    expect(endsWithScript2('noscript')).toBeFalsy();
        
  });

  test('test case three',()=>{
       
    expect(endsWithScript2('heyScript')).toBeTruthy();
  });

    
}
);