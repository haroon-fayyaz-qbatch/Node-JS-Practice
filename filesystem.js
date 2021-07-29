const fs = require("fs");

// //create a file

// fs.writeFile("example.txt", "This is an example", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File successfully created");
//   fs.readFile("./example.txt",'utf8', (err, data) => {
//     if(err) {
//       console.log(err);
//     }
//     else {
//       console.log(data);
//     }
//   })
//   }
// });

// fs.rename("./example.txt", "example2.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File successfully renamed");
//   }
// });


fs.appendFile("./example2.txt", "Some data being appended",(err) => {
  if (err) {console.log(err);} else {
    console.log("Successfully appended data to file");
  }
})
