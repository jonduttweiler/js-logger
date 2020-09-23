const chalk = require("chalk");
const { CODE_STR, ERROR_LEVEL, WARN_LEVEL, INFO_LEVEL, DEBUG_LEVEL, FINNEST_LEVEL } = require("./errorLevels");

class LogAggregator {

  constructor({ colors = false }) {
    this.level = 3;
    this.colors = colors;
    this.enabledModules = [];
  }

  on(module) {
    if (this.enabledModules.indexOf(module) === -1) {
      this.enabledModules.push(module);
    }

    return {
      level: level => this.setLevel(module, level)
    }

  }

  off(module) {
    const idx = this.enabledModules.indexOf(module);
    if (idx > -1) {
      this.enabledModules.splice(idx, 1);
    }
  }

  setLevel(module, level) {
    console.log(`set level ${module}, ${level}`);
  }


  send({ module, level, msg }) {
    if (this.shouldPrint(module, level)) {
      this._print({ module, level, msg })
    }
  }

  //vamos a considerar que todos tienen el mismo nivel? esto da poca flexibilidad
  shouldPrint(module, level) {
    return true;
  }

  _print({ module, level, msg }) {
    const local_ts = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().replace("Z", ""); //-03:00

    let output = `[${local_ts}]`;

    if (level > -1) {
      const levelstr = CODE_STR[level] || "default";
      output += `[${levelstr.toUpperCase()}]`;
    }

    if (module) {
      output += `[${module.toUpperCase()}]`;
    }

    output += ` ${msg}`;

    if (this.colors) {
      switch (level) {
        case ERROR_LEVEL: {
          output = chalk.red(output);
          break;
        }
        case WARN_LEVEL: {
          output = chalk.yellow(output);
          break;
        }
        case INFO_LEVEL: {
          output = chalk.green(output);
          break;
        }

      }
    }

    console.log(output);
  }


}

module.exports = LogAggregator;