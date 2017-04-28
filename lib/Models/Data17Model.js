/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Data17Model
 */
class Data17Model extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.companyname = this.constructor.getValue(obj.companyname);
        this.otpcode = this.constructor.getValue(obj.otpcode);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'companyname', realName: 'companyname' },
            { name: 'otpcode', realName: 'otpcode' },
        ]);
    }
}

module.exports = Data17Model;
