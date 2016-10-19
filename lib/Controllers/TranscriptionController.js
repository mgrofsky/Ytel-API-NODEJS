/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io ) on 10/18/2016
 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _APIHelper = require('../APIHelper');

var TranscriptionController = {

    /**
     * Get All transcriptions
     * @param {int|null} page    Optional parameter: Example: 
     * @param {int|null} pageSize    Optional parameter: Example: 
     * @param {StatusEnum|null} status    Optional parameter: Example: 
     * @param {string|null} dateTranscribed    Optional parameter: Example: 
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createListTranscription : function(page, pageSize, status, dateTranscribed, responseType, callback){
        //Assign default values
        responseType = responseType || "json";


        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/transcriptions/listtranscription.{ResponseType}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType" : (null != responseType)? responseType: "json"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent" : "message360-api"
        };

        //prepare form data
        var _form = {
            "Page" : page,
            "PageSize" : pageSize,
            "Status" : (status != null)?status:null,
            "DateTranscribed" : dateTranscribed
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
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Recording Transcriptions
     * @param {string} recordingSid    Required parameter: Unique Recording sid
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createRecordingTranscription : function(recordingSid, responseType, callback){
        //Assign default values
        responseType = responseType || "json";

        //validating required parameters
        if (recordingSid == null || recordingSid == undefined){
            return callback({errorMessage: "The parameter 'recordingSid' is a required parameter and cannot be null.", errorCode:-1},null,null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/transcriptions/recordingtranscription.{ResponseType}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType" : (null != responseType)? responseType: "json"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent" : "message360-api"
        };

        //prepare form data
        var _form = {
            "RecordingSid" : recordingSid
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
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * View Specific Transcriptions
     * @param {string} transcriptionSid    Required parameter: Unique Transcription ID
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createViewTranscription : function(transcriptionSid, responseType, callback){
        //Assign default values
        responseType = responseType || "json";

        //validating required parameters
        if (transcriptionSid == null || transcriptionSid == undefined){
            return callback({errorMessage: "The parameter 'transcriptionSid' is a required parameter and cannot be null.", errorCode:-1},null,null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/transcriptions/viewtranscription.{ResponseType}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType" : (null != responseType)? responseType: "json"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent" : "message360-api"
        };

        //prepare form data
        var _form = {
            "TranscriptionSid" : transcriptionSid
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
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Audio URL Transcriptions
     * @param {string} audioUrl    Required parameter: Audio url
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createAudioURLTranscription : function(audioUrl, responseType, callback){
        //Assign default values
        responseType = responseType || "json";

        //validating required parameters
        if (audioUrl == null || audioUrl == undefined){
            return callback({errorMessage: "The parameter 'audioUrl' is a required parameter and cannot be null.", errorCode:-1},null,null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/transcriptions/audiourltranscription.{ResponseType}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType" : (null != responseType)? responseType: "json"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent" : "message360-api"
        };

        //prepare form data
        var _form = {
            "AudioUrl" : audioUrl
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
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    }

};

module.exports = TranscriptionController;