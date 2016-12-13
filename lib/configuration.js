/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io ) on 12/12/2016
 */
var servers = require('./Servers'),
    environments = require('./Environments'),
    apiHelper = require('./APIHelper');

var environmentsMap = [],
    e = environments,
    s = servers;

environmentsMap[e.PRODUCTION] = [];
environmentsMap[e.PREPRODUCTION] = [];
environmentsMap[e.DEVELOPMENT] = [];

environmentsMap[e.PRODUCTION][s.DEFAULT] = "https://api.message360.com/api/v2";
environmentsMap[e.PREPRODUCTION][s.DEFAULT] = "https://api-preprod.message360.com/api/v2";
environmentsMap[e.DEVELOPMENT][s.DEFAULT] = "https://api-dev.message360.com/api/v2";

var configuration = {
    //The username to use with basic authentication
    //TODO: Replace the BasicAuthUserName with an appropriate value
    basicAuthUserName : "TODO: Replace",

    //The password to use with basic authentication
    //TODO: Replace the BasicAuthPassword with an appropriate value
    basicAuthPassword : "TODO: Replace"

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
    getBaseUri: function (server) {
        var url = environmentsMap[this.currentEnvironment][server || servers.DEFAULT];
        var urlParams = {
        };
        return apiHelper.appendUrlWithTemplateParameters(url, urlParams);
    }
};

module.exports = configuration;
