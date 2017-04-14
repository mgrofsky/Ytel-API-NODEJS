

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
     * @param {bool|null} input['muted'] (optional) TODO: type description here
     * @param {bool|null} input['deaf'] (optional) TODO: type description here
     * @param {string|null} input['responseType'] (optional) Response Type either json or xml

     * @callback    The callback function that returns response from the API call
     */
    static createDeafMuteParticipant(input, callback) {
        // validating required parameters
        if (input.conferenceSid === null || input.conferenceSid === undefined) {
            callback({ errorMessage: 'The property `conferenceSid` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.participantSid === null || input.participantSid === undefined) {
            callback({ errorMessage: 'The property `participantSid` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/conferences/deafMuteParticipant.{ResponseType}'}`;

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
     * List Conference
     *
     * @param  {array}  input    Array with all options for search
     * @param {int|null} input['page'] (optional) Which page of the overall response will be
     * returned. Zero indexed
     * @param {int|null} input['pageSize'] (optional) Number of individual resources listed in the
     * response per page
     * @param {string|null} input['friendlyName'] (optional) Only return conferences with the
     * specified FriendlyName
     * @param {InterruptedCallStatusEnum|null} input['status'] (optional) TODO: type description
     * here
     * @param {string|null} input['dateCreated'] (optional) TODO: type description here
     * @param {string|null} input['dateUpdated'] (optional) TODO: type description here
     * @param {string|null} input['responseType'] (optional) Response type format xml or json

     * @callback    The callback function that returns response from the API call
     */
    static createListConference(input, callback) {
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/conferences/listconference.{ResponseType}'}`;

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
     * View Conference
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['conferencesid'] The unique identifier of each conference resource
     * @param {string|null} input['responseType'] (optional) Response type format xml or json

     * @callback    The callback function that returns response from the API call
     */
    static createViewConference(input, callback) {
        // validating required parameters
        if (input.conferencesid === null || input.conferencesid === undefined) {
            callback({ errorMessage: 'The property `conferencesid` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/conferences/viewconference.{ResponseType}'}`;

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
     * Add Participant in conference
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['conferencesid'] Unique Conference Sid
     * @param {string} input['participantnumber'] Particiant Number
     * @param {int} input['tocountrycode'] TODO: type description here
     * @param {bool|null} input['muted'] (optional) TODO: type description here
     * @param {bool|null} input['deaf'] (optional) TODO: type description here
     * @param {string|null} input['responseType'] (optional) Response type format xml or json

     * @callback    The callback function that returns response from the API call
     */
    static addParticipant(input, callback) {
        // validating required parameters
        if (input.conferencesid === null || input.conferencesid === undefined) {
            callback({ errorMessage: 'The property `conferencesid` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.participantnumber === null || input.participantnumber === undefined) {
            callback({ errorMessage: 'The property `participantnumber` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.tocountrycode === null || input.tocountrycode === undefined) {
            callback({ errorMessage: 'The property `tocountrycode` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/conferences/addParticipant.{ResponseType}'}`;

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
     * List Participant
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['conferenceSid'] unique conference sid
     * @param {int|null} input['page'] (optional) page number
     * @param {int|null} input['pagesize'] (optional) TODO: type description here
     * @param {bool|null} input['muted'] (optional) TODO: type description here
     * @param {bool|null} input['deaf'] (optional) TODO: type description here
     * @param {string|null} input['responseType'] (optional) Response format, xml or json

     * @callback    The callback function that returns response from the API call
     */
    static createListParticipant(input, callback) {
        // validating required parameters
        if (input.conferenceSid === null || input.conferenceSid === undefined) {
            callback({ errorMessage: 'The property `conferenceSid` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/conferences/listparticipant.{ResponseType}'}`;

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
     * View Participant
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['conferenceSid'] unique conference sid
     * @param {string} input['participantSid'] TODO: type description here
     * @param {string|null} input['responseType'] (optional) Response type format xml or json

     * @callback    The callback function that returns response from the API call
     */
    static createViewParticipant(input, callback) {
        // validating required parameters
        if (input.conferenceSid === null || input.conferenceSid === undefined) {
            callback({ errorMessage: 'The property `conferenceSid` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.participantSid === null || input.participantSid === undefined) {
            callback({ errorMessage: 'The property `participantSid` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/conferences/viewparticipant.{ResponseType}'}`;

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

module.exports = ConferenceController;
