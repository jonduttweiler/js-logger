const { ERROR_LEVEL, WARN_LEVEL, INFO_LEVEL, DEBUG_LEVEL, FINNEST_LEVEL } = require("./errorLevels");

class LogEmitter {
    constructor(aggregator) {
        this.aggregator = aggregator;
    }

    module(module) { //quizas esto deberia devolver un objeto con funciones
        this.module = module;

        return {
            error: (msg) => {
                this.level = ERROR_LEVEL;
                this.msg = msg;
                this._send();
            },

            warn: (msg) => {
                this.level = WARN_LEVEL;
                this.msg = msg;
                this._send();
            },

            info: (msg) => {
                this.level = INFO_LEVEL;
                this.msg = msg;
                this._send();
            },

            debug: (msg) => {
                this.level = DEBUG_LEVEL;
                this.msg = msg;
                this._send();
            },

            finnest: (msg) => {
                this.level = FINNEST_LEVEL;
                this.msg = msg;
                this._send();
            },
        };
    }
    _send() {
        this.aggregator.send(this);
    }
}


module.exports = LogEmitter;
