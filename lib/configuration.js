/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const servers = require('./Servers');
const environments = require('./Environments');
const apiHelper = require('./APIHelper');

const environmentsMap = [];

environmentsMap[environments.PRODUCTION] = [];
environmentsMap[environments.PREPRODUCTION] = [];

environmentsMap[environments.PRODUCTION][servers.MDEFAULT] = 'https://api.message360.com/api/v3';
environmentsMap[environments.PREPRODUCTION][servers.MDEFAULT] =
    'https://api-preprod.message360.com/api/v2';

const Configuration = {
    // The username to use with basic authentication
    // TODO: Replace the BasicAuthUserName with an appropriate value
    basicAuthUserName: 'TODO: Replace',

    // The password to use with basic authentication
    // TODO: Replace the BasicAuthPassword with an appropriate value
    basicAuthPassword: 'TODO: Replace',

    /**
     * Current API environment
     * @type {string}
     */
    currentEnvironment: environments.PRODUCTION,

    /**
     * Get base URI for a server in the current API environment
     * @param  {string|null} server Server name
     * @return {string}             Base URI for server
     */
    getBaseUri(server) {
        const url = environmentsMap[this.currentEnvironment][server || servers.MDEFAULT];
        const urlParams = {
        };
        return apiHelper.appendUrlWithTemplateParameters(url, urlParams);
    },
};

module.exports = Configuration;
