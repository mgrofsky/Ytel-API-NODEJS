/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Message360Model
 */
class Message360Model extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.responseStatus = this.constructor.getValue(obj.responseStatus);
        this.messageCount = this.constructor.getValue(obj.messageCount);
        this.message = this.constructor.getValue(obj.message);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'responseStatus', realName: 'ResponseStatus' },
            { name: 'messageCount', realName: 'MessageCount' },
            { name: 'message', realName: 'Message', type: 'MessageModel' },
        ]);
    }
}

module.exports = Message360Model;
