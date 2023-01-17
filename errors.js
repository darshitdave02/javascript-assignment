class UnsupportedTypeError extends Error {
  constructor(messaage) {
    super(messaage);
    this.name = 'UnsupportedTypeError';
  }
}

class DivideByZeroError extends Error {
  constructor(messaage) {
    super(messaage);
    this.name = 'DivideByZeroError';
  }
}

module.exports = { UnsupportedTypeError, DivideByZeroError };

 