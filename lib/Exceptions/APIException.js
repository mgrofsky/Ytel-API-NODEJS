/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
 */

 /**
 * Creates an instance of APIException
 *
 * @constructor
 * @param	{string}		reason			The message for error cause
 * @param	{HttpContext}	_context		HttpContext containing request and response objects
 */
var APIException = function APIException(reason, _context) {
    this.reason = reason;
    this.context = _context;
};

APIException.prototype.constructor = APIException;

/**
 * Represents the message for error cause
 *
 * @return {string}  Returns {reason} property
 */
APIException.prototype.getReason = function getReason() {
    return this.reason;
};

/**
 * Setter for reason
 *
 * @param  {string} value  Sets the value of value property
 * @return {void}   Does not return anything
 */
APIException.prototype.setReason = function setReason(value) {
    this.reason = value;
};

/**
 * Represents the HttpContext containing request and response objects
 *
 * @return {object}  Returns {context} property
 */
APIException.prototype.getContext = function getContext() {
    return this.context;
};

/**
 * Setter for context
 *
 * @param  {object} value  Sets the value of context property
 * @return {void}   Does not return anything
 */
APIException.prototype.setContext = function setContext(value) {
    this.context = value;
};

module.exports = APIException;
