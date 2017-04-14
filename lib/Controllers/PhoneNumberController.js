

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

class PhoneNumberController {
    /**
     * Update Phone Number Details
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['phoneNumber'] TODO: type description here
     * @param {string|null} input['friendlyName'] (optional) TODO: type description here
     * @param {string|null} input['voiceUrl'] (optional) URL requested once the call connects
     * @param {HttpActionEnum|null} input['voiceMethod'] (optional) TODO: type description here
     * @param {string|null} input['voiceFallbackUrl'] (optional) URL requested if the voice URL is
     * not available
     * @param {HttpActionEnum|null} input['voiceFallbackMethod'] (optional) TODO: type description
     * here
     * @param {string|null} input['hangupCallback'] (optional) TODO: type description here
     * @param {HttpActionEnum|null} input['hangupCallbackMethod'] (optional) TODO: type description
     * here
     * @param {string|null} input['heartbeatUrl'] (optional) URL requested once the call connects
     * @param {HttpActionEnum|null} input['heartbeatMethod'] (optional) URL that can be requested
     * every 60 seconds during the call to
     * notify of elapsed time
     * @param {string|null} input['smsUrl'] (optional) URL requested when an SMS is received
     * @param {HttpActionEnum|null} input['smsMethod'] (optional) TODO: type description here
     * @param {string|null} input['smsFallbackUrl'] (optional) URL requested once the call
     * connects
     * @param {HttpActionEnum|null} input['smsFallbackMethod'] (optional) URL requested if the sms
     * URL is not available
     * @param {string|null} input['responseType'] (optional) Response type format xml or json

     * @callback    The callback function that returns response from the API call
     */
    static updatePhoneNumber(input, callback) {
        // validating required parameters
        if (input.phoneNumber === null || input.phoneNumber === undefined) {
            callback({ errorMessage: 'The property `phoneNumber` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/incomingphone/updatenumber.{ResponseType}'}`;

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
            PhoneNumber: input.phoneNumber,
            FriendlyName: input.friendlyName,
            VoiceUrl: input.voiceUrl,
            VoiceMethod: (input.voiceMethod !== null) ? input.voiceMethod : null,
            VoiceFallbackUrl: input.voiceFallbackUrl,
            VoiceFallbackMethod: (input.voiceFallbackMethod !== null) ? input.voiceFallbackMethod : null,
            HangupCallback: input.hangupCallback,
            HangupCallbackMethod: (input.hangupCallbackMethod !== null) ? input.hangupCallbackMethod : null,
            HeartbeatUrl: input.heartbeatUrl,
            HeartbeatMethod: (input.heartbeatMethod !== null) ? input.heartbeatMethod : null,
            SmsUrl: input.smsUrl,
            SmsMethod: (input.smsMethod !== null) ? input.smsMethod : null,
            SmsFallbackUrl: input.smsFallbackUrl,
            SmsFallbackMethod: (input.smsFallbackMethod !== null) ? input.smsFallbackMethod : null,
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
     * Buy Phone Number
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['phoneNumber'] Phone number to be purchase
     * @param {string|null} input['responseType'] (optional) Response type format xml or json

     * @callback    The callback function that returns response from the API call
     */
    static createBuyNumber(input, callback) {
        // validating required parameters
        if (input.phoneNumber === null || input.phoneNumber === undefined) {
            callback({ errorMessage: 'The property `phoneNumber` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/incomingphone/buynumber.{ResponseType}'}`;

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
            PhoneNumber: input.phoneNumber,
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
     * Release number from account
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['phoneNumber'] Phone number to be relase
     * @param {string|null} input['responseType'] (optional) Response type format xml or json

     * @callback    The callback function that returns response from the API call
     */
    static createReleaseNumber(input, callback) {
        // validating required parameters
        if (input.phoneNumber === null || input.phoneNumber === undefined) {
            callback({ errorMessage: 'The property `phoneNumber` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/incomingphone/releasenumber.{ResponseType}'}`;

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
            PhoneNumber: input.phoneNumber,
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
     * Get Phone Number Details
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['phoneNumber'] Get Phone number Detail
     * @param {string|null} input['responseType'] (optional) Response type format xml or json

     * @callback    The callback function that returns response from the API call
     */
    static createViewNumberDetails(input, callback) {
        // validating required parameters
        if (input.phoneNumber === null || input.phoneNumber === undefined) {
            callback({ errorMessage: 'The property `phoneNumber` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/incomingphone/viewnumber.{ResponseType}'}`;

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
            PhoneNumber: input.phoneNumber,
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
     * List Account's Phone number details
     *
     * @param  {array}  input    Array with all options for search
     * @param {int|null} input['page'] (optional) Which page of the overall response will be
     * returned. Zero indexed
     * @param {int|null} input['pageSize'] (optional) Number of individual resources listed in the
     * response per page
     * @param {NumberTypeEnum|null} input['numberType'] (optional) TODO: type description here
     * @param {string|null} input['friendlyName'] (optional) TODO: type description here
     * @param {string|null} input['responseType'] (optional) Response type format xml or json

     * @callback    The callback function that returns response from the API call
     */
    static createListNumber(input, callback) {
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/incomingphone/listnumber.{ResponseType}'}`;

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
            Page: input.page,
            PageSize: (input.pageSize !== null) ? input.pageSize : 10,
            NumberType: (input.numberType !== null) ? input.numberType : null,
            FriendlyName: input.friendlyName,
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
     * Available Phone Number
     *
     * @param  {array}  input    Array with all options for search
     * @param {NumberTypeEnum} input['numberType'] Number type either SMS,Voice or all
     * @param {string} input['areaCode'] Phone Number Area Code
     * @param {int|null} input['pageSize'] (optional) Page Size
     * @param {string|null} input['responseType'] (optional) Response type format xml or json

     * @callback    The callback function that returns response from the API call
     */
    static createAvailablePhoneNumber(input, callback) {
        // validating required parameters
        if (input.numberType === null || input.numberType === undefined) {
            callback({ errorMessage: 'The property `numberType` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.areaCode === null || input.areaCode === undefined) {
            callback({ errorMessage: 'The property `areaCode` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/incomingphone/availablenumber.{ResponseType}'}`;

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
            NumberType: (input.numberType !== null) ? input.numberType : null,
            AreaCode: input.areaCode,
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

module.exports = PhoneNumberController;
