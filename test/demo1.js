
//const logger
//logger.module('track').info(....)
// const trackLogger = logger.module('track'); //returns new instance?

//logger.module('track').error(....)
//logger.module('files').warn(....)
//logger.module('supersecret').info()
//logger.module('moj') // -> ?



const Logger = require("../src/Logger");

const logger = new Logger();
const emitter = logger.getEmitter();
const nodeEmitter = emitter.module("nodejs");
nodeEmitter.warn("Jona rules")
nodeEmitter.info("Jona rules")
nodeEmitter.error("Jona rules")