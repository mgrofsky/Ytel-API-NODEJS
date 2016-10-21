/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io ) on 10/21/2016
 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _APIHelper = require('../APIHelper');

var AccountController = {

    /**
     * Display Account Description
     * @param {string} date    Required parameter: Example: 
     * @param {string|null} responseType    Optional parameter: Response type format xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createViewAccount : function(date, responseType, callback){
        //Assign default values
        responseType = responseType || "json";

        //validating required parameters
        if (date == null || date == undefined){
            return callback({errorMessage: "The parameter 'date' is a required parameter and cannot be null.", errorCode:-1},null,null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/accounts/viewaccount.{ResponseType}";
        
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
            "date" : date
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

module.exports = AccountController;