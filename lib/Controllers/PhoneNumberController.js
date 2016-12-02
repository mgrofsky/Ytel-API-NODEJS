/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io ) on 12/02/2016
 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _APIHelper = require('../APIHelper');

var PhoneNumberController = {

    /**
     * Update Phone Number Details
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} phoneNumber    Required parameter: Example: 
     *     {string|null} friendlyName    Optional parameter: Example: 
     *     {string|null} voiceUrl    Optional parameter: URL requested once the call connects
     *     {HttpAction|null} voiceMethod    Optional parameter: Example: 
     *     {string|null} voiceFallbackUrl    Optional parameter: URL requested if the voice URL is not available
     *     {HttpAction|null} voiceFallbackMethod    Optional parameter: Example: 
     *     {string|null} hangupCallback    Optional parameter: Example: 
     *     {HttpAction|null} hangupCallbackMethod    Optional parameter: Example: 
     *     {string|null} heartbeatUrl    Optional parameter: URL requested once the call connects
     *     {HttpAction|null} heartbeatMethod    Optional parameter: URL that can be requested every 60 seconds during the call to notify of elapsed time
     *     {string|null} smsUrl    Optional parameter: URL requested when an SMS is received
     *     {HttpAction|null} smsMethod    Optional parameter: Example: 
     *     {string|null} smsFallbackUrl    Optional parameter: URL requested once the call connects
     *     {HttpAction|null} smsFallbackMethod    Optional parameter: URL requested if the sms URL is not available
     *     {string|null} responseType    Optional parameter: Response type format xml or json
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    updatePhoneNumber: function (input, callback) {
        //Assign default values
        input = input || {};

        //validating required parameters
        if (input.phoneNumber == null || input.phoneNumber == undefined){
            return callback({errorMessage: "The property 'phoneNumber' in the input object cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/incomingphone/updatenumber.{ResponseType}";
        
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
            "PhoneNumber": input.phoneNumber,
            "FriendlyName": input.friendlyName,
            "VoiceUrl": input.voiceUrl,
            "VoiceMethod": (input.voiceMethod != null)?input.voiceMethod:null,
            "VoiceFallbackUrl": input.voiceFallbackUrl,
            "VoiceFallbackMethod": (input.voiceFallbackMethod != null)?input.voiceFallbackMethod:null,
            "HangupCallback": input.hangupCallback,
            "HangupCallbackMethod": (input.hangupCallbackMethod != null)?input.hangupCallbackMethod:null,
            "HeartbeatUrl": input.heartbeatUrl,
            "HeartbeatMethod": (input.heartbeatMethod != null)?input.heartbeatMethod:null,
            "SmsUrl": input.smsUrl,
            "SmsMethod": (input.smsMethod != null)?input.smsMethod:null,
            "SmsFallbackUrl": input.smsFallbackUrl,
            "SmsFallbackMethod": (input.smsFallbackMethod != null)?input.smsFallbackMethod:null
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
     * Buy Phone Number 
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} phoneNumber    Required parameter: Phone number to be purchase
     *     {string|null} responseType    Optional parameter: Response type format xml or json
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createBuyNumber: function (input, callback) {
        //Assign default values
        input = input || {};

        //validating required parameters
        if (input.phoneNumber == null || input.phoneNumber == undefined){
            return callback({errorMessage: "The property 'phoneNumber' in the input object cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/incomingphone/buynumber.{ResponseType}";
        
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
            "PhoneNumber": input.phoneNumber
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
     * Release number from account
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} phoneNumber    Required parameter: Phone number to be relase
     *     {string|null} responseType    Optional parameter: Response type format xml or json
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createReleaseNumber: function (input, callback) {
        //Assign default values
        input = input || {};

        //validating required parameters
        if (input.phoneNumber == null || input.phoneNumber == undefined){
            return callback({errorMessage: "The property 'phoneNumber' in the input object cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/incomingphone/releasenumber.{ResponseType}";
        
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
            "PhoneNumber": input.phoneNumber
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
     * Get Phone Number Details
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} phoneNumber    Required parameter: Get Phone number Detail
     *     {string|null} responseType    Optional parameter: Response type format xml or json
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createViewNumberDetails: function (input, callback) {
        //Assign default values
        input = input || {};

        //validating required parameters
        if (input.phoneNumber == null || input.phoneNumber == undefined){
            return callback({errorMessage: "The property 'phoneNumber' in the input object cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/incomingphone/viewnumber.{ResponseType}";
        
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
            "PhoneNumber": input.phoneNumber
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
     * List Account's Phone number details
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {int|null} page    Optional parameter: Which page of the overall response will be returned. Zero indexed
     *     {int|null} pageSize    Optional parameter: Number of individual resources listed in the response per page
     *     {NumberType|null} numberType    Optional parameter: Example: 
     *     {string|null} friendlyName    Optional parameter: Example: 
     *     {string|null} responseType    Optional parameter: Response type format xml or json
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createListNumber: function (input, callback) {
        //Assign default values
        input = input || {};


        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/incomingphone/listnumber.{ResponseType}";
        
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
            "NumberType": (input.numberType != null)?input.numberType:null,
            "FriendlyName": input.friendlyName
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
     * Available Phone Number
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {NumberType} numberType    Required parameter: Number type either SMS,Voice or all
     *     {string} areaCode    Required parameter: Phone Number Area Code
     *     {int|null} pageSize    Optional parameter: Page Size
     *     {string|null} responseType    Optional parameter: Response type format xml or json
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createAvailablePhoneNumber: function (input, callback) {
        //Assign default values
        input = input || {};

        //validating required parameters
        if (input.numberType == null || input.numberType == undefined){
            return callback({errorMessage: "The property 'numberType' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.areaCode == null || input.areaCode == undefined){
            return callback({errorMessage: "The property 'areaCode' in the input object cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/incomingphone/availablenumber.{ResponseType}";
        
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
            "NumberType": (input.numberType != null)?input.numberType:null,
            "AreaCode": input.areaCode,
            "PageSize": input.pageSize
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

module.exports = PhoneNumberController;