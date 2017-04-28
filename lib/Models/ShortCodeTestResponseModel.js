/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of ShortCodeTestResponseModel
 */
class ShortCodeTestResponseModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.message360 = this.constructor.getValue(obj.message360);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'message360', realName: 'Message360', type: 'Message360Model' },
        ]);
    }
}

module.exports = ShortCodeTestResponseModel;
