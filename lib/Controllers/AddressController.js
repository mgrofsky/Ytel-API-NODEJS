

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

class AddressController {
    /**
     * To add an address to your address book, you create a new address object. You can retrieve
     * and delete individual addresses as well as get a list of addresses. Addresses are
     * identified by a unique random ID.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['name'] Name of user
     * @param {string} input['address'] Address of user.
     * @param {string} input['country'] Must be a 2 letter country short-name code (ISO 3166)
     * @param {string} input['state'] Must be a 2 letter State eg. CA for US. For Some Countries it
     * can be greater than 2 letters.
     * @param {string} input['city'] City Name.
     * @param {string} input['zip'] Zip code of city.
     * @param {string|null} input['description'] (optional) Description of addresses.
     * @param {string|null} input['email'] (optional) Email Id of user.
     * @param {string|null} input['phone'] (optional) Phone number of user.
     * @param {string|null} input['responseType'] (optional) Response type either json or xml

     * @callback    The callback function that returns response from the API call
     */
    static createAddress(input, callback) {
        // validating required parameters
        if (input.name === null || input.name === undefined) {
            callback({ errorMessage: 'The property `name` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.address === null || input.address === undefined) {
            callback({ errorMessage: 'The property `address` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.country === null || input.country === undefined) {
            callback({ errorMessage: 'The property `country` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.state === null || input.state === undefined) {
            callback({ errorMessage: 'The property `state` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.city === null || input.city === undefined) {
            callback({ errorMessage: 'The property `city` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.zip === null || input.zip === undefined) {
            callback({ errorMessage: 'The property `zip` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/address/createaddress.{ResponseType}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            ResponseType: (input.responseType !== null) ? input.responseType : 'json',
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'message360-api',
        };

        // prepare form data
        const _form = {
            Name: input.name,
            Address: input.address,
            Country: input.country,
            State: input.state,
            City: input.city,
            Zip: input.zip,
            Description: input.description,
            email: input.email,
            Phone: input.phone,
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
        const cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _baseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body, _context);
            } else {
                errorResponse = _baseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    }

    /**
     * To delete Address to your address book
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['addressSID'] The identifier of the address to be deleted.
     * @param {string|null} input['responseType'] (optional) Response type either json or xml

     * @callback    The callback function that returns response from the API call
     */
    static createDeleteAddress(input, callback) {
        // validating required parameters
        if (input.addressSID === null || input.addressSID === undefined) {
            callback({ errorMessage: 'The property `addressSID` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/address/deleteaddress.{ResponseType}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            ResponseType: (input.responseType !== null) ? input.responseType : 'json',
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'message360-api',
        };

        // prepare form data
        const _form = {
            AddressSID: input.addressSID,
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
        const cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _baseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body, _context);
            } else {
                errorResponse = _baseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    }

    /**
     * Validates an address given.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['addressSID'] The identifier of the address to be verified.
     * @param {string|null} input['responseType'] (optional) Response type either json or xml

     * @callback    The callback function that returns response from the API call
     */
    static createVerifyAddress(input, callback) {
        // validating required parameters
        if (input.addressSID === null || input.addressSID === undefined) {
            callback({ errorMessage: 'The property `addressSID` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/address/verifyaddress.{ResponseType}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            ResponseType: (input.responseType !== null) ? input.responseType : 'json',
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'message360-api',
        };

        // prepare form data
        const _form = {
            AddressSID: input.addressSID,
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
        const cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _baseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body, _context);
            } else {
                errorResponse = _baseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    }

    /**
     * List All Address
     *
     * @param  {array}  input    Array with all options for search
     * @param {int|null} input['page'] (optional) Return requested # of items starting the value,
     * default=0, must be an integer
     * @param {int|null} input['pageSize'] (optional) How many results to return, default is 10,
     * max is 100, must be an integer
     * @param {string|null} input['addressSID'] (optional) addresses Sid
     * @param {string|null} input['dateCreated'] (optional) date created address.
     * @param {string|null} input['responseType'] (optional) Response Type either json or xml

     * @callback    The callback function that returns response from the API call
     */
    static createListAddress(input, callback) {
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/address/listaddress.{ResponseType}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            ResponseType: (input.responseType !== null) ? input.responseType : 'json',
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'message360-api',
        };

        // prepare form data
        const _form = {
            Page: (input.page !== null) ? input.page : 1,
            PageSize: (input.pageSize !== null) ? input.pageSize : 10,
            AddressSID: input.addressSID,
            DateCreated: input.dateCreated,
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
        const cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _baseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body, _context);
            } else {
                errorResponse = _baseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    }

    /**
     * View Address Specific address Book by providing the address id
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['addressSID'] The identifier of the address to be retrieved.
     * @param {string|null} input['responseType'] (optional) Response Type either json or xml

     * @callback    The callback function that returns response from the API call
     */
    static createViewAddress(input, callback) {
        // validating required parameters
        if (input.addressSID === null || input.addressSID === undefined) {
            callback({ errorMessage: 'The property `addressSID` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/address/viewaddress.{ResponseType}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            ResponseType: (input.responseType !== null) ? input.responseType : 'json',
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'message360-api',
        };

        // prepare form data
        const _form = {
            AddressSID: input.addressSID,
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
        const cb = function cb(_error, _response, _context) {
            let errorResponse;
            if (_error) {
                errorResponse = _baseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body, _context);
            } else {
                errorResponse = _baseController.validateResponse(_context);
                callback(errorResponse.error, errorResponse.response, errorResponse.context);
            }
        };

        _request(_options, cb);
    }

}

module.exports = AddressController;
