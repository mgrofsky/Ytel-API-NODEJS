/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
 */


var BaseController = {

    /**
     * Global error handling
     * @param	{HttpContext}	_context		HttpContext containing request and response objects
	 * @param	{string}		endpName		Name of the endpoint called
     * @return	{function}		callback		Callback function in the form of function(error, response, context)
     */
    validateResponse(_context, endpName) {
        var errorObj = {
            errorMessage: "",
            errorCode: "",
            errorResponse: _context.response.body
        };
        var returnObj = {
            error: errorObj,
            response: null,
            context: _context
        };

        returnObj.error.errorMessage = "HTTP Response Not OK";
        returnObj.error.errorCode = _context.response.statusCode;

        return returnObj;
    }
};

module.exports = BaseController;
