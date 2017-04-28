/**
  * @module message360
  *
  * message360 API version 3
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const ShortCodeController = require('./Controllers/ShortCodeController');
const ConferenceController = require('./Controllers/ConferenceController');
const NumberVerificationController = require('./Controllers/NumberVerificationController');
const WebRTCController = require('./Controllers/WebRTCController');
const CallController = require('./Controllers/CallController');
const SubAccountController = require('./Controllers/SubAccountController');
const AddressController = require('./Controllers/AddressController');
const EmailController = require('./Controllers/EmailController');
const SMSController = require('./Controllers/SMSController');
const RecordingController = require('./Controllers/RecordingController');
const CarrierController = require('./Controllers/CarrierController');
const PhoneNumberController = require('./Controllers/PhoneNumberController');
const TranscriptionController = require('./Controllers/TranscriptionController');
const UsageController = require('./Controllers/UsageController');
const AccountController = require('./Controllers/AccountController');
const ShortCodeTestResponseModel = require('./Models/ShortCodeTestResponseModel');
const MessageModel = require('./Models/MessageModel');
const IfMachineEnum = require('./Models/IfMachineEnum');
const HttpActionEnum = require('./Models/HttpActionEnum');
const DataModel = require('./Models/DataModel');
const AudioDirectionEnum = require('./Models/AudioDirectionEnum');
const MergeNumberStatusEnum = require('./Models/MergeNumberStatusEnum');
const ActivateStatusEnum = require('./Models/ActivateStatusEnum');
const SendEmailAsEnum = require('./Models/SendEmailAsEnum');
const StatusEnum = require('./Models/StatusEnum');
const ProductCodeEnum = require('./Models/ProductCodeEnum');
const NumberTypeEnum = require('./Models/NumberTypeEnum');
const DirectionEnum = require('./Models/DirectionEnum');
const InterruptedCallStatusEnum = require('./Models/InterruptedCallStatusEnum');
const SendShortCodeTestResponseModel = require('./Models/SendShortCodeTestResponseModel');
const TemplateDataModel = require('./Models/TemplateDataModel');
const Message360Model = require('./Models/Message360Model');
const AudioFormatEnum = require('./Models/AudioFormatEnum');
const Data17Model = require('./Models/Data17Model');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of message360
    Configuration,
    Environments,
    // controllers of message360
    ShortCodeController,
    ConferenceController,
    NumberVerificationController,
    WebRTCController,
    CallController,
    SubAccountController,
    AddressController,
    EmailController,
    SMSController,
    RecordingController,
    CarrierController,
    PhoneNumberController,
    TranscriptionController,
    UsageController,
    AccountController,
    // models of message360
    ShortCodeTestResponseModel,
    MessageModel,
    IfMachineEnum,
    HttpActionEnum,
    DataModel,
    AudioDirectionEnum,
    MergeNumberStatusEnum,
    ActivateStatusEnum,
    SendEmailAsEnum,
    StatusEnum,
    ProductCodeEnum,
    NumberTypeEnum,
    DirectionEnum,
    InterruptedCallStatusEnum,
    SendShortCodeTestResponseModel,
    TemplateDataModel,
    Message360Model,
    AudioFormatEnum,
    Data17Model,
    // exceptions of message360
    APIException,
};

module.exports = initializer;
