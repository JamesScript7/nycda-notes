var fs = require("fs");

var contents = "My\nfile\nis\nawesome";

fs.writeFile("output.txt", contents, function(err) {
  if(err) {
    console.error("There was a problem...");
    console.error(err.toString());
}
console.log("DONE!");
});
