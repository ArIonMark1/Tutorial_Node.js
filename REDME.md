# Brief description of the program logic

## Main commands for the program operation

> [!IMPORTANT]
> Rules for entering console commands: in the line with the file call, write the following structure [ --someAction yourCommand]. For example: node main --action list

- [] To display all the data of the .json file you can write:
  "node index --action list" of run a short test command: "npm run listTest"

- [] To display the data of a single contact, you need to enter the "get" command after the "--action" keyword and its id key after the "--id" keyword, for example: "node index --action get --id Z5sbDlS7pCzNsnAHLtDJd" or run a test command: "getTest"

- [] To add a new contact, you need to write the "add" command after the "--action" keyword and specify the data for all the necessary keywords such as [ --name, --email, --phone ], for example: "node index --action add --name Allen_Raymond --email nulla.ante@vestibul.co.uk --phone (992) 914-3792" or run a test command: "addTest"

- [] To delete a contact, you need to write the "remove" command after the --action keyword and contact's id after the --id keyword, for example: "node index --action remove --id C4DKiRv8DkYKSVa-4ngZ3" or run the test command : "removeTest"

@Anrii :ukraine:, :star_struck:, 	:computer:, :star_struck:,  :ukraine:

### A brief description of the program logic:

- user input command in commandLine where command equal to conrtoller keys
- call function from controller equal to user command
- put other parameters into controller function
- return the result of processing the command and dislpayed in the terminal
