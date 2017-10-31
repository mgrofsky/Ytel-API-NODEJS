/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of ErrorModel
 */
class ErrorModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.code = this.constructor.getValue(obj.code || obj.Code);
        this.message = this.constructor.getValue(obj.message || obj.Message);
        this.moreInfo = this.constructor.getValue(obj.moreInfo || obj.MoreInfo);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'code', realName: 'Code' },
            { name: 'message', realName: 'Message' },
            { name: 'moreInfo', realName: 'MoreInfo', array: true },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = ErrorModel;
