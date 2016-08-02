const db = require('./../db.js')
const User = require('./../model/user-model.js')
const user = require('./../user.js')
const logger = require('./../logger').logger
const getLogLevel = require('./../logger').getLogLevel
const sinon = require('sinon')

describe('Sinon.Stub test ', function () {
    let database, callback
    beforeEach(function (done) {
        logger.loglevel = 1     // {"OFF":-1,"ERROR":0,"INFO":1,"DEBUG":2,"ALL":3}
        database = sinon.mock(db)
        callback = sinon.spy()
        done()
    })

    afterEach(function (done) {
        db.records.length = 0
        database.restore()
        logger.loglevel = getLogLevel()
        done()
    })

    it('should pass object with correct values to save only once', function () {
        let user1 = new User({id: 1, name: 'testuser1'})
        database.expects('save').once().withArgs(user1, callback)
        user.saveUser(user1, callback)
        database.verify()
    })
})
