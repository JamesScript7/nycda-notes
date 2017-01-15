var x = require("fs");

x.readFile("fil3e.txt", "utf-8", function(err, data) {
  if(err) {
    console.error(err.toString());
    return;
}

  console.log("LOADED THE FILES:");
  console.log(data);

});

console.log("THIS PRINT IS ACTUALLY THE LAST LINE IN THE SCRIPT FILE");
