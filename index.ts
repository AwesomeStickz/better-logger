import chalk from 'chalk';
import { inspect } from 'util';

const { debug, error, info, log, warn } = require('console');

const getDebugInfo = () => {
    const dateObject = new Date();

    // Date in the Format: MM/DD/YY
    const date = dateObject.toLocaleDateString('en-GB', { month: '2-digit', day: '2-digit', year: '2-digit' });
    // Time in the Format: HH:MM:SS AM/PM
    const time = dateObject.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', fractionalSecondDigits: 3 });
    // Unix Timestamp
    const timestamp = dateObject.getTime();

    return chalk.gray(`[${date} ${time} ${timestamp}]`);
};

console.debug = (...args) => debug(getDebugInfo(), ...args.map((arg) => chalk.blue(typeof arg !== 'string' ? inspect(arg) : arg)));
console.error = (...args) => error(getDebugInfo(), ...args.map((arg) => chalk.red(typeof arg !== 'string' ? inspect(arg) : arg)));
console.info = (...args) => info(getDebugInfo(), ...args);
console.log = (...args) => log(getDebugInfo(), ...args);
console.warn = (...args) => warn(getDebugInfo(), ...args.map((arg) => chalk.yellow(typeof arg !== 'string' ? inspect(arg) : arg)));
