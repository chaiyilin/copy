var copy = require("recursive-copy");

const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const shell = require("shelljs");

const init = () => {
  console.log(
    chalk.green(
      figlet.textSync("recursive-copy", {
        font: "Ghost",
        horizontalLayout: "default",
        verticalLayout: "default"
      })
    )
  );
};

const run = async () => {
  init();
};

run();

var options = {
  overwrite: true,
  dot: true,
  filter: ["**/*", "!**/node_modules/**"]
};

copy("E:/officeworks", "D:/repo/officeworks", options)
  .then(function(results) {
    console.info("Copied " + results.length + " files");
  })
  .catch(function(error) {
    console.error("Copy failed: " + error);
  });
