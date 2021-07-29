const fs = require("fs");

fs.createReadStream("file.txt");

const readStream = fs.createReadStream("file.txt",'utf8');
const writeStream = fs.createWriteStream("file2.txt");

readStream.on("data", (chunk) => {
  writeStream.write(chunk);
});


