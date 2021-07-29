const fs = require("fs");

fs.readdir("example", (err, files) => {
  if (err) console.log(err);
  else {
    for (const file of files) {
      console.log(file);
      fs.unlink(`./example/${file}`,(err,) =>{
        if(err) console.log(err);
        else console.log("successfully deleted file");
      });
    }
  }
});
