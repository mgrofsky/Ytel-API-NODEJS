

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

class NumberVerificationController {
    /**
     * Number Verification
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['phonenumber'] TODO: type description here
     * @param {string} input['type'] TODO: type description here
     * @param {string|null} input['responseType'] (optional) Response Type either json or xml

     * @callback    The callback function that returns response from the API call
     */
    static createVerifyNumber(input, callback) {
        // validating required parameters
        if (input.phonenumber === null || input.phonenumber === undefined) {
            callback({ errorMessage: 'The property `phonenumber` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.type === null || input.type === undefined) {
            callback({ errorMessage: 'The property `type` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/verifycallerid/verifynumber.{ResponseType}'}`;

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
            phonenumber: input.phonenumber,
            type: input.type,
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

module.exports = NumberVerificationController;
