## Команда: node index --action list

# Відповідь:

- [x] [
      {
      id: 'drsAJ4SHPYqZeG-83QTVW',
      name: 'Kennedy Lane',
      email: 'mattis.Cras@nonenimMauris.net',
      phone: '(542) 451-7038'
      },
      {
      id: 'vza2RIzNGIwutCVCs4mCL',
      name: 'Wylie Pope',
      email: 'est@utquamvel.net',
      phone: '(692) 802-2949'
      },
      {
      id: '05olLMgyVQdWRwgKfg5J6',
      name: 'Cyrus Jackson',
      email: 'nibh@semsempererat.com',
      phone: '(501) 472-5218'
      },
      {
      id: '1DEXoP8AuCGYc1YgoQ6hw',
      name: 'Abbot Franks',
      email: 'scelerisque@magnis.org',
      phone: '(186) 568-3720'
      },
      {
      id: 'Z5sbDlS7pCzNsnAHLtDJd',
      name: 'Reuben Henry',
      email: 'pharetra.ut@dictum.co.uk',
      phone: '(715) 598-5792'
      },
      {
      id: 'C9sjBfCo4UJCWjzBnOtxl',
      name: 'Simon Morton',
      email: 'dui.Fusce.diam@Donec.com',
      phone: '(233) 738-2360'
      },
      {
      id: 'e6ywwRe4jcqxXfCZOj_1e',
      name: 'Thomas Lucas',
      email: 'nec@Nulla.com',
      phone: '(704) 398-7993'
      },
      {
      id: 'rsKkOQUi80UsgVPCcLZZW',
      name: 'Alec Howard',
      email: 'Donec.elementum@scelerisquescelerisquedui.net',
      phone: '(748) 206-2688'
      },
      {
      id: '9eYYXLZWZnaGzCME1BKq2',
      name: 'Some Dude',
      email: 'dude123@gmail.com',
      phone: '(651) 789-2311'
      },
      {
      id: 'Xl6tRFxiqxRY0F8Ob-lip',
      name: 'Chaim Lewin',
      email: 'chaim@egetlacus.cam',
      phone: '(294) 840-6685'
      },
      {
      id: 'MXSOTFN2isYWfaZl1hGgU',
      name: 'Allen',
      email: 'nulla.ante@vestibul.co.uk',
      phone: '(992)'
      },
      {
      id: '1FJbbC7XsixKIISDavUdN',
      name: 'Allen_Raymond',
      email: 'nulla.ante@vestibul.co.uk',
      phone: '(992)'
      }
      ]

## Команда: node index --action get --id Z5sbDlS7pCzNsnAHLtDJd

# Відповідь:

- [x] {
      id: 'Z5sbDlS7pCzNsnAHLtDJd',
      name: 'Reuben Henry',
      email: 'pharetra.ut@dictum.co.uk',
      phone: '(715) 598-5792'
      }

## Команда: node index --action add --name Allen_Raymond --email nulla.ante@vestibul.co.uk --phone (992) 914-3792

# Відповідь:

- [x] {
      id: 'CuaJ4bwoK5IW9cXnaxQaS',
      name: 'Allen_Raymond',
      email: 'nulla.ante@vestibul.co.uk',
      phone: '(992)'
      }

## Команда: node index --action remove --id C4DKiRv8DkYKSVa-4ngZ3

# Відповідь:

- [x] [
      {
      id: 'CuaJ4bwoK5IW9cXnaxQaS',
      name: 'Allen_Raymond',
      email: 'nulla.ante@vestibul.co.uk',
      phone: '(992)'
      }
      ]

##

##

# Brief description of the program logic

## Main commands for the program operation

[!important]
Rules for entering console commands: in the line with the file call, write the following structure [ --someAction yourCommand]. For example: node main --action list

- [x] To display all the data of the .json file you can write:
      "node index --action list" of run a short test command: "npm run listTest"

- [x] To display the data of a single contact, you need to enter the "get" command after the "--action" keyword and its id key after the "--id" keyword, for example: "node index --action get --id Z5sbDlS7pCzNsnAHLtDJd" or run a test command: "getTest"

- [x] To add a new contact, you need to write the "add" command after the "--action" keyword and specify the data for all the necessary keywords such as [ --name, --email, --phone ], for example: "node index --action add --name Allen_Raymond --email nulla.ante@vestibul.co.uk --phone (992) 914-3792" or run a test command: "addTest"

- [x] To delete a contact, you need to write the "remove" command after the --action keyword and contact's id after the --id keyword, for example: "node index --action remove --id C4DKiRv8DkYKSVa-4ngZ3" or run the test command : "removeTest"

@Anrii :black_flag: :star_struck: :computer: :star_struck: :black_flag:

### A brief description of the program logic:

- user input command in commandLine where command equal to conrtoller keys
- call function from controller equal to user command
- put other parameters into controller function
- return the result of processing the command and dislpayed in the terminal
