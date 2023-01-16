const doubleNumbers = (numbers) => {

  if (!Array.isArray(numbers)) {
    throw new Error('Input is not an array');
  }

  if(!numbers.every(element =>  typeof element === 'number')){
    throw new Error('Array should consist of numbers only');
  }

  return numbers.map(num => num * 2);
};


const filterEvenNumbers = (numbers) => {

  if (!Array.isArray(numbers)) {
    throw new Error('Input is not an array');
  }
    
  if(!numbers.every(element =>  typeof element === 'number')){
    throw new Error('Array should consist of numbers only');
  }

  return numbers.filter((element) =>{ 
    return element%2===0;
  });
};


const arrayOperation = (numbers) => {

  if (!Array.isArray(numbers)) {
    throw new Error('Input is not an array');
  }
    
  if(!numbers.every(element =>  typeof element === 'number')){
    throw new Error('Array should consist of numbers only');
  }
    
  numbers =  numbers.map((element) => element*3 );

  return numbers.filter((element) =>{ 
    return element%2===0;
  });
};

console.log(arrayOperation([1,2,3]));




module.exports = { doubleNumbers, filterEvenNumbers, arrayOperation };