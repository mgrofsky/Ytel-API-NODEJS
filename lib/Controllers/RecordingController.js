/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io ) on 10/21/2016
 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _APIHelper = require('../APIHelper');

var RecordingController = {

    /**
     * Delete Recording Record
     * @param {string} recordingSid    Required parameter: Unique Recording Sid to be delete
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createDeleteRecording : function(recordingSid, responseType, callback){
        //Assign default values
        responseType = responseType || "json";

        //validating required parameters
        if (recordingSid == null || recordingSid == undefined){
            return callback({errorMessage: "The parameter 'recordingSid' is a required parameter and cannot be null.", errorCode:-1},null,null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/recording/deleterecording.{ResponseType}";
        
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
     * View a specific Recording
     * @param {string} recordingSid    Required parameter: Search Recording sid
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createViewRecording : function(recordingSid, responseType, callback){
        //Assign default values
        responseType = responseType || "json";

        //validating required parameters
        if (recordingSid == null || recordingSid == undefined){
            return callback({errorMessage: "The parameter 'recordingSid' is a required parameter and cannot be null.", errorCode:-1},null,null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/recording/viewrecording.{ResponseType}";
        
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
     * List out Recordings
     * @param {int|null} page    Optional parameter: Which page of the overall response will be returned. Zero indexed
     * @param {int|null} pageSize    Optional parameter: Number of individual resources listed in the response per page
     * @param {string|null} dateCreated    Optional parameter: Example: 
     * @param {string|null} callSid    Optional parameter: Example: 
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createListRecording : function(page, pageSize, dateCreated, callSid, responseType, callback){
        //Assign default values
        responseType = responseType || "json";


        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/recording/listrecording.{ResponseType}";
        
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
            "DateCreated" : dateCreated,
            "CallSid" : callSid
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

module.exports = RecordingController;