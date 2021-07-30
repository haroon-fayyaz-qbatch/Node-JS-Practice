const fs=require("fs");
const zlib=require("zlib");
const gzip=require("gzip");
const readStream=fs.createReadStream('file.txt','utf8');

const iteStream =fs.createWriteStream('example2.txt.gz');

readStream.pipe(gzip).pipe(writeStream);

