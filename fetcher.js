const fs = require('fs');
const net = require("net");
const request = require('request');
//input 
const ulr = process.argv.slice(2)[0]
const file =  process.argv.slice(2)[1]
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

//request
request(`${ulr}`, (error, response, body) => {
  'error:'
  console.log("invalid ulr")
  return
  if (!file.includes("/")) {
    console.log("invalid file path")
    return
  }
'statusCode:'
'body:"'
let size = body.length
    // writing file to local
  fs.writeFile(`${file}`, body, err => {
    if (err) {
      console.error(err);
    }
  });
  //return message 
  console.log(`downloaded and saved ${size} bytes to ${file}`)
  
  const rl = readline.createInterface({ input, output });
  
  rl.question('You are about to overwrite existing file, continue? C^c to exit', (answer) => {
    // TODO: Log the answer in a database
    if (answer == y)
    console.log(`Thank you for your valuable feedback: ${answer}`);
  
    rl.close();
  });

});


// You need to make an http request and wait for the response.
// After the http request is complete, you need to take the data you receive and write it to a file in your local filesystem.





