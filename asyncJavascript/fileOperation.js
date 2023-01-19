let fs = require('fs');

const getContents = (file) => {

  return new Promise(function (resolve, reject) {

    fs.readFile(file, 'utf-8', (error, data) => {

      if (error) {
        reject(error);
      }

      resolve(data);

    });
  });

};

getContents('sampleInput/input.txt').then((value)=>{
  console.log(value);
    
});
getContents('sampleInput/input2.txt').then((value)=>{
  console.log(value);
    
});
getContents('sampleInput/input3.txt').then((value)=>{
  console.log(value);
    
});