#!/usr/bin/env node
'use strict'
const meow       = require('meow')
const getStdin   = require('get-stdin')
const logSymbols = require('log-symbols')
const esolangs   = require('esolangs')

const cli = meow(`
	Usage
	  ~ ❯❯❯ esolangs <string>
	  ~ ❯❯❯ echo <string> | esolangs
	  ~ ❯❯❯ cat <file> | esolangs
	Options
	  -p, --plain   Display output without log symbols
	Example
	  ~ ❯❯❯ esolangs '++++++++++[>+>+++>+++++++>++++++++++<<<<-]>>>>---.+++.+++++++++.----.+++++.'
	  ${logSymbols.success} admin
`, {
	flags: {
		plain: {
			type: 'boolean',
			alias: 'p',
			default: false
		}
	}
})

const input = cli.input[0]

function display (response) {
	if (response !== 'Code does not correspond to any of our supported essoteric languages' && response !== 'Esoteric code could not be interpreted') {
		const leading = (cli.flags["plain"]) ? `` : `${logSymbols.success} `
		console.log(leading + response)
	} else {
		const leading = (cli.flags["plain"]) ? `` : `${logSymbols.error} `
		console.log(leading + response)
	}
}

if (!input && process.stdin.isTTY) {
	console.log('Specify a piece esoteric code to execute')
	process.exit(1)
}
if (input) {
	esolangs(input.trim())
		.then(response => {
			display(response)
		})
} else {
	getStdin().then(stdin => {
		esolangs(stdin.trim()).then(response => {
			display(response)
		})
	})
}