#! /usr/bin/env node
const { program } = require('commander');
const chalk = require('chalk');
const keythereum = require('keythereum');

program
  .option('-d, --datadir <gzonddata path>', 'path to gzonddata folder')
  .option('-a, --address <address>', 'address to fetch private key for')
  .option('-p, --password <password>', 'password to decrypt private key');

program.parse(process.argv);

const options = program.opts();

if (!options.datadir) {
  console.log(chalk.red('Please specify gzonddata path with -d option, e.g. ... -d /home/qrl/gzonddata'));
}

if (!options.address) {
  console.log(chalk.red('Please specify address with -a option, e.g. ... -a 0x20...45'));
}

if (!options.password) {
  console.log(chalk.red('Please specify password with -p option'));
}

try {
  const keyObject = keythereum.importFromFile(options.address, options.datadir);
  const privateKey = keythereum.recover(options.password, keyObject);
  console.log(chalk.green(`Address: ${chalk.white(options.address)}`));
  console.log(
    chalk.green(
      `Hexseed: ${chalk.white(Buffer.from(privateKey).toString('hex'))}`
    )
  );
} catch (e) {
  console.log(chalk.red('Error: ', e.message));
  process.exit(1);
}
