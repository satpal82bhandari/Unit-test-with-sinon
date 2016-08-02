const db = require('./../db.js')
const User = require('./../model/user-model.js')
const user = require('./../user.js')
const logger = require('./../logger').logger
const getLogLevel = require('./../logger').getLogLevel
const sinon = require('sinon')

describe('Sinon.Spy test ', function () {
    let save
    beforeEach(function (done) {
        logger.loglevel = -1     // {"OFF":-1,"ERROR":0,"INFO":1,"DEBUG":2,"ALL":3}
        save = sinon.spy(db, 'save')
        done()
    })

    afterEach(function (done) {
        db.records.length = 0
        save.restore()
        logger.loglevel = getLogLevel()
        done()
    })

    it('should call save method twice ', function () {
        let user1 = new User({id: 1, name: 'testuser1'})
        user.saveUser(user1, function () {
            logger.info('user saved in DB.')
        })
        sinon.assert.calledOnce(save)
        let user2 = new User({id: 2, name: 'testuser2'})
        user.saveUser(user2, function () {
            logger.info('user saved In DB.')
        })
        sinon.assert.calledTwice(save)
    })

    it('should pass object with correct values to save', function () {
        let expectedUser = new User({id: 1, name: 'testuser1'})
        user.saveUser(expectedUser, function () {
            logger.info('user saved in DB.')
        })
        sinon.assert.calledWith(save, expectedUser)
    })
})
