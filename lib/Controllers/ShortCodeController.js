
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

var ShortCodeController = {
    /**
     * View a Shared ShortCode Template
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     *     {uuid|string} templateid    Required parameter: The unique identifier for a template object
     *     {string} responseType    Required parameter: Response type format xml or json
     *     {function} callback    Required parameter: Callback function in the form of function(error, response)
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}	Returns an instance of string type
     */
    createViewTemplate: function createViewTemplate(input, callback) {
        // Assign default values
        input = input || {};
        // Validating required parameters
        if (input.templateid === null || input.templateid === undefined) {
            return callback({errorMessage: "The property 'templateid' in the input object cannot be null.", errorCode: -1}, null, null);
        }
        // prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();

        var _queryBuilder = _baseUri + "/template/view.{ResponseType}";

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
            "templateid": input.templateid
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
                errorResponse = _BaseController.validateResponse(_context, "createViewTemplate");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "createViewTemplate");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * Send an SMS from a message360 ShortCode
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     *     {string} shortcode    Required parameter: The Short Code number that is the sender of this message
     *     {string} tocountrycode    Required parameter: The country code for sending this message
     *     {string} to    Required parameter: A valid 10-digit number that should receive the message+
     *     {uuid|string} templateid    Required parameter: The unique identifier for the template used for the message
     *     {string|null} method    Optional parameter: Specifies the HTTP method used to request the required URL once the Short Code message is sent.
     *     {string|null} messageStatusCallback    Optional parameter: URL that can be requested to receive notification when Short Code message was sent.
     *     {string|null} responseType    Optional parameter: Response type format xml or json
     *     {Dictionary} fieldParameters    Optional parameter: Additional optional form parameters are supported by this endpoint
     *     {function} callback    Required parameter: Callback function in the form of function(error, response)
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}	Returns an instance of string type
     */
    createSendShortCode: function createSendShortCode(input, fieldParameters, callback) {
        // Assign default values
        input = input || {};
        fieldParameters = fieldParameters || null;
        // Validating required parameters
        if (input.shortcode === null || input.shortcode === undefined) {
            return callback({errorMessage: "The property 'shortcode' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.to === null || input.to === undefined) {
            return callback({errorMessage: "The property 'to' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.templateid === null || input.templateid === undefined) {
            return callback({errorMessage: "The property 'templateid' in the input object cannot be null.", errorCode: -1}, null, null);
        }
        // prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();

        var _queryBuilder = _baseUri + "/shortcode/sendsms.{ResponseType}";

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
            "shortcode": input.shortcode,
            "tocountrycode": input.tocountrycode,
            "to": input.to,
            "templateid": input.templateid,
            "Method": (input.method !== null) ? input.method : "GET",
            "MessageStatusCallback": input.messageStatusCallback
        };

        // prepare optional form fields
        _APIHelper.merge(_form, fieldParameters)

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
                errorResponse = _BaseController.validateResponse(_context, "createSendShortCode");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "createSendShortCode");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * List All Inbound ShortCode
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     *     {int|null} page    Optional parameter: Which page of the overall response will be returned. Zero indexed
     *     {int|null} pagesize    Optional parameter: Number of individual resources listed in the response per page
     *     {string|null} from    Optional parameter: From Number to Inbound ShortCode
     *     {string|null} shortcode    Optional parameter: Only list messages sent to this Short Code
     *     {string|null} dateReceived    Optional parameter: Only list messages sent with the specified date
     *     {string|null} responseType    Optional parameter: Response type format xml or json
     *     {function} callback    Required parameter: Callback function in the form of function(error, response)
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}	Returns an instance of string type
     */
    createListInboundShortCode: function createListInboundShortCode(input, callback) {
        // Assign default values
        input = input || {};
        // prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();

        var _queryBuilder = _baseUri + "/shortcode/getinboundsms.{ResponseType}";

        // Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType": (input.responseType !== null) ? input.responseType : "json"
        });

        // Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "DateReceived": input.dateReceived
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
            "pagesize": (input.pagesize !== null) ? input.pagesize : 10,
            "from": input.from,
            "Shortcode": input.shortcode
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
                errorResponse = _BaseController.validateResponse(_context, "createListInboundShortCode");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "createListInboundShortCode");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * List ShortCode Messages
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
    createListShortCode: function createListShortCode(input, callback) {
        // Assign default values
        input = input || {};
        // prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();

        var _queryBuilder = _baseUri + "/shortcode/listsms.{ResponseType}";

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
            "pagesize": (input.pagesize !== null) ? input.pagesize : 10,
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
                errorResponse = _BaseController.validateResponse(_context, "createListShortCode");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "createListShortCode");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * List Shortcode Templates by Type
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     *     {string|null} type    Optional parameter: The type (category) of template Valid values: marketing, authorization
     *     {int|null} page    Optional parameter: The page count to retrieve from the total results in the collection. Page indexing starts at 1.
     *     {int|null} pagesize    Optional parameter: The count of objects to return per page.
     *     {string|null} responseType    Optional parameter: Response type format xml or json
     *     {function} callback    Required parameter: Callback function in the form of function(error, response)
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}	Returns an instance of string type
     */
    createListTemplates: function createListTemplates(input, callback) {
        // Assign default values
        input = input || {};
        // prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();

        var _queryBuilder = _baseUri + "/template/lists.{ResponseType}";

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
            "type": (input.type !== null) ? input.type : "authorization",
            "page": input.page,
            "pagesize": (input.pagesize !== null) ? input.pagesize : 10
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
                errorResponse = _BaseController.validateResponse(_context, "createListTemplates");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "createListTemplates");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    },

    /**
     * View a ShortCode Message
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
    createViewShortCode: function createViewShortCode(input, callback) {
        // Assign default values
        input = input || {};
        // Validating required parameters
        if (input.messagesid === null || input.messagesid === undefined) {
            return callback({errorMessage: "The property 'messagesid' in the input object cannot be null.", errorCode: -1}, null, null);
        }
        // prepare query string for API call;
        var _baseUri = _configuration.getBaseUri();

        var _queryBuilder = _baseUri + "/shortcode/viewsms.{ResponseType}";

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
                errorResponse = _BaseController.validateResponse(_context, "createViewShortCode");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body, _context);
            } else {
                errorResponse = _BaseController.validateResponse(_context, "createViewShortCode");
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    }

};

module.exports = ShortCodeController;
