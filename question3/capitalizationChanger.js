function changeCapitalization1 ( sentence ) {
    
  let string = '';

  for(let i=0; i<sentence.length; i++)
  {
    if(sentence[i] === sentence[i].toLowerCase())
    {
      string+=sentence[i].toUpperCase();
    }
    else
    {
      string+=sentence[i].toLowerCase();
    }
  }

  return string;

}

const changeCapitalization2 = ( sentence ) => {


  let string = '';

  for(let i=0; i<sentence.length; i++)
  {
    if(sentence[i] === sentence[i].toLowerCase())
    {
      string+=sentence[i].toUpperCase();
    }
    else
    {
      string+=sentence[i].toLowerCase();
    }
  }

  return string;
};

module.exports = changeCapitalization1;
module.exports = changeCapitalization2;
