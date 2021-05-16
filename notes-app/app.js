const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// customize yargs version
yargs.version('1.1.0')

// create add command
yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'removes a note',
    builder: {
        title: {
            describe: 'title of note to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'lists all notes',
    handler() {
        notes.listNotes()
    }
})
yargs.command({
    command: 'read',
    describe: 'reads note',
    builder: {
        title: {
            describe: 'title of note to be read',
            demandOption: true,
            type: 'string'
        }    
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()
