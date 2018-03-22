/**
 * ytel
 *
 * This file was automatically generated for ytel by APIMATIC v2.0 ( https://apimatic.io )
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
        this.apiVersion = this.constructor.getValue(obj.apiVersion || obj.ApiVersion);
        this.messageSid = this.constructor.getValue(obj.messageSid || obj.MessageSid);
        this.from = this.constructor.getValue(obj.from || obj.From);
        this.to = this.constructor.getValue(obj.to || obj.To);
        this.messagePrice = this.constructor.getValue(obj.messagePrice || obj.MessagePrice);
        this.body = this.constructor.getValue(obj.body || obj.Body);
        this.dateSent = this.constructor.getValue(obj.dateSent || obj.DateSent);
        this.status = this.constructor.getValue(obj.status || obj.Status);
        this.templateId = this.constructor.getValue(obj.templateId || obj.TemplateId);
        this.templateData = this.constructor.getValue(obj.templateData || obj.TemplateData);
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

module.exports = MessageModel;
