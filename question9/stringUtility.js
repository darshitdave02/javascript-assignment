function replaceWithNextCharacterInString1(string) {

  let ans = '';

  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {

    case 'Z': {
      ans += 'A';
      break;
    }
    case 'z': {
      ans += 'a';
      break;
    }
      
    default:{
      let value = string.charAt(i).charCodeAt();
      value = value + 1;
      ans += String.fromCharCode(value);
    }

    }
  }
  return ans;
}

const replaceWithNextCharacterInString2 = (string) => {
  let ans = '';

  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {

    case 'z':
      ans += 'a';
      break;
    case 'Z':
      ans += 'A';
      break;
    default:{
      let value = string.charAt(i).charCodeAt();
      value = value + 1;
      ans += String.fromCharCode(value);
    }

    }
  }
  return ans;
};

module.exports = replaceWithNextCharacterInString1;
module.exports = replaceWithNextCharacterInString2;