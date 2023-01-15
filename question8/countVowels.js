function countVowels1 (string) {

    let ans = 0;

    for(let i=0; i<string.length; i++)
    {
        if(string[i] === 'a' || string[i] === 'A' || string[i] === 'e' || string[i] === 'E' || string[i] === 'i' || string[i] === 'I' || string[i] === 'o' || string[i] === 'O' || string[i] === 'u' || string[i] === 'U' )
            ans++;
    }
    return ans;
}

const countVowels2 = (string) => {

    let ans = 0;

    for(let i=0; i<string.length; i++)
    {
        if(string[i] === 'a' || string[i] === 'A' || string[i] === 'e' || string[i] === 'E' || string[i] === 'i' || string[i] === 'I' || string[i] === 'o' || string[i] === 'O' || string[i] === 'u' || string[i] === 'U' )
            ans++;
    }
    return ans;
}
module.exports = countVowels1;
module.exports = countVowels2;