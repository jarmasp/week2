#!/usr/bin/env node

import lib from './lib/utils';

import yargs = require('yargs');

yargs.command({
  command: 'encode/decode',
  describe: `encode or decodes a txt file using run-length encoding,
  copies the original file and then overwrite the original file`,
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
    },
  },
  handler (argv: any) {
    console.log(argv)
    lib.encodeDecode(argv.path, argv.option)
  }
})
  .command('*','', (y) => {y.showHelp(); });

yargs.parse()