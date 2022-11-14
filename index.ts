import chalk from 'chalk';

const { error, info, log, warn } = console;

const getDebugInfo = () => {
    const date = new Date();

    return chalk.gray(`[${date.toLocaleDateString()} ${date.toLocaleTimeString()} ${date.getTime()}]`);
};

console.error = (...args) => error(getDebugInfo(), chalk.red(...args));
console.info = (...args) => info(getDebugInfo(), ...args);
console.log = (...args) => log(getDebugInfo(), ...args);
console.warn = (...args) => warn(getDebugInfo(), chalk.yellow(...args));
