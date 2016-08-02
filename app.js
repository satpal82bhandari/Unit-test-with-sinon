'use strict'

const logger = require('./logger').logger
const db = require('./db')
const User = require('./model/user-model')
const user = require('./user')

const app = {

  /**
   This will start the application.
  */
    start () {
        logger.info('starting the app.')
        let user1 = new User({id: 1, name: 'testuser1'})
        user.saveUser(user1, function () {
            logger.info('user1 saved in DB.')
        })
        let user2 = new User({id: 2, name: 'testuser2'})
        user.saveUser(user2, function () {
            logger.info('user2 saved In DB.')
        })
        console.log('Total number of user created : ' + db.records.length)
    }

}

app.start()
