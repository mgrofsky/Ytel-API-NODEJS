

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

class WebRTCController {
    /**
     * @todo Add general description for this endpoint
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['accountSid'] Your message360 Account SID
     * @param {string} input['authToken'] Your message360 Token

     * @callback    The callback function that returns response from the API call
     */
    static createCheckFunds(input, callback) {
        // validating required parameters
        if (input.accountSid === null || input.accountSid === undefined) {
            callback({ errorMessage: 'The property `accountSid` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.authToken === null || input.authToken === undefined) {
            callback({ errorMessage: 'The property `authToken` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/webrtc/checkFunds.json'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'message360-api',
        };

        // prepare form data
        const _form = {
            account_sid: input.accountSid,
            auth_token: input.authToken,
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
     * message360 webrtc
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['accountSid'] Your message360 Account SID
     * @param {string} input['authToken'] Your message360 Token
     * @param {string} input['username'] WebRTC username authentication
     * @param {string} input['password'] WebRTC password authentication

     * @callback    The callback function that returns response from the API call
     */
    static createToken(input, callback) {
        // validating required parameters
        if (input.accountSid === null || input.accountSid === undefined) {
            callback({ errorMessage: 'The property `accountSid` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.authToken === null || input.authToken === undefined) {
            callback({ errorMessage: 'The property `authToken` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.username === null || input.username === undefined) {
            callback({ errorMessage: 'The property `username` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.password === null || input.password === undefined) {
            callback({ errorMessage: 'The property `password` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/webrtc/agentLogin.json'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'message360-api',
        };

        // prepare form data
        const _form = {
            account_sid: input.accountSid,
            auth_token: input.authToken,
            username: input.username,
            password: input.password,
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

module.exports = WebRTCController;
