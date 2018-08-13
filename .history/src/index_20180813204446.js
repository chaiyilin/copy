var copy = require("recursive-copy");

const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const shell = require("shelljs");

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
