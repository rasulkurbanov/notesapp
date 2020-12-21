const fs = require('fs')
const chalk = require('chalk')

// try{
//   const data = fs.writeFileSync('notes.txt', 'This is written in the first attempt', {flag: "w+"})
// }
// catch(err) {
//   console.log(err.message)
// }




let command = process.argv[2]

if(command === 'add') {
  try{
    const data = fs.appendFileSync('notes.txt', 'This is written in the first attempt', {flag: "a+"})
    console.log(chalk.green('Adding a note'))
  }
  catch(err) {
    console.log(err.message)
  }
}
else if (command === 'remove') {
  console.log(chalk.red('Removing a note'))
}




