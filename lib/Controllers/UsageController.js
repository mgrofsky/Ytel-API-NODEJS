/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');

class UsageController {
    /**
     * Retrieve usage metrics regarding your message360 account. The results includes
     * inbound/outbound voice calls and inbound/outbound SMS messages as well as carrier lookup
     * requests.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['responseType'] Response type format xml or json
     * @param {ProductCodeEnum} input['productCode'] (optional) Filter usage results by product
     * type.
     * @param {string} input['startDate'] (optional) Filter usage objects by start date.
     * @param {string} input['endDate'] (optional) Filter usage objects by end date.
     * @param {string} input['includeSubAccounts'] (optional) Will include all subaccount usage
     * data
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static listUsage(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/usage/listusage.{ResponseType}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            ResponseType: input.responseType,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'message360-api',
        };

        // prepare form data
        const _form = {
            ProductCode: (input.productCode !== null) ? input.productCode : 0,
            startDate: (input.startDate !== null) ? input.startDate : '2016-09-06',
            endDate: (input.endDate !== null) ? input.endDate : '2016-09-06',
            IncludeSubAccounts: input.includeSubAccounts,
        };

        // remove null values
        _apiHelper.cleanObject(_form);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, _response.body, _context);
                    _fulfill(_response.body);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

}

module.exports = UsageController;
