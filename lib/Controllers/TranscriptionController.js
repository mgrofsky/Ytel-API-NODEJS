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

class TranscriptionController {
    /**
     * Audio URL Transcriptions
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['audioUrl'] Audio url
     * @param {string} input['responseType'] Response type format xml or json
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createAudioURLTranscription(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.audioUrl === null || input.audioUrl === undefined) {
            const _err = { errorMessage: 'The property `audioUrl` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/transcriptions/audiourltranscription.{ResponseType}'}`;

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
            AudioUrl: input.audioUrl,
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
     * Recording Transcriptions
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['recordingSid'] Unique Recording sid
     * @param {string} input['responseType'] Response type format xml or json
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createRecordingTranscription(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.recordingSid === null || input.recordingSid === undefined) {
            const _err = { errorMessage: 'The property `recordingSid` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/transcriptions/recordingtranscription.{ResponseType}'}`;

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
            RecordingSid: input.recordingSid,
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
     * View Specific Transcriptions
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['transcriptionSid'] Unique Transcription ID
     * @param {string} input['responseType'] Response type format xml or json
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createViewTranscription(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.transcriptionSid === null || input.transcriptionSid === undefined) {
            const _err = { errorMessage: 'The property `transcriptionSid` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/transcriptions/viewtranscription.{ResponseType}'}`;

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
            TranscriptionSid: input.transcriptionSid,
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
     * Get All transcriptions
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['responseType'] Response type format xml or json
     * @param {int} input['page'] (optional) TODO: type description here
     * @param {int} input['pageSize'] (optional) TODO: type description here
     * @param {StatusEnum} input['status'] (optional) TODO: type description here
     * @param {string} input['dateTranscribed'] (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createListTranscription(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/transcriptions/listtranscription.{ResponseType}'}`;

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
            Status: (input.status !== null) ? input.status : null,
            DateTranscribed: input.dateTranscribed,
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

module.exports = TranscriptionController;
