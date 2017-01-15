var fs = require("fs");

fs.readFile("file.txt", "utf-8", function(err, contents) {
  if(err) {
    console.log(err.toString());
    return;
  }

  console.log("loaded the file for you:");
  console.log(contents);
  
});

console.log("finished calling read file.");


