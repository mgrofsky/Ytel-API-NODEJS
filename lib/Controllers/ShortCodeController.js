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

class ShortCodeController {
    /**
     * @todo Add general description for this endpoint
     *
     * @param  {array}  input    Array with all options for search
     * @param {int} input['shortcode'] Your dedicated shortcode
     * @param {double} input['to'] The number to send your SMS to
     * @param {string} input['body'] The body of your message
     * @param {string} input['responseType'] Response type format xml or json
     * @param {HttpActionEnum} input['method'] (optional) Callback status method, POST or GET
     * @param {string} input['messagestatuscallback'] (optional) Callback url for SMS status
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static sendDedicatedShortcode(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.shortcode === null || input.shortcode === undefined) {
            const _err = { errorMessage: 'The property `shortcode` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.to === null || input.to === undefined) {
            const _err = { errorMessage: 'The property `to` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.body === null || input.body === undefined) {
            const _err = { errorMessage: 'The property `body` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/shortcode/senddedicatedsms.{ResponseType}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            ResponseType: input.responseType,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'message360-api',
        };

        // prepare form data
        const _form = {
            shortcode: input.shortcode,
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
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, _response.body, _context);
                    _fulfill(_response.body);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

    /**
     * View a single Sms Short Code message.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['messageSid'] The unique identifier for the sms resource
     * @param {string} input['responseType'] Response type format xml or json
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static viewShortcode(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.messageSid === null || input.messageSid === undefined) {
            const _err = { errorMessage: 'The property `messageSid` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/shortcode/viewsms..{ResponseType}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            ResponseType: input.responseType,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'message360-api',
        };

        // prepare form data
        const _form = {
            MessageSid: input.messageSid,
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
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, _response.body, _context);
                    _fulfill(_response.body);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

    /**
     * Retrieve a list of Short Code message objects.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['responseType'] Response type format xml or json
     * @param {string} input['shortcode'] (optional) Only list messages sent from this Short Code
     * @param {string} input['to'] (optional) Only list messages sent to this number
     * @param {date} input['dateSent'] (optional) Only list messages sent with the specified date
     * @param {int} input['page'] (optional) The page count to retrieve from the total results in
     * the collection. Page indexing starts at 1.
     * @param {int} input['pageSize'] (optional) The count of objects to return per page.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static listShortcode(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/shortcode/listsms.{ResponseType}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            ResponseType: input.responseType,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'message360-api',
        };

        // prepare form data
        const _form = {
            Shortcode: input.shortcode,
            To: input.to,
            DateSent: _apiHelper.stringifyDateTime(dateSent, 'date'),
            Page: (input.page !== null) ? input.page : 1,
            PageSize: (input.pageSize !== null) ? input.pageSize : 10,
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
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, _response.body, _context);
                    _fulfill(_response.body);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

    /**
     * Retrive a list of inbound Sms Short Code messages associated with your message360 account.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['responseType'] Response type format xml or json
     * @param {int} input['page'] (optional) Which page of the overall response will be returned.
     * Zero indexed
     * @param {int} input['pageSize'] (optional) Number of individual resources listed in the
     * response per page
     * @param {string} input['from'] (optional) Only list SMS messages sent from this number
     * @param {string} input['shortcode'] (optional) Only list SMS messages sent to Shortcode
     * @param {string} input['dateReceived'] (optional) Only list SMS messages sent in the
     * specified date MAKE REQUEST
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static listInboundShortcode(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/shortcode/getinboundsms.{ResponseType}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            ResponseType: input.responseType,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'message360-api',
        };

        // prepare form data
        const _form = {
            Page: (input.page !== null) ? input.page : 1,
            PageSize: (input.pageSize !== null) ? input.pageSize : 10,
            From: input.from,
            Shortcode: input.shortcode,
            DateReceived: input.dateReceived,
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
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, _response.body, _context);
                    _fulfill(_response.body);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

}

module.exports = ShortCodeController;
