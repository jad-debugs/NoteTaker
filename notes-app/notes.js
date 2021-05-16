const fs = require('fs')
const chalk = require('chalk')

const getNotes = function() {
    return 'Your Notes...'
}

// add note

const addNote = function (title, body) {
    const notes = loadNotes()

    // filter is like a for each loop for each json object
    // and if we return true while on some object, it is added
    // to our new json object
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New note added!'))
    }
    else {
        console.log(chalk.red('Note title already taken!'))
    }

}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function() {
    // error when adding note
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e) {
        return []
    }
}

// remove note

const removeNote = function (title) {
    const notes = loadNotes()
    const updatedNotes = notes.filter(function (note) {
        return title !== note.title
    })
    if (updatedNotes.length < notes.length) {
        console.log(chalk.green('Note removed!'))
        saveNotes(updatedNotes)
    }
    else {
        console.log(chalk.red('No note found!'))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}