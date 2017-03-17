
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

var SubAccountController = {
    /**
     * Create a sub user account under the parent account
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     *     {string} firstName    Required parameter: Sub account user first name
     *     {string} lastName    Required parameter: sub account user last name
     *     {string} email    Required parameter: Sub account email address
     *     {string|null} responseType    Optional parameter: Response type format xml or json
     *     {function} callback    Required parameter: Callback function in the form of function(error, response)
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}	Returns an instance of string type
     */
    createSubAccount: function createSubAccount(input, callback) {
        // Assign default values
        input = input || {};
        // Validating required parameters
        if (input.firstName === null || input.firstName === undefined) {
            return callback({errorMessage: "The property 'firstName' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.lastName === null || input.lastName === undefined) {
            return callback({errorMessage: "The property 'lastName' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.email === null || input.email === undefined) {
            return callback({errorMessage: "The property 'email' in the input object cannot be null.", errorCode: -1}, null, null);
        }
        // prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();

        var _queryBuilder = _baseUri + "/user/createsubaccount.{ResponseType}";

        // Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType": (input.responseType !== null) ? input.responseType : "json"
        });

        // validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        var _headers = {
            "user-agent": "message360-api"
        };

        // prepare form data
        var _form = {
            "FirstName": input.firstName,
            "LastName": input.lastName,
            "Email": input.email
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
                errorResponse = _BaseController.validateResponse(_context, "createSubAccount");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "createSubAccount");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * Suspend or unsuspend
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     *     {string} subAccountSID    Required parameter: The SubaccountSid to be activated or suspended
     *     {ActivateStatus} activate    Required parameter: 0 to suspend or 1 to activate
     *     {string|null} responseType    Optional parameter: Example:
     *     {function} callback    Required parameter: Callback function in the form of function(error, response)
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}	Returns an instance of string type
     */
    createSuspendSubAccount: function createSuspendSubAccount(input, callback) {
        // Assign default values
        input = input || {};
        // Validating required parameters
        if (input.subAccountSID === null || input.subAccountSID === undefined) {
            return callback({errorMessage: "The property 'subAccountSID' in the input object cannot be null.", errorCode: -1}, null, null);
        }
        // prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();

        var _queryBuilder = _baseUri + "/user/subaccountactivation.{ResponseType}";

        // Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType": input.responseType
        });

        // validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        var _headers = {
            "user-agent": "message360-api"
        };

        // prepare form data
        var _form = {
            "SubAccountSID": input.subAccountSID,
            "Activate": input.activate
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
                errorResponse = _BaseController.validateResponse(_context, "createSuspendSubAccount");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "createSuspendSubAccount");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * Delete sub account or merge numbers into parent
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     *     {string} subAccountSID    Required parameter: The SubaccountSid to be deleted
     *     {MergeNumberStatus} mergeNumber    Required parameter: 0 to delete or 1 to merge numbers to parent account.
     *     {string|null} responseType    Optional parameter: Response type format xml or json
     *     {function} callback    Required parameter: Callback function in the form of function(error, response)
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}	Returns an instance of string type
     */
    createDeleteSubAccount: function createDeleteSubAccount(input, callback) {
        // Assign default values
        input = input || {};
        // Validating required parameters
        if (input.subAccountSID === null || input.subAccountSID === undefined) {
            return callback({errorMessage: "The property 'subAccountSID' in the input object cannot be null.", errorCode: -1}, null, null);
        }
        // prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();

        var _queryBuilder = _baseUri + "/user/deletesubaccount.{ResponseType}";

        // Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType": (input.responseType !== null) ? input.responseType : "json"
        });

        // validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        // prepare headers
        var _headers = {
            "user-agent": "message360-api"
        };

        // prepare form data
        var _form = {
            "SubAccountSID": input.subAccountSID,
            "MergeNumber": input.mergeNumber
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
                errorResponse = _BaseController.validateResponse(_context, "createDeleteSubAccount");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "createDeleteSubAccount");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    }

};

module.exports = SubAccountController;
