

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

class SubAccountController {
    /**
     * Create a sub user account under the parent account
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['firstName'] Sub account user first name
     * @param {string} input['lastName'] sub account user last name
     * @param {string} input['email'] Sub account email address
     * @param {string|null} input['responseType'] (optional) Response type format xml or json

     * @callback    The callback function that returns response from the API call
     */
    static createSubAccount(input, callback) {
        // validating required parameters
        if (input.firstName === null || input.firstName === undefined) {
            callback({ errorMessage: 'The property `firstName` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.lastName === null || input.lastName === undefined) {
            callback({ errorMessage: 'The property `lastName` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.email === null || input.email === undefined) {
            callback({ errorMessage: 'The property `email` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/user/createsubaccount.{ResponseType}'}`;

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
            FirstName: input.firstName,
            LastName: input.lastName,
            Email: input.email,
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
     * Suspend or unsuspend
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['subAccountSID'] The SubaccountSid to be activated or suspended
     * @param {ActivateStatusEnum} input['activate'] 0 to suspend or 1 to activate
     * @param {string|null} input['responseType'] (optional) TODO: type description here

     * @callback    The callback function that returns response from the API call
     */
    static createSuspendSubAccount(input, callback) {
        // validating required parameters
        if (input.subAccountSID === null || input.subAccountSID === undefined) {
            callback({ errorMessage: 'The property `subAccountSID` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/user/subaccountactivation.{ResponseType}'}`;

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
            SubAccountSID: input.subAccountSID,
            Activate: input.activate,
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
     * Delete sub account or merge numbers into parent
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['subAccountSID'] The SubaccountSid to be deleted
     * @param {MergeNumberStatusEnum} input['mergeNumber'] 0 to delete or 1 to merge numbers to
     * parent account.
     * @param {string|null} input['responseType'] (optional) Response type format xml or json

     * @callback    The callback function that returns response from the API call
     */
    static createDeleteSubAccount(input, callback) {
        // validating required parameters
        if (input.subAccountSID === null || input.subAccountSID === undefined) {
            callback({ errorMessage: 'The property `subAccountSID` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/user/deletesubaccount.{ResponseType}'}`;

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
            SubAccountSID: input.subAccountSID,
            MergeNumber: input.mergeNumber,
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

module.exports = SubAccountController;
