'use strict'

const loggerLevel = require('./conf/logger.json').level
const ALL = 'ALL'
const INFO = 'INFO'
const DEBUG = 'DEBUG'
const ERROR = 'ERROR'
const OFF = 'OFF'

/**
 This function will check the log level set for the application.
 @returns {Number} - loglevel
*/
const getLogLevel = function () {
    console.log('Logger Level set is : ' + loggerLevel)
    if (loggerLevel === OFF) {
        return -1
    } else if (loggerLevel === ERROR) {
        return 0
    } else if (loggerLevel === INFO) {
        return 1
    } else if (loggerLevel === DEBUG) {
        return 2
    } else if (loggerLevel === ALL) {
        return 3
    }
}

const logger = {

    loglevel: getLogLevel(),

  /**
  *@param {String} message - message to log
  */
    info (message) {
        if (this.loglevel > 0) {
            console.log(message)
        }
    },
  /**
   *@param {String} message - message to log
  */
    error (message) {
        if (this.loglevel > -1) {
            console.error(message)
        }
    },
  /**
   *@param {String} message - message to log
  */
    debug (message) {
        if (this.loglevel > 1) {
            console.log(message)
        }
    }

}

module.exports = {
    logger: logger,
    getLogLevel: getLogLevel
}
