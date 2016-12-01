#Getting started

# Message360

This file was automatically generated for message360 by APIMATIC v2.0 ([https://apimatic.io](https://apimatic.io)) on 12/01/2016.

## Installation

The SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies.
Once published you will need copy the folder `message360` in to your `node_modules` folder.

## Usage

The following shows how import and use the controller:

1. Import the module:

    ```js
    var message360 = require('message360');
    ```

2. Configure any authentication parameters. For example:

    ```js
    var config = message360.configuration;
    config.apikey = a_secret_key;
    ```

3. Access various controllers by:

    ```js
    var controller = message360.XYZ;
    controller.getItems(id, callback);
    ```


