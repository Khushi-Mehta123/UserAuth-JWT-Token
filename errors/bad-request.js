
const customeApiError = require('./errorclass')
const {StatusCodes} = require('http-status-codes')
class Badreq extends customeApiError{
    constructor(message){
        super(message)
        this.status = StatusCodes.BAD_REQUEST
    }
}

module.exports = Badreq