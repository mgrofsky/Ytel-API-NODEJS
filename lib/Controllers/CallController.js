

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

class CallController {
    /**
     * View Call Response
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['callsid'] Call Sid id for particular Call
     * @param {string|null} input['responseType'] (optional) Response type format xml or json

     * @callback    The callback function that returns response from the API call
     */
    static createViewCall(input, callback) {
        // validating required parameters
        if (input.callsid === null || input.callsid === undefined) {
            callback({ errorMessage: 'The property `callsid` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/calls/viewcalls.{ResponseType}'}`;

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
            callsid: input.callsid,
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
     * Group Call
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['fromCountryCode'] Example: 1
     * @param {string} input['from'] TODO: type description here
     * @param {string} input['toCountryCode'] Example: 1
     * @param {string} input['to'] TODO: type description here
     * @param {string} input['url'] TODO: type description here
     * @param {HttpActionEnum|null} input['method'] (optional) TODO: type description here
     * @param {string|null} input['statusCallBackUrl'] (optional) TODO: type description here
     * @param {HttpActionEnum|null} input['statusCallBackMethod'] (optional) TODO: type description
     * here
     * @param {string|null} input['fallBackUrl'] (optional) TODO: type description here
     * @param {HttpActionEnum|null} input['fallBackMethod'] (optional) TODO: type description here
     * @param {string|null} input['heartBeatUrl'] (optional) TODO: type description here
     * @param {HttpActionEnum|null} input['heartBeatMethod'] (optional) TODO: type description
     * here
     * @param {int|null} input['timeout'] (optional) TODO: type description here
     * @param {string|null} input['playDtmf'] (optional) TODO: type description here
     * @param {string|null} input['hideCallerId'] (optional) TODO: type description here
     * @param {bool|null} input['record'] (optional) TODO: type description here
     * @param {string|null} input['recordCallBackUrl'] (optional) TODO: type description here
     * @param {HttpActionEnum|null} input['recordCallBackMethod'] (optional) TODO: type description
     * here
     * @param {bool|null} input['transcribe'] (optional) TODO: type description here
     * @param {string|null} input['transcribeCallBackUrl'] (optional) TODO: type description here
     * @param {string|null} input['responseType'] (optional) Example: json

     * @callback    The callback function that returns response from the API call
     */
    static createGroupCall(input, callback) {
        // validating required parameters
        if (input.from === null || input.from === undefined) {
            callback({ errorMessage: 'The property `from` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.to === null || input.to === undefined) {
            callback({ errorMessage: 'The property `to` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.url === null || input.url === undefined) {
            callback({ errorMessage: 'The property `url` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/calls/groupcall.{ResponseType}'}`;

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
            FromCountryCode: input.fromCountryCode,
            From: input.from,
            ToCountryCode: input.toCountryCode,
            To: input.to,
            Url: input.url,
            Method: (input.method !== null) ? input.method : null,
            StatusCallBackUrl: input.statusCallBackUrl,
            StatusCallBackMethod: (input.statusCallBackMethod !== null) ? input.statusCallBackMethod : null,
            FallBackUrl: input.fallBackUrl,
            FallBackMethod: (input.fallBackMethod !== null) ? input.fallBackMethod : null,
            HeartBeatUrl: input.heartBeatUrl,
            HeartBeatMethod: (input.heartBeatMethod !== null) ? input.heartBeatMethod : null,
            Timeout: input.timeout,
            PlayDtmf: input.playDtmf,
            HideCallerId: input.hideCallerId,
            Record: input.record,
            RecordCallBackUrl: input.recordCallBackUrl,
            RecordCallBackMethod: (input.recordCallBackMethod !== null) ? input.recordCallBackMethod : null,
            Transcribe: input.transcribe,
            TranscribeCallBackUrl: input.transcribeCallBackUrl,
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
     * Voice Effect
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['callSid'] TODO: type description here
     * @param {AudioDirectionEnum|null} input['audioDirection'] (optional) TODO: type description
     * here
     * @param {double|null} input['pitchSemiTones'] (optional) value between -14 and 14
     * @param {double|null} input['pitchOctaves'] (optional) value between -1 and 1
     * @param {double|null} input['pitch'] (optional) value greater than 0
     * @param {double|null} input['rate'] (optional) value greater than 0
     * @param {double|null} input['tempo'] (optional) value greater than 0
     * @param {string|null} input['responseType'] (optional) Response type format xml or json

     * @callback    The callback function that returns response from the API call
     */
    static createVoiceEffect(input, callback) {
        // validating required parameters
        if (input.callSid === null || input.callSid === undefined) {
            callback({ errorMessage: 'The property `callSid` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/calls/voiceeffect.{ResponseType}'}`;

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
            CallSid: input.callSid,
            AudioDirection: (input.audioDirection !== null) ? input.audioDirection : null,
            PitchSemiTones: input.pitchSemiTones,
            PitchOctaves: input.pitchOctaves,
            Pitch: input.pitch,
            Rate: input.rate,
            Tempo: input.tempo,
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
     * Record a Call
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['callSid'] The unique identifier of each call resource
     * @param {bool} input['record'] Set true to initiate recording or false to terminate
     * recording
     * @param {DirectionEnum|null} input['direction'] (optional) The leg of the call to record
     * @param {int|null} input['timeLimit'] (optional) Time in seconds the recording duration
     * should not exceed
     * @param {string|null} input['callBackUrl'] (optional) URL consulted after the recording
     * completes
     * @param {AudioFormatEnum|null} input['fileformat'] (optional) Format of the recording file.
     * Can be .mp3 or .wav
     * @param {string|null} input['responseType'] (optional) Response format, xml or json

     * @callback    The callback function that returns response from the API call
     */
    static createRecordCall(input, callback) {
        // validating required parameters
        if (input.callSid === null || input.callSid === undefined) {
            callback({ errorMessage: 'The property `callSid` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.record === null || input.record === undefined) {
            callback({ errorMessage: 'The property `record` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/calls/recordcalls.{ResponseType}'}`;

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
            CallSid: input.callSid,
            Record: input.record,
            Direction: (input.direction !== null) ? input.direction : null,
            TimeLimit: input.timeLimit,
            CallBackUrl: input.callBackUrl,
            Fileformat: (input.fileformat !== null) ? input.fileformat : null,
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
     * Play Dtmf and send the Digit
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['callSid'] The unique identifier of each call resource
     * @param {string} input['audioUrl'] URL to sound that should be played. You also can add more
     * than one audio file using semicolons e.g. http://example.
     * com/audio1.mp3;http://example.com/audio2.wav
     * @param {int|null} input['length'] (optional) Time limit in seconds for audio play back
     * @param {DirectionEnum|null} input['direction'] (optional) The leg of the call audio will be
     * played to
     * @param {bool|null} input['loop'] (optional) Repeat audio playback indefinitely
     * @param {bool|null} input['mix'] (optional) If false, all other audio will be muted
     * @param {string|null} input['responseType'] (optional) Response type format xml or json

     * @callback    The callback function that returns response from the API call
     */
    static createPlayAudio(input, callback) {
        // validating required parameters
        if (input.callSid === null || input.callSid === undefined) {
            callback({ errorMessage: 'The property `callSid` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.audioUrl === null || input.audioUrl === undefined) {
            callback({ errorMessage: 'The property `audioUrl` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/calls/playaudios.{ResponseType}'}`;

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
            CallSid: input.callSid,
            AudioUrl: input.audioUrl,
            Length: input.length,
            Direction: (input.direction !== null) ? input.direction : null,
            Loop: input.loop,
            Mix: input.mix,
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
     * Interrupt the Call by Call Sid
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['callSid'] Call SId
     * @param {string|null} input['url'] (optional) URL the in-progress call will be redirected to
     * @param {HttpActionEnum|null} input['method'] (optional) The method used to request the above
     * Url parameter
     * @param {InterruptedCallStatusEnum|null} input['status'] (optional) Status to set the in-
     * progress call to
     * @param {string|null} input['responseType'] (optional) Response type format xml or json

     * @callback    The callback function that returns response from the API call
     */
    static createInterruptedCall(input, callback) {
        // validating required parameters
        if (input.callSid === null || input.callSid === undefined) {
            callback({ errorMessage: 'The property `callSid` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/calls/interruptcalls.{ResponseType}'}`;

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
            CallSid: input.callSid,
            Url: input.url,
            Method: (input.method !== null) ? input.method : null,
            Status: (input.status !== null) ? input.status : null,
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
     * Play Dtmf and send the Digit
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['callSid'] The unique identifier of each call resource
     * @param {string} input['playDtmf'] DTMF digits to play to the call. 0-9, #, *, W, or w
     * @param {DirectionEnum|null} input['playDtmfDirection'] (optional) The leg of the call DTMF
     * digits should be sent to
     * @param {string|null} input['responseType'] (optional) Response type format xml or json

     * @callback    The callback function that returns response from the API call
     */
    static createSendDigit(input, callback) {
        // validating required parameters
        if (input.callSid === null || input.callSid === undefined) {
            callback({ errorMessage: 'The property `callSid` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.playDtmf === null || input.playDtmf === undefined) {
            callback({ errorMessage: 'The property `playDtmf` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/calls/senddigits.{ResponseType}'}`;

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
            CallSid: input.callSid,
            PlayDtmf: input.playDtmf,
            PlayDtmfDirection: (input.playDtmfDirection !== null) ? input.playDtmfDirection : null,
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
     * You can experiment with initiating a call through Message360 and view the request response
     * generated when doing so and get the response in json
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['fromCountryCode'] from country code
     * @param {string} input['from'] This number to display on Caller ID as calling
     * @param {string} input['toCountryCode'] To cuntry code number
     * @param {string} input['to'] To number
     * @param {string} input['url'] URL requested once the call connects
     * @param {HttpActionEnum|null} input['method'] (optional) Specifies the HTTP method used to
     * request the required URL once call connects.
     * @param {string|null} input['statusCallBackUrl'] (optional) specifies the HTTP
     * methodlinkclass used to request
     * StatusCallbackUrl.
     * @param {HttpActionEnum|null} input['statusCallBackMethod'] (optional) Specifies the HTTP
     * methodlinkclass used to request
     * StatusCallbackUrl.
     * @param {string|null} input['fallBackUrl'] (optional) URL requested if the initial Url
     * parameter fails or encounters an error
     * @param {HttpActionEnum|null} input['fallBackMethod'] (optional) Specifies the HTTP method
     * used to request the required
     * FallbackUrl once call connects.
     * @param {string|null} input['heartBeatUrl'] (optional) URL that can be requested every 60
     * seconds during the call to notify of elapsed tim
     * @param {bool|null} input['heartBeatMethod'] (optional) Specifies the HTTP method used to
     * request HeartbeatUrl.
     * @param {int|null} input['timeout'] (optional) Time (in seconds) Message360 should wait while
     * the call is ringing before canceling the call
     * @param {string|null} input['playDtmf'] (optional) DTMF Digits to play to the call once it
     * connects. 0-9, #, or *
     * @param {bool|null} input['hideCallerId'] (optional) Specifies if the caller id will be
     * hidden
     * @param {bool|null} input['record'] (optional) Specifies if the call should be recorded
     * @param {string|null} input['recordCallBackUrl'] (optional) Recording parameters will be sent
     * here upon completion
     * @param {HttpActionEnum|null} input['recordCallBackMethod'] (optional) Method used to request
     * the RecordCallback URL.
     * @param {bool|null} input['transcribe'] (optional) Specifies if the call recording should be
     * transcribed
     * @param {string|null} input['transcribeCallBackUrl'] (optional) Transcription parameters will
     * be sent here upon completion
     * @param {IfMachineEnum|null} input['ifMachine'] (optional) How Message360 should handle the
     * receiving numbers voicemail machine
     * @param {string|null} input['responseType'] (optional) Response type format xml or json

     * @callback    The callback function that returns response from the API call
     */
    static createMakeCall(input, callback) {
        // validating required parameters
        if (input.fromCountryCode === null || input.fromCountryCode === undefined) {
            callback({ errorMessage: 'The property `fromCountryCode` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.from === null || input.from === undefined) {
            callback({ errorMessage: 'The property `from` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.toCountryCode === null || input.toCountryCode === undefined) {
            callback({ errorMessage: 'The property `toCountryCode` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.to === null || input.to === undefined) {
            callback({ errorMessage: 'The property `to` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.url === null || input.url === undefined) {
            callback({ errorMessage: 'The property `url` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/calls/makecall.{ResponseType}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            ResponseType: (input.responseType !== null) ? input.responseType : 'json',
        });

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            Method: (input.method !== null) ? input.method : null,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'message360-api',
        };

        // prepare form data
        const _form = {
            FromCountryCode: input.fromCountryCode,
            From: input.from,
            ToCountryCode: input.toCountryCode,
            To: input.to,
            Url: input.url,
            StatusCallBackUrl: input.statusCallBackUrl,
            StatusCallBackMethod: (input.statusCallBackMethod !== null) ? input.statusCallBackMethod : null,
            FallBackUrl: input.fallBackUrl,
            FallBackMethod: (input.fallBackMethod !== null) ? input.fallBackMethod : null,
            HeartBeatUrl: input.heartBeatUrl,
            HeartBeatMethod: input.heartBeatMethod,
            Timeout: input.timeout,
            PlayDtmf: input.playDtmf,
            HideCallerId: input.hideCallerId,
            Record: input.record,
            RecordCallBackUrl: input.recordCallBackUrl,
            RecordCallBackMethod: (input.recordCallBackMethod !== null) ? input.recordCallBackMethod : null,
            Transcribe: input.transcribe,
            TranscribeCallBackUrl: input.transcribeCallBackUrl,
            IfMachine: (input.ifMachine !== null) ? input.ifMachine : null,
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
     * A list of calls associated with your Message360 account
     *
     * @param  {array}  input    Array with all options for search
     * @param {int|null} input['page'] (optional) Which page of the overall response will be
     * returned. Zero indexed
     * @param {int|null} input['pageSize'] (optional) Number of individual resources listed in the
     * response per page
     * @param {string|null} input['to'] (optional) Only list calls to this number
     * @param {string|null} input['from'] (optional) Only list calls from this number
     * @param {string|null} input['dateCreated'] (optional) Only list calls starting within the
     * specified date range
     * @param {string|null} input['responseType'] (optional) Response type format xml or json

     * @callback    The callback function that returns response from the API call
     */
    static createListCalls(input, callback) {
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/calls/listcalls.{ResponseType}'}`;

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
            Page: input.page,
            PageSize: (input.pageSize !== null) ? input.pageSize : 10,
            To: input.to,
            From: input.from,
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
     * API endpoint used to send a Ringless Voicemail
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['fromCountryCode'] From country code
     * @param {string} input['from'] This number to display on Caller ID as calling
     * @param {string} input['toCountryCode'] To country code
     * @param {string} input['to'] To number
     * @param {string} input['voiceMailURL'] URL to an audio file
     * @param {string} input['method'] Not currently used in this version
     * @param {string|null} input['statusCallBackUrl'] (optional) URL to post the status of the
     * Ringless request
     * @param {string|null} input['statsCallBackMethod'] (optional) POST or GET
     * @param {string|null} input['responseType'] (optional) Response type format xml or json

     * @callback    The callback function that returns response from the API call
     */
    static createSendRinglessVM(input, callback) {
        // validating required parameters
        if (input.fromCountryCode === null || input.fromCountryCode === undefined) {
            callback({ errorMessage: 'The property `fromCountryCode` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.from === null || input.from === undefined) {
            callback({ errorMessage: 'The property `from` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.toCountryCode === null || input.toCountryCode === undefined) {
            callback({ errorMessage: 'The property `toCountryCode` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.to === null || input.to === undefined) {
            callback({ errorMessage: 'The property `to` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        } else if (input.voiceMailURL === null || input.voiceMailURL === undefined) {
            callback({ errorMessage: 'The property `voiceMailURL` in the input object cannot be null.',
                errorCode: -1 }, null, null);
            return;
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/calls/makeringlessvoicemailcall.{ResponseType}'}`;

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
            FromCountryCode: input.fromCountryCode,
            From: input.from,
            ToCountryCode: input.toCountryCode,
            To: input.to,
            VoiceMailURL: input.voiceMailURL,
            Method: input.method,
            StatusCallBackUrl: input.statusCallBackUrl,
            StatsCallBackMethod: input.statsCallBackMethod,
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

module.exports = CallController;
