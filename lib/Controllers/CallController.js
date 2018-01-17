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
     * You can experiment with initiating a call through Message360 and view the request response
     * generated when doing so and get the response in json
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['from'] A valid message360 Voice enabled number (E.164 format) that
     * will be initiating the phone call.
     * @param {string} input['to'] To number
     * @param {string} input['url'] URL requested once the call connects
     * @param {string} input['responseType'] Response type format xml or json
     * @param {HttpActionEnum} input['method'] (optional) Specifies the HTTP method used to request
     * the required URL once call connects.
     * @param {string} input['statusCallBackUrl'] (optional) URL that can be requested to receive
     * notification when call has ended. A set of
     * default parameters will be sent here once the
     * call is finished.
     * @param {HttpActionEnum} input['statusCallBackMethod'] (optional) Specifies the HTTP
     * methodlinkclass used to request
     * StatusCallbackUrl.
     * @param {string} input['fallBackUrl'] (optional) URL requested if the initial Url parameter
     * fails or encounters an error
     * @param {HttpActionEnum} input['fallBackMethod'] (optional) Specifies the HTTP method used to
     * request the required FallbackUrl once call
     * connects.
     * @param {string} input['heartBeatUrl'] (optional) URL that can be requested every 60 seconds
     * during the call to notify of elapsed tim
     * @param {HttpActionEnum} input['heartBeatMethod'] (optional) Specifies the HTTP method used
     * to request HeartbeatUrl.
     * @param {int} input['timeout'] (optional) Time (in seconds) Message360 should wait while the
     * call is ringing before canceling the call
     * @param {string} input['playDtmf'] (optional) DTMF Digits to play to the call once it
     * connects. 0-9, #, or *
     * @param {bool} input['hideCallerId'] (optional) Specifies if the caller id will be hidden
     * @param {bool} input['record'] (optional) Specifies if the call should be recorded
     * @param {string} input['recordCallBackUrl'] (optional) Recording parameters will be sent here
     * upon completion
     * @param {HttpActionEnum} input['recordCallBackMethod'] (optional) Method used to request the
     * RecordCallback URL.
     * @param {bool} input['transcribe'] (optional) Specifies if the call recording should be
     * transcribed
     * @param {string} input['transcribeCallBackUrl'] (optional) Transcription parameters will be
     * sent here upon completion
     * @param {IfMachineEnum} input['ifMachine'] (optional) How Message360 should handle the
     * receiving numbers voicemail machine
     * @param {string} input['ifMachineUrl'] (optional) URL requested when IfMachine=continue
     * @param {HttpActionEnum} input['ifMachineMethod'] (optional) Method used to request the
     * IfMachineUrl.
     * @param {bool} input['feedback'] (optional) Specify if survey should be enable or not
     * @param {string} input['surveyId'] (optional) The unique identifier for the survey.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static makeCall(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.from === null || input.from === undefined) {
            const _err = { errorMessage: 'The property `from` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.to === null || input.to === undefined) {
            const _err = { errorMessage: 'The property `to` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.url === null || input.url === undefined) {
            const _err = { errorMessage: 'The property `url` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/calls/makecall.{ResponseType}'}`;

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
            From: input.from,
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
            IfMachine: (input.ifMachine !== null) ? input.ifMachine : null,
            IfMachineUrl: input.ifMachineUrl,
            IfMachineMethod: (input.ifMachineMethod !== null) ? input.ifMachineMethod : null,
            Feedback: input.feedback,
            SurveyId: input.surveyId,
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
     * Play Dtmf and send the Digit
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['callSid'] The unique identifier of each call resource
     * @param {string} input['audioUrl'] URL to sound that should be played. You also can add more
     * than one audio file using semicolons e.g. http://example.
     * com/audio1.mp3;http://example.com/audio2.wav
     * @param {string} input['sayText'] Valid alphanumeric string that should be played to the In-
     * progress call.
     * @param {string} input['responseType'] Response type format xml or json
     * @param {int} input['length'] (optional) Time limit in seconds for audio play back
     * @param {DirectionEnum} input['direction'] (optional) The leg of the call audio will be
     * played to
     * @param {bool} input['mix'] (optional) If false, all other audio will be muted
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static playAudio(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.callSid === null || input.callSid === undefined) {
            const _err = { errorMessage: 'The property `callSid` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.audioUrl === null || input.audioUrl === undefined) {
            const _err = { errorMessage: 'The property `audioUrl` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.sayText === null || input.sayText === undefined) {
            const _err = { errorMessage: 'The property `sayText` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/calls/playaudios.{ResponseType}'}`;

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
            CallSid: input.callSid,
            AudioUrl: input.audioUrl,
            SayText: input.sayText,
            Length: input.length,
            Direction: (input.direction !== null) ? input.direction : null,
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
     * Start or stop recording of an in-progress voice call.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['callSid'] The unique identifier of each call resource
     * @param {bool} input['record'] Set true to initiate recording or false to terminate
     * recording
     * @param {string} input['responseType'] Response format, xml or json
     * @param {DirectionEnum} input['direction'] (optional) The leg of the call to record
     * @param {int} input['timeLimit'] (optional) Time in seconds the recording duration should not
     * exceed
     * @param {string} input['callBackUrl'] (optional) URL consulted after the recording completes
     * @param {AudioFormatEnum} input['fileformat'] (optional) Format of the recording file. Can be
     * .mp3 or .wav
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static recordCall(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.callSid === null || input.callSid === undefined) {
            const _err = { errorMessage: 'The property `callSid` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.record === null || input.record === undefined) {
            const _err = { errorMessage: 'The property `record` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/calls/recordcalls.{ResponseType}'}`;

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
     * Add audio voice effects to the an in-progress voice call.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['callSid'] The unique identifier for the in-progress voice call.
     * @param {string} input['responseType'] Response type format xml or json
     * @param {AudioDirectionEnum} input['audioDirection'] (optional) The direction the audio
     * effect should be placed on. If IN, the
     * effects will occur on the incoming audio
     * stream. If OUT, the effects will occur
     * on the outgoing audio stream.
     * @param {double} input['pitchSemiTones'] (optional) Set the pitch in semitone (half-step)
     * intervals. Value between -14 and 14
     * @param {double} input['pitchOctaves'] (optional) Set the pitch in octave intervals.. Value
     * between -1 and 1
     * @param {double} input['pitch'] (optional) Set the pitch (lowness/highness) of the audio. The
     * higher the value, the higher the pitch. Value greater than 0
     * @param {double} input['rate'] (optional) Set the rate for audio. The lower the value, the
     * lower the rate. value greater than 0
     * @param {double} input['tempo'] (optional) Set the tempo (speed) of the audio. A higher value
     * denotes a faster tempo. Value greater than 0
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static voiceEffect(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.callSid === null || input.callSid === undefined) {
            const _err = { errorMessage: 'The property `callSid` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/calls/voiceeffect.{ResponseType}'}`;

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
     * Play Dtmf and send the Digit
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['callSid'] The unique identifier of each call resource
     * @param {string} input['playDtmf'] DTMF digits to play to the call. 0-9, #, *, W, or w
     * @param {string} input['responseType'] Response type format xml or json
     * @param {DirectionEnum} input['playDtmfDirection'] (optional) The leg of the call DTMF digits
     * should be sent to
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static sendDigit(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.callSid === null || input.callSid === undefined) {
            const _err = { errorMessage: 'The property `callSid` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.playDtmf === null || input.playDtmf === undefined) {
            const _err = { errorMessage: 'The property `playDtmf` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/calls/senddigits.{ResponseType}'}`;

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
     * Interrupt the Call by Call Sid
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['callSid'] The unique identifier for voice call that is in progress.
     * @param {string} input['responseType'] Response type format xml or json
     * @param {string} input['url'] (optional) URL the in-progress call will be redirected to
     * @param {HttpActionEnum} input['method'] (optional) The method used to request the above Url
     * parameter
     * @param {InterruptedCallStatusEnum} input['status'] (optional) Status to set the in-progress
     * call to
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static interruptedCall(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.callSid === null || input.callSid === undefined) {
            const _err = { errorMessage: 'The property `callSid` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/calls/interruptcalls.{ResponseType}'}`;

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
     * Group Call
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['from'] This number to display on Caller ID as calling
     * @param {string} input['to'] Please enter multiple E164 number. You can add max 10 numbers.
     * Add numbers separated with comma. e.g : 1111111111,2222222222
     * @param {string} input['url'] URL requested once the call connects
     * @param {string} input['responseType'] Example: json
     * @param {string} input['groupConfirmKey'] Define the DTMF that the called party should send
     * to bridge the call. Allowed Values : 0-9, #, *
     * @param {AudioFormatEnum} input['groupConfirmFile'] Specify the audio file you want to play
     * when the called party picks up the call
     * @param {HttpActionEnum} input['method'] (optional) Specifies the HTTP method used to request
     * the required URL once call connects.
     * @param {string} input['statusCallBackUrl'] (optional) URL that can be requested to receive
     * notification when call has ended. A set of
     * default parameters will be sent here once the
     * call is finished.
     * @param {HttpActionEnum} input['statusCallBackMethod'] (optional) Specifies the HTTP
     * methodlinkclass used to request
     * StatusCallbackUrl.
     * @param {string} input['fallBackUrl'] (optional) URL requested if the initial Url parameter
     * fails or encounters an error
     * @param {HttpActionEnum} input['fallBackMethod'] (optional) Specifies the HTTP method used to
     * request the required FallbackUrl once call
     * connects.
     * @param {string} input['heartBeatUrl'] (optional) URL that can be requested every 60 seconds
     * during the call to notify of elapsed time and pass
     * other general information.
     * @param {HttpActionEnum} input['heartBeatMethod'] (optional) Specifies the HTTP method used
     * to request HeartbeatUrl.
     * @param {int} input['timeout'] (optional) Time (in seconds) Message360 should wait while the
     * call is ringing before canceling the call
     * @param {string} input['playDtmf'] (optional) DTMF Digits to play to the call once it
     * connects. 0-9, #, or *
     * @param {string} input['hideCallerId'] (optional) Specifies if the caller id will be hidden
     * @param {bool} input['record'] (optional) Specifies if the call should be recorded
     * @param {string} input['recordCallBackUrl'] (optional) Recording parameters will be sent here
     * upon completion
     * @param {HttpActionEnum} input['recordCallBackMethod'] (optional) Method used to request the
     * RecordCallback URL.
     * @param {bool} input['transcribe'] (optional) Specifies if the call recording should be
     * transcribed
     * @param {string} input['transcribeCallBackUrl'] (optional) Transcription parameters will be
     * sent here upon completion
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static groupCall(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.from === null || input.from === undefined) {
            const _err = { errorMessage: 'The property `from` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.to === null || input.to === undefined) {
            const _err = { errorMessage: 'The property `to` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.url === null || input.url === undefined) {
            const _err = { errorMessage: 'The property `url` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.groupConfirmKey === null || input.groupConfirmKey === undefined) {
            const _err = { errorMessage: 'The property `groupConfirmKey` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.groupConfirmFile === null || input.groupConfirmFile === undefined) {
            const _err = { errorMessage: 'The property `groupConfirmFile` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/calls/groupcall.{ResponseType}'}`;

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
            From: input.from,
            To: input.to,
            Url: input.url,
            GroupConfirmKey: input.groupConfirmKey,
            GroupConfirmFile: (input.groupConfirmFile !== null) ? input.groupConfirmFile : null,
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
     * A list of calls associated with your Message360 account
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['responseType'] Response type format xml or json
     * @param {int} input['page'] (optional) The page count to retrieve from the total results in
     * the collection. Page indexing starts at 1.
     * @param {int} input['pageSize'] (optional) Number of individual resources listed in the
     * response per page
     * @param {string} input['to'] (optional) Filter calls that were sent to this 10-digit number
     * (E.164 format).
     * @param {string} input['from'] (optional) Filter calls that were sent from this 10-digit
     * number (E.164 format).
     * @param {string} input['dateCreated'] (optional) Return calls that are from a specified date.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static listCalls(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/calls/listcalls.{ResponseType}'}`;

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
            Page: (input.page !== null) ? input.page : 1,
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
     * Initiate an outbound Ringless Voicemail through message360.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['from'] A valid message360 Voice enabled number (E.164 format) that
     * will be initiating the phone call.
     * @param {string} input['rVMCallerId'] A required secondary Caller ID for RVM to work.
     * @param {string} input['to'] A valid number (E.164 format) that will receive the phone call.
     * @param {string} input['voiceMailURL'] The URL requested once the RVM connects. A set of
     * default parameters will be sent here.
     * @param {string} input['responseType'] Response type format xml or json
     * @param {HttpActionEnum} input['method'] (optional) Specifies the HTTP method used to request
     * the required URL once call connects.
     * @param {string} input['statusCallBackUrl'] (optional) URL that can be requested to receive
     * notification when call has ended. A set of
     * default parameters will be sent here once the
     * call is finished.
     * @param {HttpActionEnum} input['statsCallBackMethod'] (optional) Specifies the HTTP method
     * used to request the required
     * StatusCallBackUrl once call connects.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static sendRinglessVM(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.from === null || input.from === undefined) {
            const _err = { errorMessage: 'The property `from` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.rVMCallerId === null || input.rVMCallerId === undefined) {
            const _err = { errorMessage: 'The property `rVMCallerId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.to === null || input.to === undefined) {
            const _err = { errorMessage: 'The property `to` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.voiceMailURL === null || input.voiceMailURL === undefined) {
            const _err = { errorMessage: 'The property `voiceMailURL` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/calls/makervm.{ResponseType}'}`;

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
            From: input.from,
            RVMCallerId: input.rVMCallerId,
            To: input.to,
            VoiceMailURL: input.voiceMailURL,
            Method: (input.method !== null) ? input.method : 'GET',
            StatusCallBackUrl: input.statusCallBackUrl,
            StatsCallBackMethod: (input.statsCallBackMethod !== null) ? input.statsCallBackMethod : null,
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
     * Retrieve a single voice call’s information by its CallSid.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['callsid'] The unique identifier for the voice call.
     * @param {string} input['responseType'] Response type format xml or json
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static viewCall(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.callsid === null || input.callsid === undefined) {
            const _err = { errorMessage: 'The property `callsid` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/calls/viewcalls.{ResponseType}'}`;

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
     * Retrieve a single voice call’s information by its CallSid.
     *
     * @param {string} callSid The unique identifier for the voice call.
     * @param {string} responseType Response type format xml or json
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static viewCallDetail(callSid, responseType, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (callSid === null || callSid === undefined) {
            const _err = { errorMessage: 'The parameter `callSid` is a required parameter and cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/calls/viewcalldetail.{ResponseType}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            ResponseType: responseType,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'message360-api',
        };

        // prepare form data
        const _form = {
            callSid,
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

module.exports = CallController;
