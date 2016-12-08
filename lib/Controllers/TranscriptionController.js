/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io ) on 12/08/2016
 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _servers = require('../Servers'),
    _APIHelper = require('../APIHelper');

var TranscriptionController = {

    /**
     * Audio URL Transcriptions
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} audioUrl    Required parameter: Audio url
     *     {string|null} responseType    Optional parameter: Response type format xml or json
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createAudioURLTranscription: function (input, callback) {
        //Assign default values
        input = input || {};

        //validating required parameters
        if (input.audioUrl == null || input.audioUrl == undefined){
            return callback({errorMessage: "The property 'audioUrl' in the input object cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/transcriptions/audiourltranscription.{ResponseType}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType": (null != input.responseType)? input.responseType: "json"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent": "message360-api"
        };

        //prepare form data
        var _form = {
            "AudioUrl": input.audioUrl
        };

        //Remove null values
        _APIHelper.cleanObject(_form);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            form : _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Recording Transcriptions
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} recordingSid    Required parameter: Unique Recording sid
     *     {string|null} responseType    Optional parameter: Response type format xml or json
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createRecordingTranscription: function (input, callback) {
        //Assign default values
        input = input || {};

        //validating required parameters
        if (input.recordingSid == null || input.recordingSid == undefined){
            return callback({errorMessage: "The property 'recordingSid' in the input object cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/transcriptions/recordingtranscription.{ResponseType}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType": (null != input.responseType)? input.responseType: "json"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent": "message360-api"
        };

        //prepare form data
        var _form = {
            "RecordingSid": input.recordingSid
        };

        //Remove null values
        _APIHelper.cleanObject(_form);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            form : _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
    },


    /**
     * View Specific Transcriptions
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} transcriptionSid    Required parameter: Unique Transcription ID
     *     {string|null} responseType    Optional parameter: Response type format xml or json
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createViewTranscription: function (input, callback) {
        //Assign default values
        input = input || {};

        //validating required parameters
        if (input.transcriptionSid == null || input.transcriptionSid == undefined){
            return callback({errorMessage: "The property 'transcriptionSid' in the input object cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/transcriptions/viewtranscription.{ResponseType}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType": (null != input.responseType)? input.responseType: "json"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent": "message360-api"
        };

        //prepare form data
        var _form = {
            "TranscriptionSid": input.transcriptionSid
        };

        //Remove null values
        _APIHelper.cleanObject(_form);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            form : _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Get All transcriptions
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {int|null} page    Optional parameter: Example: 
     *     {int|null} pageSize    Optional parameter: Example: 
     *     {Status|null} status    Optional parameter: Example: 
     *     {string|null} dateTranscribed    Optional parameter: Example: 
     *     {string|null} responseType    Optional parameter: Response type format xml or json
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createListTranscription: function (input, callback) {
        //Assign default values
        input = input || {};


        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/transcriptions/listtranscription.{ResponseType}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType": (null != input.responseType)? input.responseType: "json"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent": "message360-api"
        };

        //prepare form data
        var _form = {
            "Page": input.page,
            "PageSize": input.pageSize,
            "Status": (input.status != null)?input.status:null,
            "DateTranscribed": input.dateTranscribed
        };

        //Remove null values
        _APIHelper.cleanObject(_form);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            form : _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
    }

};

module.exports = TranscriptionController;