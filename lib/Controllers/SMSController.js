/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io ) on 10/15/2016
 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _APIHelper = require('../APIHelper');

var SMSController = {

    /**
     * Send an SMS from a message360 number
     * @param {int} fromcountrycode    Required parameter: From Country Code
     * @param {string} from    Required parameter: SMS enabled Message360 number to send this message from
     * @param {int} tocountrycode    Required parameter: To country code
     * @param {string} to    Required parameter: Number to send the SMS to
     * @param {string} body    Required parameter: Text Message To Send
     * @param {HttpMethodEnum|null} method    Optional parameter: Specifies the HTTP method used to request the required URL once SMS sent.
     * @param {string|null} messagestatuscallback    Optional parameter: URL that can be requested to receive notification when SMS has Sent. A set of default parameters will be sent here once the SMS is finished.
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createSendSMS : function(fromcountrycode, from, tocountrycode, to, body, method, messagestatuscallback, responseType, callback){
        //Assign default values
        fromcountrycode = fromcountrycode || 1;
        tocountrycode = tocountrycode || 1;
        responseType = responseType || "json";

        //validating required parameters
        if (from == null || from == undefined){
            return callback({errorMessage: "The parameter 'from' is a required parameter and cannot be null.", errorCode:-1},null,null);
        } else if (to == null || to == undefined){
            return callback({errorMessage: "The parameter 'to' is a required parameter and cannot be null.", errorCode:-1},null,null);
        } else if (body == null || body == undefined){
            return callback({errorMessage: "The parameter 'body' is a required parameter and cannot be null.", errorCode:-1},null,null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/sms/sendsms.{ResponseType}";
        
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
            "fromcountrycode" : fromcountrycode,
            "from" : from,
            "tocountrycode" : tocountrycode,
            "to" : to,
            "body" : body,
            "method" : (method != null)?method:null,
            "messagestatuscallback" : messagestatuscallback
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
     * View Particular SMS
     * @param {string} messagesid    Required parameter: Message sid
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createViewSMS : function(messagesid, responseType, callback){
        //Assign default values
        responseType = responseType || "json";

        //validating required parameters
        if (messagesid == null || messagesid == undefined){
            return callback({errorMessage: "The parameter 'messagesid' is a required parameter and cannot be null.", errorCode:-1},null,null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/sms/viewsms.{ResponseType}";
        
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
            "messagesid" : messagesid
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
     * List All SMS
     * @param {int|null} page    Optional parameter: Which page of the overall response will be returned. Zero indexed
     * @param {int|null} pagesize    Optional parameter: Number of individual resources listed in the response per page
     * @param {string|null} from    Optional parameter: Messages sent from this number
     * @param {string|null} to    Optional parameter: Messages sent to this number
     * @param {string|null} datesent    Optional parameter: Only list SMS messages sent in the specified date range
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createListSMS : function(page, pagesize, from, to, datesent, responseType, callback){
        //Assign default values
        responseType = responseType || "json";


        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/sms/listsms.{ResponseType}";
        
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
            "page" : page,
            "pagesize" : pagesize,
            "from" : from,
            "to" : to,
            "datesent" : datesent
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
     * List All Inbound SMS
     * @param {int|null} page    Optional parameter: Which page of the overall response will be returned. Zero indexed
     * @param {string|null} pagesize    Optional parameter: Number of individual resources listed in the response per page
     * @param {string|null} from    Optional parameter: From Number to Inbound SMS
     * @param {string|null} to    Optional parameter: To Number to get Inbound SMS
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createListInboundSMS : function(page, pagesize, from, to, responseType, callback){
        //Assign default values
        responseType = responseType || "json";


        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/sms/getInboundsms.{ResponseType}";
        
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
            "page" : page,
            "pagesize" : pagesize,
            "from" : from,
            "to" : to
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

module.exports = SMSController;