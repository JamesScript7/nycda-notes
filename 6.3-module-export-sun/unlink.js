var fs = require("fs");

var filename = 'file.txt';

fs.unlink(filename, function(err) {
  if(err) {
    console.error("There was a problem");
    console.error(err.toString());
    return;
}

  console.log("i deleted: " + filename);
  console.log("You're welcome");
});
