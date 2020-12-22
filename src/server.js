const fs = require('fs')
const chalk = require('chalk')
const yargs = require('yargs')
const jsonBooks = require('./data')
const { addNote, removeNote, listNotes } = require('./controllers')

// try{
//   const data = fs.writeFileSync('notes.txt', 'This is written in the first attempt', {flag: "w+"})
// }
// catch(err) {
//   console.log(err.message)
// }

// fs.writeFileSync('data.json', data)

let data;

try {
  const readData = fs.readFileSync('data.json', 'utf-8')
  data = JSON.parse(readData)

} catch (error) {
  console.log(error)
}


try {
  
}
catch(error) {
  console.log(error)
} 

// let command = process.argv[2]

// if(command === 'add') {
//   try{
//     const data = fs.appendFileSync('notes.txt', 'This is written in the first attempt', {flag: "a+"})
//     console.log(chalk.green('Adding a note'))
//   }
//   catch(err) {
//     console.log(err.message)
//   }
// }
// else if (command === 'remove') {
//   console.log(chalk.red('Removing a note'))
// }

//@desc Setting yargs version
yargs.version('1.1.0')

//@desc Setting command using yargs instead of process.argv
//@input node server.js add
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: "Adding title",
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    // console.log(`Note title: ${argv.title} and body: ${argv.body}`)
    addNote(argv.title, argv.body)
  }
})

//@desc Removing a note
//@input node server.js remove
yargs.command({
  command: 'remove',
  describe: 'Remove a note title',
  builder: {
    title: {
      describe: "Removing title",
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: "Removing body",
      demandOption: false,
      type: 'string'
    }
  },
  handler: function(argv) {
    removeNote(argv.title)
  }
})


//@desc Listing all notes
//@input node server.js list
yargs.command({
  command: 'list',
  describe: 'Command to list all notes',
  handler: function() {
    listNotes()
  }
})

//@desc Reading a note
//@input node server.js read
yargs.command({
  command: 'read',
  describe: 'Reading a note from source',
  handler: function() {
    console.log('Reading a note')
  }
})



//@desc Setting above changes
yargs.parse()
