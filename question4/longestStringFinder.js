function findLongestString1 (stringArray) {
    
    let ans = 0;
    let maxLength = 0;
    
    for(let i=0; i<stringArray.length; i++)
    {
        if(stringArray[i].length > maxLength)
        {
            ans = i;
            maxLength = stringArray[i].length;
        }
    }

    return stringArray[ans];
}

const findLongestString2 = (stringArray) => {

    let ans = 0;
    let maxLength = 0;
    
    for(let i=0; i<stringArray.length; i++)
    {
        if(stringArray[i].length > maxLength)
        {
            ans = i;
            maxLength = stringArray[i].length;
        }
    }

    return stringArray[ans];
}

module.exports = findLongestString1;
module.exports = findLongestString2;

