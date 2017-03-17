/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
 */
var servers = require("./Servers");
var environments = require("./Environments");
var apiHelper = require("./APIHelper");

var environmentsMap = [];
var envm = environments;
var srv = servers;

environmentsMap[envm.PRODUCTION] = [];
environmentsMap[envm.PREPRODUCTION] = [];
environmentsMap[envm.DEVELOPMENT] = [];

environmentsMap[envm.PRODUCTION][srv.MDEFAULT] = "https://api.message360.com/api/v2";
environmentsMap[envm.PREPRODUCTION][srv.MDEFAULT] = "https://api-preprod.message360.com/api/v2";
environmentsMap[envm.DEVELOPMENT][srv.MDEFAULT] = "https://lara-dev.message360.com/api/v2";

var Configuration = {
    // The username to use with basic authentication
    // TODO: Replace the BasicAuthUserName with an appropriate value
    basicAuthUserName: "TODO: Replace",

    // The password to use with basic authentication
    // TODO: Replace the BasicAuthPassword with an appropriate value
    basicAuthPassword: "TODO: Replace",

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
        var url = environmentsMap[this.currentEnvironment][server || servers.MDEFAULT];
        var urlParams = {
        };
        return apiHelper.appendUrlWithTemplateParameters(url, urlParams);
    }
};

module.exports = Configuration;
