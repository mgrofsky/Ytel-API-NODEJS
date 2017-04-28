/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const ShortCodeTestResponseModel = require('../lib/Models/ShortCodeTestResponseModel');
const MessageModel = require('../lib/Models/MessageModel');
const DataModel = require('../lib/Models/DataModel');
const SendShortCodeTestResponseModel = require('../lib/Models/SendShortCodeTestResponseModel');
const TemplateDataModel = require('../lib/Models/TemplateDataModel');
const Message360Model = require('../lib/Models/Message360Model');
const Data17Model = require('../lib/Models/Data17Model');

const classMap = {
    ShortCodeTestResponseModel,
    MessageModel,
    DataModel,
    SendShortCodeTestResponseModel,
    TemplateDataModel,
    Message360Model,
    Data17Model,
};

/**
 * Factory class to create instances of models and exception classes
 */
class ModelFactory {
    /**
     * Creates instance of a model class
     * @param  modelName  {string}  Name of class to instantiate
     * @returns  {object} Instance of the model class
     */
    static getInstance(modelName) {
        return new classMap[modelName]();
    }
}

module.exports = ModelFactory;
