import chalk from 'chalk';

const { error, info, log, warn } = console;

const getDebugInfo = () => {
    const dateObject = new Date();

    // Date in the Format: MM/DD/YY
    const date = dateObject.toLocaleDateString('en-GB', { month: '2-digit', day: '2-digit', year: '2-digit' });
    // Time in the Format: HH:MM:SS AM/PN
    const time = dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    // Unix Timestamp
    const timestamp = dateObject.getTime();

    return chalk.gray(`[${date} ${time} ${timestamp}]`);
};

console.error = (...args) => error(getDebugInfo(), chalk.red(...args));
console.info = (...args) => info(getDebugInfo(), ...args);
console.log = (...args) => log(getDebugInfo(), ...args);
console.warn = (...args) => warn(getDebugInfo(), chalk.yellow(...args));
