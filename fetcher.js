const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const fileP = process.argv[3];


request(url, (error, response, body) => { //request URL
  if (error) {
    console.log('error:', error);  // Logs any errors that occur
  }
  fs.writeFile(fileP, body, (error) => {  //writing wepage to file path
    fs.access(fileP, (error) => {
      if (error) console.log(error);
    });
    console.log(`Downloaded and saved ${body.length} bytes to ${fileP}`); // prints html and success
  });
});

