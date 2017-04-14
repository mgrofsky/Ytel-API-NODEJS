

/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');

class SMSController {
    /**
     * List All Inbound SMS
     *
     * @param  {array}  input    Array with all options for search
     * @param {int|null} input['page'] (optional) Which page of the overall response will be
     * returned. Zero indexed
     * @param {string|null} input['pagesize'] (optional) Number of individual resources listed in
     * the response per page
     * @param {string|null} input['from'] (optional) From Number to Inbound SMS
     * @param {string|null} input['to'] (optional) To Number to get Inbound SMS
     * @param {string|null} input['responseType'] (optional) Response type format xml or json

     * @callback    The callback function that returns response from the API call
     */
    static createListInboundSMS(input, callback) {
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/sms/getInboundsms.{ResponseType}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            ResponseType: (input.responseType !== null) ? input.responseType : 'json',
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'message360-api',
        };

        // prepare form data
        const _form = {
            page: input.page,
            pagesize: input.pagesize,
            from: input.from,
            to: input.to,
        };

        // remove null values
        _apiHelper.cleanObject(_form);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        const cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _baseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body, _context);
            } else {
                errorResponse = _baseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    }

    /**
     * List All SMS
     *
     * @param  {array}  input    Array with all options for search
     * @param {int|null} input['page'] (optional) Which page of the overall response will be
     * returned. Zero indexed
     * @param {int|null} input['pagesize'] (optional) Number of individual resources listed in the
     * response per page
     * @param {string|null} input['from'] (optional) Messages sent from this number
     * @param {string|null} input['to'] (optional) Messages sent to this number
     * @param {string|null} input['datesent'] (optional) Only list SMS messages sent in the
     * specified date range
     * @param {string|null} input['responseType'] (optional) Response type format xml or json

     * @callback    The callback function that returns response from the API call
     */
    static createListSMS(input, callback) {
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/sms/listsms.{ResponseType}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            ResponseType: (input.responseType !== null) ? input.responseType : 'json',
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'message360-api',
        };

        // prepare form data
        const _form = {
            page: input.page,
            pagesize: input.pagesize,
            from: input.from,
            to: input.to,
            datesent: input.datesent,
        };

        // remove null values
        _apiHelper.cleanObject(_form);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        const cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _baseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body, _context);
            } else {
                errorResponse = _baseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    }

    /**
     * Send an SMS from a message360 number
     *
     * @param  {array}  input    Array with all options for search
     * @param {int} input['fromcountrycode'] From Country Code
     * @param {string} input['from'] SMS enabled Message360 number to send this message from
     * @param {int} input['tocountrycode'] To country code
     * @param {string} input['to'] Number to send the SMS to
     * @param {string} input['body'] Text Message To Send
     * @param {HttpActionEnum|null} input['method'] (optional) Specifies the HTTP method used to
     * request the required URL once SMS sent.
     * @param {string|null} input['messagestatuscallback'] (optional) URL that can be requested to
     * receive notification when SMS has Sent.
     * A set of default parameters will be sent
     * here once the SMS is finished.
     * @param {string|null} input['responseType'] (optional) Response type format xml or json

     * @callback    The callback function that returns response from the API call
     */
    static createSendSMS(input, callback) {
        // validating required parameters
        if (input.from === null || input.from === undefined) {
            callback({ errorMessage: 'The property `from` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.to === null || input.to === undefined) {
            callback({ errorMessage: 'The property `to` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.body === null || input.body === undefined) {
            callback({ errorMessage: 'The property `body` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/sms/sendsms.{ResponseType}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            ResponseType: (input.responseType !== null) ? input.responseType : 'json',
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'message360-api',
        };

        // prepare form data
        const _form = {
            fromcountrycode: input.fromcountrycode,
            from: input.from,
            tocountrycode: input.tocountrycode,
            to: input.to,
            body: input.body,
            method: (input.method !== null) ? input.method : null,
            messagestatuscallback: input.messagestatuscallback,
        };

        // remove null values
        _apiHelper.cleanObject(_form);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        const cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _baseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body, _context);
            } else {
                errorResponse = _baseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    }

    /**
     * View a Particular SMS
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['messagesid'] Message sid
     * @param {string|null} input['responseType'] (optional) Response type format xml or json

     * @callback    The callback function that returns response from the API call
     */
    static createViewSMS(input, callback) {
        // validating required parameters
        if (input.messagesid === null || input.messagesid === undefined) {
            callback({ errorMessage: 'The property `messagesid` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/sms/viewsms.{ResponseType}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            ResponseType: (input.responseType !== null) ? input.responseType : 'json',
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'message360-api',
        };

        // prepare form data
        const _form = {
            messagesid: input.messagesid,
        };

        // remove null values
        _apiHelper.cleanObject(_form);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        const cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _baseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body, _context);
            } else {
                errorResponse = _baseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    }

}

module.exports = SMSController;
