/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of MessageModel
 */
class MessageModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.apiVersion = this.constructor.getValue(obj.apiVersion);
        this.messageSid = this.constructor.getValue(obj.messageSid);
        this.from = this.constructor.getValue(obj.from);
        this.to = this.constructor.getValue(obj.to);
        this.messagePrice = this.constructor.getValue(obj.messagePrice);
        this.body = this.constructor.getValue(obj.body);
        this.dateSent = this.constructor.getValue(obj.dateSent);
        this.status = this.constructor.getValue(obj.status);
        this.templateId = this.constructor.getValue(obj.templateId);
        this.templateData = this.constructor.getValue(obj.templateData);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'apiVersion', realName: 'ApiVersion' },
            { name: 'messageSid', realName: 'MessageSid' },
            { name: 'from', realName: 'From' },
            { name: 'to', realName: 'To' },
            { name: 'messagePrice', realName: 'MessagePrice' },
            { name: 'body', realName: 'Body' },
            { name: 'dateSent', realName: 'DateSent' },
            { name: 'status', realName: 'Status' },
            { name: 'templateId', realName: 'TemplateId' },
            { name: 'templateData', realName: 'TemplateData', type: 'TemplateDataModel' },
        ]);
    }
}

module.exports = MessageModel;
