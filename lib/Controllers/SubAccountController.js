/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io ) on 12/01/2016
 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _APIHelper = require('../APIHelper');

var SubAccountController = {

    /**
     * Create Sub account
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} firstname    Required parameter: Example: 
     *     {string} lastname    Required parameter: Example: 
     *     {string} email    Required parameter: Example: 
     *     {string|null} responseType    Optional parameter: ResponseType Format either json or xml
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createSubAccount: function (input, callback) {
        //Assign default values
        input = input || {};

        //validating required parameters
        if (input.firstname == null || input.firstname == undefined){
            return callback({errorMessage: "The property 'firstname' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.lastname == null || input.lastname == undefined){
            return callback({errorMessage: "The property 'lastname' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.email == null || input.email == undefined){
            return callback({errorMessage: "The property 'email' in the input object cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/user/createsubaccount.{ResponseType}";
        
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
            "firstname": input.firstname,
            "lastname": input.lastname,
            "email": input.email
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
     * Suspend or unsuspend
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} subaccountsid    Required parameter: Example: 
     *     {ActivateStatus} activate    Required parameter: Example: 
     *     {string|null} responseType    Optional parameter: Example: 
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createSuspendSubAccount: function (input, callback) {
        //Assign default values
        input = input || {};

        //validating required parameters
        if (input.subaccountsid == null || input.subaccountsid == undefined){
            return callback({errorMessage: "The property 'subaccountsid' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.activate == null || input.activate == undefined){
            return callback({errorMessage: "The property 'activate' in the input object cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/user/subaccountactivation.{ResponseType}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType": input.responseType
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent": "message360-api"
        };

        //prepare form data
        var _form = {
            "subaccountsid": input.subaccountsid,
            "activate": (input.activate != null)?input.activate:null
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
     * Delete or Merge Sub account
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} subaccountsid    Required parameter: Example: 
     *     {MergeNumberStatus} mergenumber    Required parameter: Example: 
     *     {string|null} responseType    Optional parameter: Response type format either json or xml
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createDeleteMergeSubAccount: function (input, callback) {
        //Assign default values
        input = input || {};

        //validating required parameters
        if (input.subaccountsid == null || input.subaccountsid == undefined){
            return callback({errorMessage: "The property 'subaccountsid' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.mergenumber == null || input.mergenumber == undefined){
            return callback({errorMessage: "The property 'mergenumber' in the input object cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/user/deletesubaccount.{ResponseType}";
        
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
            "subaccountsid": input.subaccountsid,
            "mergenumber": (input.mergenumber != null)?input.mergenumber:null
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

module.exports = SubAccountController;