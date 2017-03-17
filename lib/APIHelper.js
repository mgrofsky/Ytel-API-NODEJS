/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
 */
var stream = require("stream");

var APIHelper = {

    /**
     * Replaces template parameters in the given url
     * @param	{String} queryBuilder    The query string builder to replace the template parameters
     * @param	{Array}  parameters      The parameters to replace in the queryBuilder
	 * @returns	{String} queryBuilder    The query string builder with replaced template parameters
     */
    appendUrlWithTemplateParameters(queryBuilder, parameters) {
        // perform parameter validation
        if (queryBuilder === null) {
            return;
        }
        if (parameters === null) {
            return queryBuilder;
        }

        // iterate and replace parameters
        for (var key in parameters) {
            var replaceValue = "";

            // load parameter value
            var element = parameters[key];
            if (element === null) {
                replaceValue = "";
            } else if (element instanceof Array) {
                replaceValue = element.map(function elementMapper(el) {
                    return encodeURIComponent(el);
                });
                replaceValue = replaceValue.join("/");
            } else {
                replaceValue = encodeURIComponent(element.toString());
            }
            queryBuilder = queryBuilder.replace("{" + (key) + "}", replaceValue);
        }
        return queryBuilder;
    },

    /**
     * Appends the given set of parameters to the given query string
     * @param	{String} queryBuilder    The query url string to append the parameters
     * @param	{Array}  parameters      The parameters to append
	 * @returns	{String} queryBuilder    The query string appended with parameters
     */
    appendUrlWithQueryParameters(queryBuilder, parameters) {
        // perform parameter validation
        if (queryBuilder === null) {
            return;
        }
        if (parameters === queryBuilder) {
            return queryBuilder;
        }
        var hasParams = queryBuilder.indexOf("?") > -1;

        // iterate and replace parameters
        var encoded = this.urlEncodeObject(parameters);
        var separator = (hasParams) ? "&" : "?";
        queryBuilder = queryBuilder + separator + encoded;
        return queryBuilder;
    },

    /**
     * Validates and processes the given Url
     * @param  {String}  url  The Url to process
     * @return {String}		  Processed url
     */
    cleanUrl(url) {
        // ensure that the urls are absolute
        var re = /^https?:\/\/[^/]+/;
        var str = url;
        var match = url.match(re);
        if (match === null) {
            return;
        }

        // remove redundant forward slashes
        var protocol = match[0];
        var queryUrl = url.substring(protocol.length);
        queryUrl = queryUrl.replace(/\/\/+/, "/");
        var result = protocol + queryUrl;
        return result;
    },

    /**
     * JSON Serialization of a given object.
     * @param	{Object} data The object to serialize into JSON
     * @return	{Object}	  The serialized Json string representation of the given object
     */
    jsonSerialize(data) {
        return JSON.stringify(data);
    },

    /**
     * Formats the template parameters in the string
     * @param   {string}	str     The string containing the template
     * @return  {string}			The string with template parameters filled in.
     */
    formatString(str) {
        if (!str || arguments.length <= 1) return str;
        var args = arguments;
        for (var iter = 1; iter < arguments.length; iter = iter + 1) {
            var reg = new RegExp("\\{" + (iter - 1) + "\\}", "gm");
            str = str.replace(reg, arguments[iter]);
        }
        return str;
    },

    /**
     * Cleans the object by removing null properties.
     * @param   {object} input Object or dictionary.
     * @return  {object} Returns the cleaned version of the object.
     */
    cleanObject(input) {
        if (input instanceof stream.Stream) {
            return input;
        }
        for (var key in input) {
            var value = input[key];
            if (value === null || value === undefined) {
                if (input.constructor === Array) {
                    input.splice(key, 1);
                } else delete input[key];
            } else if (Object.prototype.toString.call(value) === "[object Object]") {
                this.cleanObject(value);
            } else if (value.constructor === Array) {
                this.cleanObject(value);
            }
        }
        return input;
    },


    /**
     * Shallow merges the properties of two objects
     * @param {object} first The object to merge in to
     * @param {object} second The object to be added to first
     *
     * @return {object}		the merged (modified) first object
     */
    merge(first, second) {
        for (var attrname in second) {
            first[attrname] = second[attrname];
        }
        return first;
    },

    /**
     * Checks if the elements of the given array are all primitives
	 * @param {array} value The array to be checked
     *
     * @return {bool}		The result of primitive checking
     */
    isPrimitiveArray(value) {
        if (value.constructor && value.constructor !== Array) {
            return false;
        }
        if (value.length === 0) return true;
        return value.every(function every(obj) {
            return obj === null
				|| obj === undefined
				|| obj.constructor
				&& [String, Number, Boolean].indexOf(obj.constructor) >= 0;
        });
    },

    /**
     * Converts an object to formdata serialization.
     * @param {Object} obj  The object to serialize
	 * @param {array} keys The keys of the object
     * @return {array<key,value>} Result of serialization
     */
    formDataEncodeObject(obj, keys) {
        var query = "";
        var key;
        var value;
        var fullSubName;
        var subName;
        var subValue;
        var innerObj;
        var iter;
        if (!keys) {
            keys = [];
        }
        for (key in obj) {
            value = obj[key];
            if (value instanceof stream.Stream) {
                keys.push({
                    key: key,
                    value: value
                });
            } else if (value instanceof Array) {
                var arrayFormat = "{0}[{1}]";
                for (iter = 0; iter < value.length; iter = iter + 1) {
                    subValue = value[iter];
                    fullSubName = this.formatString(arrayFormat, key, iter);
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    this.formDataEncodeObject(innerObj, keys);
                }
            } else if (value instanceof Object) {
                for (subName in value) {
                    subValue = value[subName];
                    fullSubName = key + "[" + subName + "]";
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    this.formDataEncodeObject(innerObj, keys);
                }
            } else if (value !== undefined && value !== null) {
                if (!(value instanceof Object)) {
                    keys.push({
                        key: key,
                        value: value
                    });
                }
            }
        }
        return keys;
    },

    /**
     * Converts an object to x-www-form-urlencoded serialization.
     * @param  {Object} obj The object to be serialized
     * @return {String}     The result of serialization
     */
    urlEncodeObject(obj) {
        var params = this.formDataEncodeObject(obj);
        var query = "";
        for (var index in params) {
            var pair = params[index];
            var key = pair.key;
            var value = pair.value;
            query = query += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
        }
        return query.length ? query.substr(0, query.length - 1) : query;
    }
};

module.exports = APIHelper;
