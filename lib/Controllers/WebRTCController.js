
/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
 */

var _request = require("../Http/Client/RequestClient");
var _configuration = require("../configuration");
var _servers = require("../Servers");
var _APIHelper = require("../APIHelper");
var _BaseController = require("./BaseController");

var WebRTCController = {
    /**
     * TODO: type endpoint description here
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     *     {string} accountSid    Required parameter: Your message360 Account SID
     *     {string} authToken    Required parameter: Your message360 Token
     *     {function} callback    Required parameter: Callback function in the form of function(error, response)
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}	Returns an instance of string type
     */
    createCheckFunds: function createCheckFunds(input, callback) {
        // Assign default values
        input = input || {};
        // Validating required parameters
        if (input.accountSid === null || input.accountSid === undefined) {
            return callback({errorMessage: "The property 'accountSid' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.authToken === null || input.authToken === undefined) {
            return callback({errorMessage: "The property 'authToken' in the input object cannot be null.", errorCode: -1}, null, null);
        }
        // prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();

        var _queryBuilder = _baseUri + "/webrtc/checkFunds.json";

        // validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        var _headers = {
            "user-agent": "message360-api"
        };

        // prepare form data
        var _form = {
            "account_sid": input.accountSid,
            "auth_token": input.authToken
        };

        // Remove null values
        _APIHelper.cleanObject(_form);

        // Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            form: _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };

        // Build the response processing.
        var cb = function cb(_error, _response, _context) {
            var errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, "createCheckFunds");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "createCheckFunds");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * message360 webrtc
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     *     {string} accountSid    Required parameter: Your message360 Account SID
     *     {string} authToken    Required parameter: Your message360 Token
     *     {string} username    Required parameter: WebRTC username authentication
     *     {string} password    Required parameter: WebRTC password authentication
     *     {function} callback    Required parameter: Callback function in the form of function(error, response)
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}	Returns an instance of string type
     */
    createToken: function createToken(input, callback) {
        // Assign default values
        input = input || {};
        // Validating required parameters
        if (input.accountSid === null || input.accountSid === undefined) {
            return callback({errorMessage: "The property 'accountSid' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.authToken === null || input.authToken === undefined) {
            return callback({errorMessage: "The property 'authToken' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.username === null || input.username === undefined) {
            return callback({errorMessage: "The property 'username' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.password === null || input.password === undefined) {
            return callback({errorMessage: "The property 'password' in the input object cannot be null.", errorCode: -1}, null, null);
        }
        // prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();

        var _queryBuilder = _baseUri + "/webrtc/agentLogin.json";

        // validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        var _headers = {
            "user-agent": "message360-api"
        };

        // prepare form data
        var _form = {
            "account_sid": input.accountSid,
            "auth_token": input.authToken,
            "username": input.username,
            "password": input.password
        };

        // Remove null values
        _APIHelper.cleanObject(_form);

        // Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            form: _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };

        // Build the response processing.
        var cb = function cb(_error, _response, _context) {
            var errorResponse;
            if (_error) {
                errorResponse = _BaseController.validateResponse(_context, "createToken");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "createToken");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    }

};

module.exports = WebRTCController;
