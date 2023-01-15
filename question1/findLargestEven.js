const findLargestEven1 = (numbersArray) => {

    let ans = -1;

    numbersArray.forEach(element => {
        
        if(element%2==0)
        {
            ans = Math.max(ans,element)
        }
    });

    return ans;
}


function findLargestEven2 (numbersArray) {
    let ans = -1;

    numbersArray.forEach(element => {
        
        if(element%2==0)
        {
            ans = Math.max(ans,element)
        }
    });

    return ans;
}


module.exports = findLargestEven1;
module.exports = findLargestEven2;

