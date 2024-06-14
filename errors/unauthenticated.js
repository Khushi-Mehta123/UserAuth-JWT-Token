const customeApiError = require('./errorclass')

const {StatusCodes} = require('http-status-codes')

class Unauthenticate extends customeApiError{
    constructor(message){
        super(message)
        this.status = StatusCodes.UNAUTHORIZED
    }
}

module.exports = Unauthenticate