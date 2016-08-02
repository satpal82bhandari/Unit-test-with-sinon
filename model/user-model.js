'use strict'

/**
 *@class
*/
class User {

 /**
  *@param {Objcet} params - params object
  *@param {Number} params.id - params.id to use
  *@param {String} params.name - params.name to use
 */
    constructor (params) {
        this.id = params.id
        this.name = params.name
    }
}

module.exports = User
