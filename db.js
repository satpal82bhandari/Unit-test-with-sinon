'use strict'

const logger = require('./logger').logger

const db = {

    records: [],

  /**
   *@param {Objcet} user - user to be saved in DB
   *@param {Objcet} callback - method to be executed after insertion in DB
  */
    save (user, callback) {
        logger.info('save method begins')
        let expectedSuccessResult = { success: true }
        try {
            this.records.push(user)    // simulation of record saves in DB
            logger.debug(this.records)
            callback({expectedSuccessResult})
        } catch (err) {
            let expectedError = new Error('Error in saving to DB')
            throw expectedError
        }
        logger.info('save method ends')
    }
}

module.exports = db
