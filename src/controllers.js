const fs = require('fs')

function getNotes() {
  return loadNotes()
}

function addNote(title, body) {
  const notes = loadNotes()
  
  notes.push({
    title: title,
    body: body
  })

  saveNotes(notes)
}


function saveNotes(notes) {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('data.json', dataJSON)
  console.log('Data saved')
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
  addNote
}