const {
  listContacts,
  addContact,
  getContactById,
  removeContact,
} = require("./contacts");

const { Command } = require("commander");
const program = new Command();

// ----------------------------------------------------------------
const controller = {
  list: listContacts,
  get: getContactById,
  add: addContact,
  remove: removeContact,
};

const commandHandler = async ({ action, ...params }) => {
  try {
    const result = await controller[action](params);
    return console.log(result);
  } catch (error) {
    console.log(error.message);
    console.log("Try enter command like: --action list");
  }
};

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

program.parse(process.argv);

const sysCommands = program.opts();

commandHandler(sysCommands);

// user input command in commandLine where command equal to conrtoller keys
// call function from controller equal to user command
// put other parameters into controller function
// return the result of processing the command
