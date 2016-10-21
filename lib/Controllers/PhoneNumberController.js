/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io ) on 10/21/2016
 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _APIHelper = require('../APIHelper');

var PhoneNumberController = {

    /**
     * Available Phone Number
     * @param {string} numberType    Required parameter: Number type either SMS,Voice or all
     * @param {string} areaCode    Required parameter: Phone Number Area Code
     * @param {int|null} pageSize    Optional parameter: Page Size
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createAvailablePhoneNumber : function(numberType, areaCode, pageSize, responseType, callback){
        //Assign default values
        responseType = responseType || "json";

        //validating required parameters
        if (numberType == null || numberType == undefined){
            return callback({errorMessage: "The parameter 'numberType' is a required parameter and cannot be null.", errorCode:-1},null,null);
        } else if (areaCode == null || areaCode == undefined){
            return callback({errorMessage: "The parameter 'areaCode' is a required parameter and cannot be null.", errorCode:-1},null,null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/incomingphone/availablenumber.{ResponseType}";
        
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
            "NumberType" : numberType,
            "AreaCode" : areaCode,
            "PageSize" : pageSize
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
     * List Account's Phone number details
     * @param {int|null} page    Optional parameter: Which page of the overall response will be returned. Zero indexed
     * @param {int|null} pageSize    Optional parameter: Number of individual resources listed in the response per page
     * @param {string|null} numberType    Optional parameter: Example: 
     * @param {string|null} friendlyName    Optional parameter: Example: 
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createListNumber : function(page, pageSize, numberType, friendlyName, responseType, callback){
        //Assign default values
        responseType = responseType || "json";


        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/incomingphone/listnumber.{ResponseType}";
        
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
            "NumberType" : numberType,
            "FriendlyName" : friendlyName
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
     * Release number from account
     * @param {string} phoneNumber    Required parameter: Phone number to be relase
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createReleaseNumber : function(phoneNumber, responseType, callback){
        //Assign default values
        responseType = responseType || "json";

        //validating required parameters
        if (phoneNumber == null || phoneNumber == undefined){
            return callback({errorMessage: "The parameter 'phoneNumber' is a required parameter and cannot be null.", errorCode:-1},null,null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/incomingphone/releasenumber.{ResponseType}";
        
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
            "PhoneNumber" : phoneNumber
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
     * Buy Phone Number 
     * @param {string} phoneNumber    Required parameter: Phone number to be purchase
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createBuyNumber : function(phoneNumber, responseType, callback){
        //Assign default values
        responseType = responseType || "json";

        //validating required parameters
        if (phoneNumber == null || phoneNumber == undefined){
            return callback({errorMessage: "The parameter 'phoneNumber' is a required parameter and cannot be null.", errorCode:-1},null,null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/incomingphone/buynumber.{ResponseType}";
        
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
            "PhoneNumber" : phoneNumber
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
     * Get Phone Number Details
     * @param {string} phoneNumber    Required parameter: Get Phone number Detail
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createViewNumberDetails : function(phoneNumber, responseType, callback){
        //Assign default values
        responseType = responseType || "json";

        //validating required parameters
        if (phoneNumber == null || phoneNumber == undefined){
            return callback({errorMessage: "The parameter 'phoneNumber' is a required parameter and cannot be null.", errorCode:-1},null,null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/incomingphone/viewnumber.{ResponseType}";
        
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
            "PhoneNumber" : phoneNumber
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
     * Update Phone Number Details
     * @param {string} phoneNumber    Required parameter: Example: 
     * @param {string|null} friendlyName    Optional parameter: Example: 
     * @param {string|null} voiceUrl    Optional parameter: URL requested once the call connects
     * @param {HttpMethod|null} voiceMethod    Optional parameter: Example: 
     * @param {string|null} voiceFallbackUrl    Optional parameter: URL requested if the voice URL is not available
     * @param {HttpMethod|null} voiceFallbackMethod    Optional parameter: Example: 
     * @param {string|null} hangupCallback    Optional parameter: Example: 
     * @param {HttpMethod|null} hangupCallbackMethod    Optional parameter: Example: 
     * @param {string|null} heartbeatUrl    Optional parameter: URL requested once the call connects
     * @param {HttpMethod|null} heartbeatMethod    Optional parameter: URL that can be requested every 60 seconds during the call to notify of elapsed time
     * @param {string|null} smsUrl    Optional parameter: URL requested when an SMS is received
     * @param {HttpMethod|null} smsMethod    Optional parameter: Example: 
     * @param {string|null} smsFallbackUrl    Optional parameter: URL requested once the call connects
     * @param {HttpMethod|null} smsFallbackMethod    Optional parameter: URL requested if the sms URL is not available
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    updatePhoneNumber : function(phoneNumber, friendlyName, voiceUrl, voiceMethod, voiceFallbackUrl, voiceFallbackMethod, hangupCallback, hangupCallbackMethod, heartbeatUrl, heartbeatMethod, smsUrl, smsMethod, smsFallbackUrl, smsFallbackMethod, responseType, callback){
        //Assign default values
        responseType = responseType || "json";

        //validating required parameters
        if (phoneNumber == null || phoneNumber == undefined){
            return callback({errorMessage: "The parameter 'phoneNumber' is a required parameter and cannot be null.", errorCode:-1},null,null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/incomingphone/updatenumber.{ResponseType}";
        
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
            "PhoneNumber" : phoneNumber,
            "FriendlyName" : friendlyName,
            "VoiceUrl" : voiceUrl,
            "VoiceMethod" : (voiceMethod != null)?voiceMethod:null,
            "VoiceFallbackUrl" : voiceFallbackUrl,
            "VoiceFallbackMethod" : (voiceFallbackMethod != null)?voiceFallbackMethod:null,
            "HangupCallback" : hangupCallback,
            "HangupCallbackMethod" : (hangupCallbackMethod != null)?hangupCallbackMethod:null,
            "HeartbeatUrl" : heartbeatUrl,
            "HeartbeatMethod" : (heartbeatMethod != null)?heartbeatMethod:null,
            "SmsUrl" : smsUrl,
            "SmsMethod" : (smsMethod != null)?smsMethod:null,
            "SmsFallbackUrl" : smsFallbackUrl,
            "SmsFallbackMethod" : (smsFallbackMethod != null)?smsFallbackMethod:null
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

module.exports = PhoneNumberController;