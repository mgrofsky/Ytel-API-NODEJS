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
     * Retrieve a list of available phone numbers that can be purchased and used for your
     * message360 account.
     *
     * @param  {array}  input    Array with all options for search
     * @param {NumberTypeEnum} input['numbertype'] Number type either SMS,Voice or all
     * @param {string} input['areacode'] Specifies the area code for the returned list of available
     * numbers. Only available for North American numbers.
     * @param {string} input['responseType'] Response type format xml or json
     * @param {int} input['pagesize'] (optional) The count of objects to return.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static availablePhoneNumber(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.numbertype === null || input.numbertype === undefined) {
            const _err = { errorMessage: 'The property `numbertype` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.areacode === null || input.areacode === undefined) {
            const _err = { errorMessage: 'The property `areacode` in the input object cannot be null.',
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
            numbertype: (input.numbertype !== null) ? input.numbertype : null,
            areacode: input.areacode,
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
     * Retrieve the details for a phone number by its number.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['phoneNumber'] A valid message360 10-digit phone number (E.164 format).
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
     * Remove a purchased message360 number from your account.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['phoneNumber'] A valid 10-digit message360 number (E.164 format).
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
     * Purchase a phone number to be used with your message360 account
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['phoneNumber'] A valid 10-digit message360 number (E.164 format).
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
     * Remove a purchased message360 number from your account.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['phoneNumber'] A valid message360 comma separated numbers (E.164
     * format).
     * @param {string} input['responseType'] Response type format xml or json
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static massReleaseNumber(input, callback) {
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

        let _queryBuilder = `${_baseUri}${'/incomingphone/massreleasenumber.{ResponseType}'}`;

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
     * Update properties for a message360 number that has been purchased for your account. Refer
     * to the parameters list for the list of properties that can be updated.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['phoneNumber'] A valid message360 number (E.164 format).
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
     * @param {string} input['smsFallbackUrl'] (optional) URL used if any errors occur during
     * execution of InboundXML from an SMS or at initial
     * request of the SmsUrl.
     * @param {HttpActionEnum} input['smsFallbackMethod'] (optional) The HTTP method message360
     * will use when URL requested if the SmsUrl
     * is not available.
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

    /**
     * Retrieve a list of purchased phones numbers associated with your message360 account.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['responseType'] Response type format xml or json
     * @param {int} input['page'] (optional) Which page of the overall response will be returned.
     * Page indexing starts at 1.
     * @param {int} input['pageSize'] (optional) The page count to retrieve from the total results
     * in the collection. Page indexing starts at 1.
     * @param {NumberTypeEnum} input['numberType'] (optional) The capability supported by the
     * number.Number type either SMS,Voice or all
     * @param {string} input['friendlyName'] (optional) A human-readable label added to the number
     * object.
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
     * Update properties for a message360 numbers that has been purchased for your account. Refer
     * to the parameters list for the list of properties that can be updated.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['phoneNumber'] A valid comma(,) separated message360 numbers. (E.164
     * format).
     * @param {string} input['voiceUrl'] The URL returning InboundXML incoming calls should execute
     * when connected.
     * @param {string} input['responseType'] Response type format xml or json
     * @param {string} input['friendlyName'] (optional) A human-readable value for labeling the
     * number.
     * @param {HttpActionEnum} input['voiceMethod'] (optional) Specifies the HTTP method used to
     * request the VoiceUrl once incoming call
     * connects.
     * @param {string} input['voiceFallbackUrl'] (optional) URL used if any errors occur during
     * execution of InboundXML on a call or at initial
     * request of the voice url
     * @param {HttpActionEnum} input['voiceFallbackMethod'] (optional) Specifies the HTTP method
     * used to request the VoiceFallbackUrl
     * once incoming call connects.
     * @param {string} input['hangupCallback'] (optional) URL that can be requested to receive
     * notification when and how incoming call has ended.
     * @param {HttpActionEnum} input['hangupCallbackMethod'] (optional) The HTTP method message360
     * will use when requesting the
     * HangupCallback URL.
     * @param {string} input['heartbeatUrl'] (optional) URL that can be used to monitor the phone
     * number.
     * @param {HttpActionEnum} input['heartbeatMethod'] (optional) The HTTP method message360 will
     * use when requesting the HeartbeatUrl.
     * @param {string} input['smsUrl'] (optional) URL requested when an SMS is received.
     * @param {HttpActionEnum} input['smsMethod'] (optional) The HTTP method message360 will use
     * when requesting the SmsUrl.
     * @param {string} input['smsFallbackUrl'] (optional) URL used if any errors occur during
     * execution of InboundXML from an SMS or at initial
     * request of the SmsUrl.
     * @param {HttpActionEnum} input['smsFallbackMethod'] (optional) The HTTP method message360
     * will use when URL requested if the SmsUrl
     * is not available.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static massUpdateNumber(input, callback) {
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

        let _queryBuilder = `${_baseUri}${'/incomingphone/massupdatenumber.{ResponseType}'}`;

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

    /**
     * Get DID Score Number
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['phonenumber'] Specifies the multiple phone numbers for check updated
     * spamscore .
     * @param {string} input['responseType'] Response type format xml or json
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getDIDScoreNumber(input, callback) {
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

        let _queryBuilder = `${_baseUri}${'/incomingphone/getdidscore.{ResponseType}'}`;

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
            Phonenumber: input.phonenumber,
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
     * Purchase a selected number of DID's from specific area codes to be used with your
     * message360 account.
     *
     * @param  {array}  input    Array with all options for search
     * @param {NumberTypeEnum} input['numberType'] The capability the number supports.
     * @param {string} input['areaCode'] Specifies the area code for the returned list of available
     * numbers. Only available for North American numbers.
     * @param {string} input['quantity'] A positive integer that tells how many number you want to
     * buy at a time.
     * @param {string} input['responseType'] Response type format xml or json
     * @param {string} input['leftover'] (optional) If desired quantity is unavailable purchase
     * what is available .
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static bulkBuyNumber(input, callback) {
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
        } else if (input.quantity === null || input.quantity === undefined) {
            const _err = { errorMessage: 'The property `quantity` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/incomingphone/bulkbuy.{ResponseType}'}`;

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
            Quantity: input.quantity,
            Leftover: input.leftover,
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
     * Transfer phone number that has been purchased for from one account to another account.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['phonenumber'] A valid 10-digit message360 number (E.164 format).
     * @param {string} input['fromaccountsid'] A specific Accountsid from where Number is getting
     * transfer.
     * @param {string} input['toaccountsid'] A specific Accountsid to which Number is getting
     * transfer.
     * @param {string} input['responseType'] Response type format xml or json
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static transferNumber(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.phonenumber === null || input.phonenumber === undefined) {
            const _err = { errorMessage: 'The property `phonenumber` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.fromaccountsid === null || input.fromaccountsid === undefined) {
            const _err = { errorMessage: 'The property `fromaccountsid` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.toaccountsid === null || input.toaccountsid === undefined) {
            const _err = { errorMessage: 'The property `toaccountsid` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/incomingphone/transferphonenumbers.{ResponseType}'}`;

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
            fromaccountsid: input.fromaccountsid,
            toaccountsid: input.toaccountsid,
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
