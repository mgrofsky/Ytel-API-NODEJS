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

class CarrierController {
    /**
     * Get the All Purchase Number's Carrier lookup
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['responseType'] Response type format xml or json
     * @param {int} input['page'] (optional) Page Number
     * @param {int} input['pagesize'] (optional) Page Size
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createCarrierLookupList(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/carrier/lookuplist.{ResponseType}'}`;

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
            page: input.page,
            pagesize: input.pagesize,
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
     * Get the Carrier Lookup
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['phonenumber'] The number to lookup
     * @param {string} input['responseType'] Response type format xml or json
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createCarrierLookup(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.phonenumber === null || input.phonenumber === undefined) {
            const _err = { errorMessage: 'The property `phonenumber` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/carrier/lookup.{ResponseType}'}`;

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
            phonenumber: input.phonenumber,
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

module.exports = CarrierController;
