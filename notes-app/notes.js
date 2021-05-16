const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your Notes...'
}

// add note

const addNote = (title, body) => {
    const notes = loadNotes()

    // filter is like a for each loop for each json object
    // and if we return true while on some object, it is added
    // to our new json object
    const duplicateNote = notes.find((note) => note.title === title)

    debugger

    if (!duplicateNote) {
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

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
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

const removeNote = (title) => {
    const notes = loadNotes()
    const updatedNotes = notes.filter((note) => title !== note.title)

    if (updatedNotes.length < notes.length) {
        console.log(chalk.green('Note removed!'))
        saveNotes(updatedNotes)
    }
    else {
        console.log(chalk.red('No note found!'))
    }
}

// list notes

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.blue('Your Notes :'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

// read note

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => title === note.title)

    if (note) {
        console.log(chalk.bold.inverse(title))
        console.log(note.body)
    }
    else {
        console.log(chalk.red('Error! No note found!'))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}