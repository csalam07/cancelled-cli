/**
 *
 * @author csalam07 <https://twitter.com/CSALam12>
 *
 */

import chalk from 'chalk';
const yellow = chalk.bold.yellow;

export default async (action) => {
  if (action === undefined) {
    console.log(yellow(`❯ Cancelled!\n`));
    process.exit(0);
  }
};
