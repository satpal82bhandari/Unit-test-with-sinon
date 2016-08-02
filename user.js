const db = require('./db')
const User = require('./model/user-model')
const logger = require('./logger').logger

const user = {
  /**
   *@param {Object} user - user object
   *@param {Objcet} callback - callback to use
  */
    saveUser (user, callback) {
        logger.info('Inside saveUser : begins')

        let newUser = new User({
            id: user.id,
            name: user.name
        })
        logger.debug(newUser)
        try {
            db.save(newUser, callback)
        } catch (err) {
            callback(err)
        }
        logger.info('Inside saveUser : ends')
    }

}

module.exports = user
