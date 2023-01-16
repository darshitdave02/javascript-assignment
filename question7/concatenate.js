function concatenate1 (stringArray) {

  let ans = '';

  for(let i=0; i<stringArray.length; i++)
  {
    stringArray[i] = stringArray[i].slice(1);
    ans += stringArray[i];
  }

  return ans;
}

const concatenate2 = (stringArray) => {
  let ans = '';

  for(let i=0; i<stringArray.length; i++)
  {
    stringArray[i] = stringArray[i].slice(1);
    ans += stringArray[i];
  }

  return ans;
};

module.exports = concatenate1;
module.exports = concatenate2;