function findSameDigitNumber1 (num) {
    
    const first = num % 10;
    while (num) 
    {
        if (num % 10 !== first) return false;
        num = Math.floor(num / 10);
    }

    return true

}


const findSameDigitNumber2 = (num) => {
    
    const first = num % 10;
    while (num) 
    {
        if (num % 10 !== first) return false;
        num = Math.floor(num / 10);
    }
    
    return true

}

module.exports = findSameDigitNumber1
module.exports = findSameDigitNumber1