
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

var SMSController = {
    /**
     * List All Inbound SMS
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     *     {int|null} page    Optional parameter: Which page of the overall response will be returned. Zero indexed
     *     {string|null} pagesize    Optional parameter: Number of individual resources listed in the response per page
     *     {string|null} from    Optional parameter: From Number to Inbound SMS
     *     {string|null} to    Optional parameter: To Number to get Inbound SMS
     *     {string|null} responseType    Optional parameter: Response type format xml or json
     *     {function} callback    Required parameter: Callback function in the form of function(error, response)
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}	Returns an instance of string type
     */
    createListInboundSMS: function createListInboundSMS(input, callback) {
        // Assign default values
        input = input || {};
        // prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();

        var _queryBuilder = _baseUri + "/sms/getInboundsms.{ResponseType}";

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
            "page": input.page,
            "pagesize": input.pagesize,
            "from": input.from,
            "to": input.to
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
                errorResponse = _BaseController.validateResponse(_context, "createListInboundSMS");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "createListInboundSMS");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * List All SMS
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     *     {int|null} page    Optional parameter: Which page of the overall response will be returned. Zero indexed
     *     {int|null} pagesize    Optional parameter: Number of individual resources listed in the response per page
     *     {string|null} from    Optional parameter: Messages sent from this number
     *     {string|null} to    Optional parameter: Messages sent to this number
     *     {string|null} datesent    Optional parameter: Only list SMS messages sent in the specified date range
     *     {string|null} responseType    Optional parameter: Response type format xml or json
     *     {function} callback    Required parameter: Callback function in the form of function(error, response)
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}	Returns an instance of string type
     */
    createListSMS: function createListSMS(input, callback) {
        // Assign default values
        input = input || {};
        // prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();

        var _queryBuilder = _baseUri + "/sms/listsms.{ResponseType}";

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
            "page": input.page,
            "pagesize": input.pagesize,
            "from": input.from,
            "to": input.to,
            "datesent": input.datesent
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
                errorResponse = _BaseController.validateResponse(_context, "createListSMS");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "createListSMS");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * Send an SMS from a message360 number
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     *     {int} fromcountrycode    Required parameter: From Country Code
     *     {string} from    Required parameter: SMS enabled Message360 number to send this message from
     *     {int} tocountrycode    Required parameter: To country code
     *     {string} to    Required parameter: Number to send the SMS to
     *     {string} body    Required parameter: Text Message To Send
     *     {HttpAction|null} method    Optional parameter: Specifies the HTTP method used to request the required URL once SMS sent.
     *     {string|null} messagestatuscallback    Optional parameter: URL that can be requested to receive notification when SMS has Sent. A set of default parameters will be sent here once the SMS is finished.
     *     {string|null} responseType    Optional parameter: Response type format xml or json
     *     {function} callback    Required parameter: Callback function in the form of function(error, response)
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}	Returns an instance of string type
     */
    createSendSMS: function createSendSMS(input, callback) {
        // Assign default values
        input = input || {};
        // Validating required parameters
        if (input.from === null || input.from === undefined) {
            return callback({errorMessage: "The property 'from' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.to === null || input.to === undefined) {
            return callback({errorMessage: "The property 'to' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.body === null || input.body === undefined) {
            return callback({errorMessage: "The property 'body' in the input object cannot be null.", errorCode: -1}, null, null);
        }
        // prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();

        var _queryBuilder = _baseUri + "/sms/sendsms.{ResponseType}";

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
            "fromcountrycode": input.fromcountrycode,
            "from": input.from,
            "tocountrycode": input.tocountrycode,
            "to": input.to,
            "body": input.body,
            "method": (input.method !== null) ? input.method : null,
            "messagestatuscallback": input.messagestatuscallback
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
                errorResponse = _BaseController.validateResponse(_context, "createSendSMS");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "createSendSMS");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * View a Particular SMS
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     *     {string} messagesid    Required parameter: Message sid
     *     {string|null} responseType    Optional parameter: Response type format xml or json
     *     {function} callback    Required parameter: Callback function in the form of function(error, response)
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}	Returns an instance of string type
     */
    createViewSMS: function createViewSMS(input, callback) {
        // Assign default values
        input = input || {};
        // Validating required parameters
        if (input.messagesid === null || input.messagesid === undefined) {
            return callback({errorMessage: "The property 'messagesid' in the input object cannot be null.", errorCode: -1}, null, null);
        }
        // prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();

        var _queryBuilder = _baseUri + "/sms/viewsms.{ResponseType}";

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
            "messagesid": input.messagesid
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
                errorResponse = _BaseController.validateResponse(_context, "createViewSMS");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "createViewSMS");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    }

};

module.exports = SMSController;
