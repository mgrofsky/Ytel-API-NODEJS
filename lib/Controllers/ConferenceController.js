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

class ConferenceController {
    /**
     * Deaf Mute Participant
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['conferenceSid'] TODO: type description here
     * @param {string} input['participantSid'] TODO: type description here
     * @param {string} input['responseType'] Response Type either json or xml
     * @param {bool} input['muted'] (optional) TODO: type description here
     * @param {bool} input['deaf'] (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createDeafMuteParticipant(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.conferenceSid === null || input.conferenceSid === undefined) {
            const _err = { errorMessage: 'The property `conferenceSid` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.participantSid === null || input.participantSid === undefined) {
            const _err = { errorMessage: 'The property `participantSid` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/conferences/deafMuteParticipant.{ResponseType}'}`;

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
            conferenceSid: input.conferenceSid,
            ParticipantSid: input.participantSid,
            Muted: input.muted,
            Deaf: input.deaf,
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
     * List Conference
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['responseType'] Response type format xml or json
     * @param {int} input['page'] (optional) Which page of the overall response will be returned.
     * Zero indexed
     * @param {int} input['pageSize'] (optional) Number of individual resources listed in the
     * response per page
     * @param {string} input['friendlyName'] (optional) Only return conferences with the specified
     * FriendlyName
     * @param {InterruptedCallStatusEnum} input['status'] (optional) TODO: type description here
     * @param {string} input['dateCreated'] (optional) TODO: type description here
     * @param {string} input['dateUpdated'] (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createListConference(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/conferences/listconference.{ResponseType}'}`;

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
            Page: input.page,
            PageSize: input.pageSize,
            FriendlyName: input.friendlyName,
            Status: (input.status !== null) ? input.status : null,
            DateCreated: input.dateCreated,
            DateUpdated: input.dateUpdated,
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
     * View Conference
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['conferencesid'] The unique identifier of each conference resource
     * @param {string} input['responseType'] Response type format xml or json
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createViewConference(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.conferencesid === null || input.conferencesid === undefined) {
            const _err = { errorMessage: 'The property `conferencesid` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/conferences/viewconference.{ResponseType}'}`;

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
            conferencesid: input.conferencesid,
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
     * Add Participant in conference
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['conferencesid'] Unique Conference Sid
     * @param {string} input['participantnumber'] Particiant Number
     * @param {int} input['tocountrycode'] TODO: type description here
     * @param {string} input['responseType'] Response type format xml or json
     * @param {bool} input['muted'] (optional) TODO: type description here
     * @param {bool} input['deaf'] (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static addParticipant(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.conferencesid === null || input.conferencesid === undefined) {
            const _err = { errorMessage: 'The property `conferencesid` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.participantnumber === null || input.participantnumber === undefined) {
            const _err = { errorMessage: 'The property `participantnumber` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.tocountrycode === null || input.tocountrycode === undefined) {
            const _err = { errorMessage: 'The property `tocountrycode` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/conferences/addParticipant.{ResponseType}'}`;

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
            conferencesid: input.conferencesid,
            participantnumber: input.participantnumber,
            tocountrycode: input.tocountrycode,
            muted: input.muted,
            deaf: input.deaf,
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
     * List Participant
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['conferenceSid'] unique conference sid
     * @param {string} input['responseType'] Response format, xml or json
     * @param {int} input['page'] (optional) page number
     * @param {int} input['pagesize'] (optional) TODO: type description here
     * @param {bool} input['muted'] (optional) TODO: type description here
     * @param {bool} input['deaf'] (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createListParticipant(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.conferenceSid === null || input.conferenceSid === undefined) {
            const _err = { errorMessage: 'The property `conferenceSid` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/conferences/listparticipant.{ResponseType}'}`;

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
            ConferenceSid: input.conferenceSid,
            Page: input.page,
            Pagesize: input.pagesize,
            Muted: input.muted,
            Deaf: input.deaf,
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
     * View Participant
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['conferenceSid'] unique conference sid
     * @param {string} input['participantSid'] TODO: type description here
     * @param {string} input['responseType'] Response type format xml or json
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createViewParticipant(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.conferenceSid === null || input.conferenceSid === undefined) {
            const _err = { errorMessage: 'The property `conferenceSid` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.participantSid === null || input.participantSid === undefined) {
            const _err = { errorMessage: 'The property `participantSid` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/conferences/viewparticipant.{ResponseType}'}`;

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
            ConferenceSid: input.conferenceSid,
            ParticipantSid: input.participantSid,
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

module.exports = ConferenceController;
