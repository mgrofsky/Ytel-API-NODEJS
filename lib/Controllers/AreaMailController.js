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

class AreaMailController {
    /**
     * Create a new AreaMail object.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['routes'] List of routes that AreaMail should be delivered to.  A
     * single route can be either a zipcode or a carrier route.List
     * of routes that AreaMail should be delivered to.  A single
     * route can be either a zipcode or a carrier route. A carrier
     * route is in the form of 92610-C043 where the carrier route
     * is composed of 5 numbers for zipcode, 1 letter for carrier
     * route type, and 3 numbers for carrier route code. Delivery
     * can be sent to mutliple routes by separating them with a
     * commas. Valid Values: 92656, 92610-C043
     * @param {string} input['attachbyid'] Set an existing areamail by attaching its AreamailId.
     * @param {string} input['front'] The front of the AreaMail item to be created. This can be a
     * URL, local file, or an HTML string. Supported file types are
     * PDF, PNG, and JPEG. Back required
     * @param {string} input['back'] The back of the AreaMail item to be created. This can be a URL,
     * local file, or an HTML string. Supported file types are PDF,
     * PNG, and JPEG.
     * @param {string} input['responseType'] Response Type either json or xml
     * @param {string} input['description'] (optional) A string value to use as a description for
     * this AreaMail item.
     * @param {string} input['targettype'] (optional) The delivery location type.
     * @param {string} input['htmldata'] (optional) A string value that contains HTML markup.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createAreaMail(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.routes === null || input.routes === undefined) {
            const _err = { errorMessage: 'The property `routes` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.attachbyid === null || input.attachbyid === undefined) {
            const _err = { errorMessage: 'The property `attachbyid` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.front === null || input.front === undefined) {
            const _err = { errorMessage: 'The property `front` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.back === null || input.back === undefined) {
            const _err = { errorMessage: 'The property `back` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/areamail/create.{ResponseType}'}`;

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
            routes: input.routes,
            attachbyid: input.attachbyid,
            front: input.front,
            back: input.back,
            description: input.description,
            targettype: input.targettype,
            htmldata: input.htmldata,
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

    /**
     * Retrieve an AreaMail object by its AreaMailId.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['areamailid'] The unique identifier for an AreaMail object.
     * @param {string} input['responseType'] Response Type either json or xml
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static viewAreaMail(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.areamailid === null || input.areamailid === undefined) {
            const _err = { errorMessage: 'The property `areamailid` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/areamail/view.{ResponseType}'}`;

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
            areamailid: input.areamailid,
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

    /**
     * Retrieve a list of AreaMail objects.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['responseType'] Response Type either json or xml
     * @param {int} input['page'] (optional) The page count to retrieve from the total results in
     * the collection. Page indexing starts at 1.
     * @param {int} input['pagesize'] (optional) The count of objects to return per page.
     * @param {string} input['areamailsid'] (optional) The unique identifier for an AreaMail object.
     * @param {string} input['dateCreated'] (optional) The date the AreaMail was created.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static listAreaMail(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/areamail/lists.{ResponseType}'}`;

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
            page: (input.page !== null) ? input.page : 1,
            pagesize: (input.pagesize !== null) ? input.pagesize : 10,
            areamailsid: input.areamailsid,
            dateCreated: input.dateCreated,
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

    /**
     * Remove an AreaMail object by its AreaMailId.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['areamailid'] The unique identifier for an AreaMail object.
     * @param {string} input['responseType'] Response Type either json or xml
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static deleteAreaMail(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.areamailid === null || input.areamailid === undefined) {
            const _err = { errorMessage: 'The property `areamailid` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/areamail/delete.{ResponseType}'}`;

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
            areamailid: input.areamailid,
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

module.exports = AreaMailController;
