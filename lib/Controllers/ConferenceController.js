/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io ) on 10/18/2016
 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _APIHelper = require('../APIHelper');

var ConferenceController = {

    /**
     * View Participant
     * @param {string} conferenceSid    Required parameter: unique conference sid
     * @param {string} participantSid    Required parameter: Example: 
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createViewParticipant : function(conferenceSid, participantSid, responseType, callback){
        //Assign default values
        responseType = responseType || "json";

        //validating required parameters
        if (conferenceSid == null || conferenceSid == undefined){
            return callback({errorMessage: "The parameter 'conferenceSid' is a required parameter and cannot be null.", errorCode:-1},null,null);
        } else if (participantSid == null || participantSid == undefined){
            return callback({errorMessage: "The parameter 'participantSid' is a required parameter and cannot be null.", errorCode:-1},null,null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/conferences/viewparticipant.{ResponseType}";
        
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
            "ConferenceSid" : conferenceSid,
            "ParticipantSid" : participantSid
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
     * List Participant
     * @param {string} conferenceSid    Required parameter: unique conference sid
     * @param {int|null} page    Optional parameter: page number
     * @param {int|null} pagesize    Optional parameter: Example: 
     * @param {bool|null} muted    Optional parameter: Example: 
     * @param {bool|null} deaf    Optional parameter: Example: 
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createListParticipant : function(conferenceSid, page, pagesize, muted, deaf, responseType, callback){
        //Assign default values
        responseType = responseType || "json";

        //validating required parameters
        if (conferenceSid == null || conferenceSid == undefined){
            return callback({errorMessage: "The parameter 'conferenceSid' is a required parameter and cannot be null.", errorCode:-1},null,null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/conferences/listparticipant.{ResponseType}";
        
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
            "ConferenceSid" : conferenceSid,
            "Page" : page,
            "Pagesize" : pagesize,
            "Muted" : muted,
            "Deaf" : deaf
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
     * Add Participant in conference 
     * @param {string} conferencesid    Required parameter: Unique Conference Sid
     * @param {string} participantnumber    Required parameter: Particiant Number
     * @param {int} tocountrycode    Required parameter: Example: 
     * @param {bool|null} muted    Optional parameter: Example: 
     * @param {bool|null} deaf    Optional parameter: Example: 
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    addParticipant : function(conferencesid, participantnumber, tocountrycode, muted, deaf, responseType, callback){
        //Assign default values
        responseType = responseType || "json";

        //validating required parameters
        if (conferencesid == null || conferencesid == undefined){
            return callback({errorMessage: "The parameter 'conferencesid' is a required parameter and cannot be null.", errorCode:-1},null,null);
        } else if (participantnumber == null || participantnumber == undefined){
            return callback({errorMessage: "The parameter 'participantnumber' is a required parameter and cannot be null.", errorCode:-1},null,null);
        } else if (tocountrycode == null || tocountrycode == undefined){
            return callback({errorMessage: "The parameter 'tocountrycode' is a required parameter and cannot be null.", errorCode:-1},null,null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/conferences/addParticipant.{ResponseType}";
        
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
            "conferencesid" : conferencesid,
            "participantnumber" : participantnumber,
            "tocountrycode" : tocountrycode,
            "muted" : muted,
            "deaf" : deaf
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
     * View Conference
     * @param {string} conferencesid    Required parameter: The unique identifier of each conference resource
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createViewConference : function(conferencesid, responseType, callback){
        //Assign default values
        responseType = responseType || "json";

        //validating required parameters
        if (conferencesid == null || conferencesid == undefined){
            return callback({errorMessage: "The parameter 'conferencesid' is a required parameter and cannot be null.", errorCode:-1},null,null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/conferences/viewconference.{ResponseType}";
        
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
            "conferencesid" : conferencesid
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
     * List Conference
     * @param {int|null} page    Optional parameter: Which page of the overall response will be returned. Zero indexed
     * @param {int|null} pageSize    Optional parameter: Number of individual resources listed in the response per page
     * @param {string|null} friendlyName    Optional parameter: Only return conferences with the specified FriendlyName
     * @param {InterruptedCallStatusEnum|null} status    Optional parameter: Example: 
     * @param {string|null} dateCreated    Optional parameter: Example: 
     * @param {string|null} dateUpdated    Optional parameter: Example: 
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createListConference : function(page, pageSize, friendlyName, status, dateCreated, dateUpdated, responseType, callback){
        //Assign default values
        responseType = responseType || "json";


        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/conferences/listconference.{ResponseType}";
        
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
            "FriendlyName" : friendlyName,
            "Status" : (status != null)?status:null,
            "DateCreated" : dateCreated,
            "DateUpdated" : dateUpdated
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

module.exports = ConferenceController;