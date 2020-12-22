const fs = require('fs')
const chalk = require('chalk')

function getNotes() {
  return loadNotes()
}

//@desc addNote function to add note to the data.json
function addNote(title, body) {
  const notes = loadNotes()
  
  notes.push({
    title: title,
    body: body
  })

  saveNotes(notes)
}


//@desc removeNote function to remove a note from data.json 
function removeNote(par1) {
  const notes = loadNotes()

  notes.map(function(note) {
    if(note.title === par1) {
      notes.pop(note)
      saveNotes(notes)
      console.log(chalk.red(`Note removed`))
    }
    else{
      console.log(chalk.yellow`No note found`)
    }
  })
}


//@desc listingNotes function to list all notes from data.json 
function listNotes() {
  const notes = loadNotes()

  notes.map(function(note) {
    console.log(note)
  })
}




function saveNotes(notes) {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('data.json', dataJSON)
}


function loadNotes() {
  try {
    const jsonData = fs.readFileSync('data.json', 'utf-8')
    const data = JSON.parse(jsonData)
    return data
  }
  catch(err){
    console.log(err)
  }
}


module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes
}