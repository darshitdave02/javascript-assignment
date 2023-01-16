function checkLeapYear1 (year) {
  return (((year % 4 === 0 && (year % 100) !== 0 ) || (year%400 === 0))? true : false);

}

const checkLeapYear2 = (year) => {

  return (((year % 4 === 0 && (year % 100) !== 0 ) || (year%400 === 0))? true : false);
};

module.exports = checkLeapYear1;
module.exports = checkLeapYear2;