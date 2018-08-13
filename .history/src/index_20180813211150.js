const copy = require("recursive-copy");
const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const shell = require("shelljs");

const init = () => {
  console.log(
    chalk.green(
      figlet.textSync("recursive-copy", {
        font: "Standard",
        horizontalLayout: "default",
        verticalLayout: "default"
      })
    )
  );
};

const askQuestions = () => {
  const questions = [
    {
      name: "from",
      type: "input",
      message: "full path from: "
    },
    {
      name: "to",
      type: "input",
      message: "full path to: "
    }
  ];
  return inquirer.prompt(questions);
};

const options = {
  overwrite: true,
  dot: true,
  filter: ["**/*", "!**/node_modules/**"]
};
const run = async () => {
  init();

  const answers = await askQuestions();
  const { from, to } = answers;

  copy(from, to, options)
    .on(copy.events.ERROR, function(error, copyOperation) {
      console.error("Unable to copy " + copyOperation.dest);
    })
    .then(function(results) {
      console.info("Copied " + results.length + " files");
    })
    .catch(function(error) {
      console.error("Copy failed: " + error);
    });
};

run();
