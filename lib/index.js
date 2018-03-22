/**
  * @module ytel
  *
  * Ytel API version 3
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const WebRTCController = require('./Controllers/WebRTCController');
const SharedShortCodeController = require('./Controllers/SharedShortCodeController');
const ConferenceController = require('./Controllers/ConferenceController');
const PhoneNumberController = require('./Controllers/PhoneNumberController');
const TranscriptionController = require('./Controllers/TranscriptionController');
const RecordingController = require('./Controllers/RecordingController');
const EmailController = require('./Controllers/EmailController');
const SMSController = require('./Controllers/SMSController');
const CallController = require('./Controllers/CallController');
const CarrierController = require('./Controllers/CarrierController');
const AddressController = require('./Controllers/AddressController');
const SubAccountController = require('./Controllers/SubAccountController');
const AccountController = require('./Controllers/AccountController');
const UsageController = require('./Controllers/UsageController');
const ShortCodeController = require('./Controllers/ShortCodeController');
const PostCardController = require('./Controllers/PostCardController');
const LetterController = require('./Controllers/LetterController');
const AreaMailController = require('./Controllers/AreaMailController');
const ErrorsModel = require('./Models/ErrorsModel');
const MessageModel = require('./Models/MessageModel');
const DirectionEnum = require('./Models/DirectionEnum');
const NumberTypeEnum = require('./Models/NumberTypeEnum');
const StatusEnum = require('./Models/StatusEnum');
const SendEmailAsEnum = require('./Models/SendEmailAsEnum');
const ActivateStatusEnum = require('./Models/ActivateStatusEnum');
const MergeNumberStatusEnum = require('./Models/MergeNumberStatusEnum');
const AudioDirectionEnum = require('./Models/AudioDirectionEnum');
const ProductCodeEnum = require('./Models/ProductCodeEnum');
const HttpActionEnum = require('./Models/HttpActionEnum');
const IfMachineEnum = require('./Models/IfMachineEnum');
const TemplateDataModel = require('./Models/TemplateDataModel');
const InterruptedCallStatusEnum = require('./Models/InterruptedCallStatusEnum');
const AudioFormatEnum = require('./Models/AudioFormatEnum');
const ErrorModel = require('./Models/ErrorModel');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of ytel
    Configuration,
    Environments,
    // controllers of ytel
    WebRTCController,
    SharedShortCodeController,
    ConferenceController,
    PhoneNumberController,
    TranscriptionController,
    RecordingController,
    EmailController,
    SMSController,
    CallController,
    CarrierController,
    AddressController,
    SubAccountController,
    AccountController,
    UsageController,
    ShortCodeController,
    PostCardController,
    LetterController,
    AreaMailController,
    // models of ytel
    ErrorsModel,
    MessageModel,
    DirectionEnum,
    NumberTypeEnum,
    StatusEnum,
    SendEmailAsEnum,
    ActivateStatusEnum,
    MergeNumberStatusEnum,
    AudioDirectionEnum,
    ProductCodeEnum,
    HttpActionEnum,
    IfMachineEnum,
    TemplateDataModel,
    InterruptedCallStatusEnum,
    AudioFormatEnum,
    ErrorModel,
    // exceptions of ytel
    APIException,
};

module.exports = initializer;
