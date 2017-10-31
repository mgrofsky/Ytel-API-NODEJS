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
     * Available Phone Number
     *
     * @param  {array}  input    Array with all options for search
     * @param {NumberTypeEnum} input['numberType'] Number type either SMS,Voice or all
     * @param {string} input['areaCode'] Phone Number Area Code
     * @param {string} input['responseType'] Response type format xml or json
     * @param {int} input['pageSize'] (optional) Page Size
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static availablePhoneNumber(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.numberType === null || input.numberType === undefined) {
            const _err = { errorMessage: 'The property `numberType` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.areaCode === null || input.areaCode === undefined) {
            const _err = { errorMessage: 'The property `areaCode` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/incomingphone/availablenumber.{ResponseType}'}`;

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
     * List Account's Phone number details
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['responseType'] Response type format xml or json
     * @param {int} input['page'] (optional) Which page of the overall response will be returned.
     * Zero indexed
     * @param {int} input['pageSize'] (optional) Number of individual resources listed in the
     * response per page
     * @param {NumberTypeEnum} input['numberType'] (optional) SMS or Voice
     * @param {string} input['friendlyName'] (optional) Friendly name of the number
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static listNumber(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/incomingphone/listnumber.{ResponseType}'}`;

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
     * Get Phone Number Details
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['phoneNumber'] Get Phone number Detail
     * @param {string} input['responseType'] Response type format xml or json
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static viewNumberDetails(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.phoneNumber === null || input.phoneNumber === undefined) {
            const _err = { errorMessage: 'The property `phoneNumber` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/incomingphone/viewnumber.{ResponseType}'}`;

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
     * Release number from account
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['phoneNumber'] Phone number to be relase
     * @param {string} input['responseType'] Response type format xml or json
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static releaseNumber(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.phoneNumber === null || input.phoneNumber === undefined) {
            const _err = { errorMessage: 'The property `phoneNumber` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/incomingphone/releasenumber.{ResponseType}'}`;

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
     * Buy Phone Number
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['phoneNumber'] Phone number to be purchase
     * @param {string} input['responseType'] Response type format xml or json
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static buyNumber(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.phoneNumber === null || input.phoneNumber === undefined) {
            const _err = { errorMessage: 'The property `phoneNumber` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/incomingphone/buynumber.{ResponseType}'}`;

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
     * Update Phone Number Details
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['phoneNumber'] The phone number to update
     * @param {string} input['voiceUrl'] URL requested once the call connects
     * @param {string} input['responseType'] Response type format xml or json
     * @param {string} input['friendlyName'] (optional) Phone number friendly name description
     * @param {HttpActionEnum} input['voiceMethod'] (optional) Post or Get
     * @param {string} input['voiceFallbackUrl'] (optional) URL requested if the voice URL is not
     * available
     * @param {HttpActionEnum} input['voiceFallbackMethod'] (optional) Post or Get
     * @param {string} input['hangupCallback'] (optional) callback url after a hangup occurs
     * @param {HttpActionEnum} input['hangupCallbackMethod'] (optional) Post or Get
     * @param {string} input['heartbeatUrl'] (optional) URL requested once the call connects
     * @param {HttpActionEnum} input['heartbeatMethod'] (optional) URL that can be requested every
     * 60 seconds during the call to notify of
     * elapsed time
     * @param {string} input['smsUrl'] (optional) URL requested when an SMS is received
     * @param {HttpActionEnum} input['smsMethod'] (optional) Post or Get
     * @param {string} input['smsFallbackUrl'] (optional) URL requested once the call connects
     * @param {HttpActionEnum} input['smsFallbackMethod'] (optional) URL requested if the sms URL
     * is not available
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updatePhoneNumber(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.phoneNumber === null || input.phoneNumber === undefined) {
            const _err = { errorMessage: 'The property `phoneNumber` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.voiceUrl === null || input.voiceUrl === undefined) {
            const _err = { errorMessage: 'The property `voiceUrl` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/incomingphone/updatenumber.{ResponseType}'}`;

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
            PhoneNumber: input.phoneNumber,
            VoiceUrl: input.voiceUrl,
            FriendlyName: input.friendlyName,
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

module.exports = PhoneNumberController;
