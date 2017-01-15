var fs = require("fs");

fs.readdir('.', function(err, fileList) {
  if (err) {
    console.error("there was a prob");
    console.error(err.toString());
    return;
}

  for(var i=0;i<fileList.length;i++) {
    if (fileList[i].endsWith(".js")) {
    console.log("Found File: " + fileList[i]);      
    }
}

});
