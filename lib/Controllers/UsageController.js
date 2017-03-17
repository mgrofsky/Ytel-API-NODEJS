
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

var UsageController = {
    /**
     * Get all usage 
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     *     {ProductCode} productCode    Required parameter: Product Code
     *     {string} startDate    Required parameter: Start Usage Date
     *     {string} endDate    Required parameter: End Usage Date
     *     {string|null} responseType    Optional parameter: Response type format xml or json
     *     {function} callback    Required parameter: Callback function in the form of function(error, response)
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}	Returns an instance of string type
     */
    createListUsage: function createListUsage(input, callback) {
        // Assign default values
        input = input || {};
        // prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();

        var _queryBuilder = _baseUri + "/usage/listusage.{ResponseType}";

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
            "ProductCode": input.productCode,
            "startDate": input.startDate,
            "endDate": input.endDate
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
                errorResponse = _BaseController.validateResponse(_context, "createListUsage");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "createListUsage");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    }

};

module.exports = UsageController;
