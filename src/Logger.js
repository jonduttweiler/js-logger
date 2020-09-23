const { ERROR_LEVEL, WARN_LEVEL, INFO_LEVEL, DEBUG_LEVEL, FINNEST_LEVEL } = require("./errorLevels");
const LogAggregator = require("./LogAggregator");
const LogEmitter = require("./LogEmitter");

//TODO: add some way to configure output file instead of console.log
//TODO: Implement a singleton pattern?

class Logger {
    
    constructor(){
        this.aggregator = new LogAggregator({ colors: false });
        this.emitter = new LogEmitter(this.aggregator);
    }

    getEmitter(){
        return this.emitter;
    }
    
    hr() {
        console.log("----------------------------------------");
    }

}

module.exports = Logger;

