#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var utils_1 = require("./lib/utils");
var yargs = require("yargs");
yargs.command({
    command: 'encode/decode',
    describe: "encode or decodes a txt file using run-length encoding,\n  copies the original file and then overwrite the original file",
    builder: {
        path: {
            describe: 'path of the file to be coded or decoded',
            demandOption: true,
            type: 'string',
            alias: 'p'
        },
        option: {
            describe: '(e)ncode or (d)ecode a text file',
            demandOption: true,
            type: 'string',
            alias: 'o'
        }
    },
    handler: function (argv) {
        console.log(argv);
        utils_1["default"].encodeDecode(argv.path, argv.option);
    }
})
    .command('*', '', function (y) { y.showHelp(); });
yargs.parse();
