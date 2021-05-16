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
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'removes a note',
    handler: function () {
        console.log('Removing a note')
    }
})
yargs.command({
    command: 'read',
    describe: 'reads note',
    handler: function () {
        console.log('reading note')
    }
})
yargs.command({
    command: 'list',
    describe: 'lists all notes',
    handler: function () {
        console.log('Listing all Notes')
    }
})

yargs.parse()
// console.log(process.argv)
// console.log(yargs.argv)