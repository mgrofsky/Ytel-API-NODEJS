/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io ) on 12/08/2016
 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _servers = require('../Servers'),
    _APIHelper = require('../APIHelper');

var WebRTCController = {

    /**
     * message360 webrtc
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} accountSid    Required parameter: Your message360 Account SID
     *     {string} authToken    Required parameter: Your message360 Token
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {void}
     */
    createToken: function (input, callback) {
        //Assign default values
        input = input || {};

        //validating required parameters
        if (input.accountSid == null || input.accountSid == undefined){
            return callback({errorMessage: "The property 'accountSid' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.authToken == null || input.authToken == undefined){
            return callback({errorMessage: "The property 'authToken' in the input object cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/webrtc/createToken.json";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent": "message360-api"
        };

        //prepare form data
        var _form = {
            "account_sid": input.accountSid,
            "auth_token": input.authToken
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
                callback(null,null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
    },


    /**
     * TODO: type endpoint description here
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} accountSid    Required parameter: Your message360 Account SID
     *     {string} authToken    Required parameter: Your message360 Token
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {void}
     */
    createCheckFunds: function (input, callback) {
        //Assign default values
        input = input || {};

        //validating required parameters
        if (input.accountSid == null || input.accountSid == undefined){
            return callback({errorMessage: "The property 'accountSid' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.authToken == null || input.authToken == undefined){
            return callback({errorMessage: "The property 'authToken' in the input object cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/webrtc/checkFunds.json";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent": "message360-api"
        };

        //prepare form data
        var _form = {
            "account_sid": input.accountSid,
            "auth_token": input.authToken
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
                callback(null,null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Authenticate a message360 number for use
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} phoneNumber    Required parameter: Phone number to authenticate for use
     *     {string} accountSid    Required parameter: Your message360 Account SID
     *     {string} authToken    Required parameter: Your message360 token
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {void}
     */
    createAuthenticateNumber: function (input, callback) {
        //Assign default values
        input = input || {};

        //validating required parameters
        if (input.phoneNumber == null || input.phoneNumber == undefined){
            return callback({errorMessage: "The property 'phoneNumber' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.accountSid == null || input.accountSid == undefined){
            return callback({errorMessage: "The property 'accountSid' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.authToken == null || input.authToken == undefined){
            return callback({errorMessage: "The property 'authToken' in the input object cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();
        
        var _queryBuilder = _baseUri + "/webrtc/authenticateNumber.json";
        
        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent": "message360-api"
        };

        //prepare form data
        var _form = {
            "phone_number": input.phoneNumber,
            "account_sid": input.accountSid,
            "auth_token": input.authToken
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
                callback(null,null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
    }

};

module.exports = WebRTCController;