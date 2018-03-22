/**
 * ytel
 *
 * This file was automatically generated for ytel by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const ErrorsModel = require('../lib/Models/ErrorsModel');
const MessageModel = require('../lib/Models/MessageModel');
const TemplateDataModel = require('../lib/Models/TemplateDataModel');
const ErrorModel = require('../lib/Models/ErrorModel');

const classMap = {
    ErrorsModel,
    MessageModel,
    TemplateDataModel,
    ErrorModel,
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
