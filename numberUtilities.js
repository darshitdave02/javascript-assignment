const { UnsupportedTypeError, DivideByZeroError } = require('./errors');

const division = (num1, num2) => {
  if(num2===0)
  {
    throw new DivideByZeroError('Divide by 0 error');
  }

  if(!Number.isFinite(num1) || !Number.isFinite(num2))
  {
    throw new UnsupportedTypeError('Input type is not supported');
  }

  return num1/num2;
};

module.exports = {division};