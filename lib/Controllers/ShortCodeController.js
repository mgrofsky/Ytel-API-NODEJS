

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
     * View a Shared ShortCode Template
     *
     * @param  {array}  input    Array with all options for search
     * @param {uuid|string} input['templateid'] The unique identifier for a template object
     * @param {string} input['responseType'] Response type format xml or json

     * @callback    The callback function that returns response from the API call
     */
    static createViewTemplate(input, callback) {
        // validating required parameters
        if (input.templateid === null || input.templateid === undefined) {
            callback({ errorMessage: 'The property `templateid` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/template/view.{ResponseType}'}`;

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
            templateid: input.templateid,
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
     * Send an SMS from a message360 ShortCode
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['shortcode'] The Short Code number that is the sender of this message
     * @param {string} input['tocountrycode'] The country code for sending this message
     * @param {string} input['to'] A valid 10-digit number that should receive the message+
     * @param {uuid|string} input['templateid'] The unique identifier for the template used for the
     * message
     * @param {string|null} input['method'] (optional) Specifies the HTTP method used to request
     * the required URL once the Short Code message is sent.
     * @param {string|null} input['messageStatusCallback'] (optional) URL that can be requested to
     * receive notification when Short Code
     * message was sent.
     * @param {string|null} input['responseType'] (optional) Response type format xml or json
     * @param    {Dictionary}  fieldParameters    Additional optional form parameters are supported
     * by this endpoint
     * @callback    The callback function that returns response from the API call
     */
    static createSendShortCode(input, fieldParameters, callback) {
        // validating required parameters
        if (input.shortcode === null || input.shortcode === undefined) {
            callback({ errorMessage: 'The property `shortcode` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.to === null || input.to === undefined) {
            callback({ errorMessage: 'The property `to` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.templateid === null || input.templateid === undefined) {
            callback({ errorMessage: 'The property `templateid` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/shortcode/sendsms.{ResponseType}'}`;

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
            shortcode: input.shortcode,
            tocountrycode: input.tocountrycode,
            to: input.to,
            templateid: input.templateid,
            Method: (input.method !== null) ? input.method : 'GET',
            MessageStatusCallback: input.messageStatusCallback,
        };

        // prepare optional form fields
        _apiHelper.merge(_form, fieldParameters)

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
     * List All Inbound ShortCode
     *
     * @param  {array}  input    Array with all options for search
     * @param {int|null} input['page'] (optional) Which page of the overall response will be
     * returned. Zero indexed
     * @param {int|null} input['pagesize'] (optional) Number of individual resources listed in the
     * response per page
     * @param {string|null} input['from'] (optional) From Number to Inbound ShortCode
     * @param {string|null} input['shortcode'] (optional) Only list messages sent to this Short
     * Code
     * @param {string|null} input['dateReceived'] (optional) Only list messages sent with the
     * specified date
     * @param {string|null} input['responseType'] (optional) Response type format xml or json

     * @callback    The callback function that returns response from the API call
     */
    static createListInboundShortCode(input, callback) {
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/shortcode/getinboundsms.{ResponseType}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            ResponseType: (input.responseType !== null) ? input.responseType : 'json',
        });

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            DateReceived: input.dateReceived,
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
            pagesize: (input.pagesize !== null) ? input.pagesize : 10,
            from: input.from,
            Shortcode: input.shortcode,
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
     * List ShortCode Messages
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
    static createListShortCode(input, callback) {
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/shortcode/listsms.{ResponseType}'}`;

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
            pagesize: (input.pagesize !== null) ? input.pagesize : 10,
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
     * List Shortcode Templates by Type
     *
     * @param  {array}  input    Array with all options for search
     * @param {string|null} input['type'] (optional) The type (category) of template Valid values:
     * marketing, authorization
     * @param {int|null} input['page'] (optional) The page count to retrieve from the total results
     * in the collection. Page indexing starts at 1.
     * @param {int|null} input['pagesize'] (optional) The count of objects to return per page.
     * @param {string|null} input['responseType'] (optional) Response type format xml or json

     * @callback    The callback function that returns response from the API call
     */
    static createListTemplates(input, callback) {
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/template/lists.{ResponseType}'}`;

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
            type: (input.type !== null) ? input.type : 'authorization',
            page: input.page,
            pagesize: (input.pagesize !== null) ? input.pagesize : 10,
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
     * View a ShortCode Message
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['messagesid'] Message sid
     * @param {string|null} input['responseType'] (optional) Response type format xml or json

     * @callback    The callback function that returns response from the API call
     */
    static createViewShortCode(input, callback) {
        // validating required parameters
        if (input.messagesid === null || input.messagesid === undefined) {
            callback({ errorMessage: 'The property `messagesid` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/shortcode/viewsms.{ResponseType}'}`;

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

module.exports = ShortCodeController;
