/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

 /**
 * Creates an instance of APIException
 */
class APIException {
    /**
     * @constructor
     * @param   {string}         reason       The message for error cause
     * @param   {HttpContext}   context      HttpContext containing request and response objects
     */
    constructor(reason, context) {
        this.reason = reason;
        this.context = context;
    }
}

module.exports = APIException;
