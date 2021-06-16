#!/usr/bin/env node

// include it
require('dotenv').config(); // https://www.npmjs.com/package/dotenv
const Todoist = require('todoist').v8 // https://www.npmjs.com/package/todoist
const chalk = require("chalk"); // https://www.npmjs.com/package/chalk
const {
	sanitize
} = require('sanitize.js'); // https://www.npmjs.com/package/sanitize.js

//@TODO --help page

// load it
const todoist = Todoist(process.env.TODOIST_API)
// @TODO check for failure or missing API key

// get it
var todoTask = sanitize(process.argv.slice(2).join(' '));
// @TODO sanitization too strong, strips out slashes from links
// @TODO check for empty string
// @TODO add args for placing directly in projects/tags, etc.

// fire it
;(async () => {
	const newItem = await todoist.items.add({
		content: todoTask
	})
	// @TODO check for failures
	console.log(chalk.green.bold('Added Todo: ' + todoTask));
})()