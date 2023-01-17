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

const arrayOperation2 = (numbers) => {

  if (!Array.isArray(numbers)) {
    throw new Error('Input is not an array');
  }
      
  if(!numbers.every(element =>  typeof element === 'number')){
    throw new Error('Array should consist of numbers only');
  }
      
  return numbers.reduce((acc, curr) => {
    if(curr%2===0)
    {
      acc.push(curr*3);
    }
    return acc;
  },[]);
    
};
  





console.log(arrayOperation2([1,2,3]));




module.exports = { doubleNumbers, filterEvenNumbers, arrayOperation, arrayOperation2 };