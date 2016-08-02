const db = require('./../db.js')
const User = require('./../model/user-model.js')
const user = require('./../user.js')
const logger = require('./../logger').logger
const getLogLevel = require('./../logger').getLogLevel
const sinon = require('sinon')

describe('Sinon.Stub test ', function () {
    let save, callback
    beforeEach(function (done) {
        logger.loglevel = 1     // {"OFF":-1,"ERROR":0,"INFO":1,"DEBUG":2,"ALL":3}
        save = sinon.stub(db, 'save')
        callback = sinon.spy()
        done()
    })

    afterEach(function (done) {
        db.records.length = 0
        save.restore()
        logger.loglevel = getLogLevel()
        done()
    })

    it('should pass the error into the callback if save fails', function () {
        let expectedError = new Error('Error in saving to DB')
        save.throws(expectedError)
        let user1 = new User({id: 1, name: 'testuser1'})
        user.saveUser(user1, callback)
        sinon.assert.calledWith(callback, expectedError)
    })

    it('should pass the database result into the callback', function () {
        let expectedResult = { success: true }
        save.yields(null, expectedResult)
        let user1 = new User({id: 2, name: 'testuser2'})
        user.saveUser(user1, callback)
        sinon.assert.calledWith(callback, null, expectedResult)
    })
})
