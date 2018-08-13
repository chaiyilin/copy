var copy = require("recursive-copy");

var options = {
  overwrite: true,
  filter: ["**/*", "!.htpasswd"]
};

copy("E:/officeworks", "D:/repo/officeworks", options)
  .then(function(results) {
    console.info("Copied " + results.length + " files");
  })
  .catch(function(error) {
    console.error("Copy failed: " + error);
  });
