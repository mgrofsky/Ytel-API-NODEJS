/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const moment = require('moment');
const modelFactory = require('./ModelFactory');

/**
 * ObjectMapper is utility class that helps maps a POJO to a model or exception object.
 * Embedded models and dates are also instantiated to their correct types.
 */
class ObjectMapper {
    /**
     * Returns Datetime parsed value for field
     * @param  propName  {string}  Name of the field
     * @param  type   {string}  The Datetime format of the field
     * @returns       {object}  Parsed Datetime object
     */
    static parseDateTime(propName, type) {
        if (propName === null || propName === undefined) {
            return null;
        }
        switch (type) {
        case 'unixtimestamp':
            return new Date(propName).getTime();
        case 'rfc1123':
            return new Date(propName).toUTCString();
        case 'rfc3339':
            return moment(propName).parseZone().format();
        case 'date':
            return moment(propName).format('YYYY-MM-DD');
        default:
            return moment(propName).format('YYYY-MM-DD');
        }
    }

    /**
     * Helper function to map input object with model fields
     * @param  json  {object}  Input object to be mapped onto model fields
     * @param  modelName  {string}  The name of model to instantiate
     * @returns           {object}  Object containing mapped fields of model
     */
    mapObject(json, modelName) {
        if (json === null || json === undefined) {
            return null;
        }
        return this.mapFields(json, modelFactory.getInstance(modelName));
    }

    /**
     * Maps the instance's fields with the values in input object
     * The function helps in deserializing a model instance
     * @param  json  {object}  Input object to be mapped onto model fields
     * @param  instance  {object}  The instance of the model class
     * @returns          {object}  Mapped instance of model class
     */
    mapFields(json, instance) {
        const returnInstance = instance;
        const fieldsInfo = instance.constructor.mappingInfo();
        fieldsInfo.forEach((fieldInfo) => {
            if (fieldInfo.type) {
                if (fieldInfo.array) {
                    if (json[fieldInfo.realName] !== null &&
                          json[fieldInfo.realName] !== undefined) {
                        returnInstance[fieldInfo.name] = json[fieldInfo.realName].map(obj =>
                            this.mapObject(obj, fieldInfo.type));
                    }
                } else {
                    returnInstance[fieldInfo.name] =
                        this.mapObject(json[fieldInfo.realName], fieldInfo.type);
                }
            } else if (fieldInfo.isDateTime) {
                returnInstance[fieldInfo.name] =
                    json[fieldInfo.realName] === null || json[fieldInfo.realName] === undefined ?
                        json[fieldInfo.realName] :
                        ObjectMapper.parseDateTime(json[fieldInfo.realName],
                            fieldInfo.dateTimeValue);
            } else {
                returnInstance[fieldInfo.name] =
                    json[fieldInfo.realName] === null || json[fieldInfo.realName] === undefined ?
                        instance[fieldInfo.name] :
                        json[fieldInfo.realName];
            }
        });
        return returnInstance;
    }
}

module.exports = ObjectMapper;