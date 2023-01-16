const findLargestEven1 = require('./findLargestEven');
const findLargestEven2 = require('./findLargestEven');


describe('Test to check function to find largst even number',()=>{
  test('finding largest even number of [1,2,3,4] as 4',() => {
    let nums = [1,2,3,4];
    expect(findLargestEven1(nums)).toBe(4);
  });
    
  test('finding largest even number of [1,3,9,11] as -1',() => {
    let nums = [1,3,9,11];
    expect(findLargestEven2(nums)).toBe(-1);
  });
    
  test('finding largest even number of [18,9,16,3] as 18',() => {
    let nums = [18,9,16,3];
    expect(findLargestEven1(nums)).toBe(18);
  });

  test('finding largest even number of [1,34,56,47,78] as 78',() => {
    let nums = [1,34,56,47,78];
    expect(findLargestEven1(nums)).toBe(78);
  });
    
});


