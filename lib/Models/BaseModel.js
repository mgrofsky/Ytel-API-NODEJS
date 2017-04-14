/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

/**
 * Creates a instance of BaseModel
 *
 * @constructor
 */
class BaseModel {
    // Maintain a name mapping dictionary
    constructor() {
        this._variableDict = [];
    }
    toJSON() {
        const newDict = {};
        const props = Object.keys(this);
        for (let iter = 0; iter < props.length; iter += 1) {
            if (typeof this[props[iter]] !== 'function' && props[iter] !== '_variableDict') {
                if (props[iter] in this._variableDict) {
                    const value = this._variableDict[props[iter]];
                    newDict[value] = this[props[iter]];
                } else {
                    newDict[props[iter]] = this[props[iter]];
                }
            }
        }
        return (newDict);
    }
}
module.exports = BaseModel;
