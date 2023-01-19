const fs = require('fs');

const getFileContent = (inputFile) => {
    
  const data = fs.readFileSync(inputFile,
    {encoding:'utf8', flag:'r'});
 
  console.log(data);
  
};

getFileContent('sampleInput/input.txt');
getFileContent('sampleInput/input2.txt');
getFileContent('sampleInput/input3.txt');