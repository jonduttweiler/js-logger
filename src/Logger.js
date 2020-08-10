const chalk = require("chalk");

//TODO: add some way to configure output file instead of console.log
//TODO: Implement a singleton pattern?

class Logger {
    
    constructor() {
        this.level = 3;
        this.colors = true;
        
    }

    _print(msg, levelstr) {
        const local_ts = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().replace("Z", ""); //-03:00

        let output = `[${local_ts}][${levelstr.toUpperCase()}] ${msg}`;

        if (this.colors) {
            switch (levelstr) {
                case "error": {
                    output = chalk.red(output);
                    break;
                }
                case "warn": {
                    output = chalk.yellow(output);
                    break;
                }
                case "info": {
                    output = chalk.green(output);
                    break;
                }

            }
        }

        console.log(output);
    }

    error(msg) { 
        this.level >= 0 && this._print(msg,"error"); // red
        return this; 
    }

    warn(msg) { 
        this.level >= 1 && this._print(msg,"warn"); //yellow
        return this;
    }
    info(msg) { 
        this.level >= 2 && this._print(msg,"info"); //cyan
        return this;
    }
    debug(msg) { 
        this.level >= 3 && this._print(msg,"debug");
        return this;
    }
    finnest(msg) { 
        this.level >= 4 && this._print(msg,"finnest");
        return this;
    }
    hr() {
        console.log("----------------------------------------");
    }

}

module.exports = Logger;

