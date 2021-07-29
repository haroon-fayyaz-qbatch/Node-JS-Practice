const fs = require('fs');
fs.mkdir('tutorial',err => {
if(err){
  console.log(err);
  fs.rmdir('tutorial',err => {
    if(err){
      console.log(err);
    }
    else{
      console.log("Folder Successfully Deleted");
    }
  })
}
else{

  console.log("folder successfully created");
}
});
