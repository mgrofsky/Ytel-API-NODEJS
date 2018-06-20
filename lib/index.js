/**
  * @module YtelAPILib
  *
  * Ytel API version 3
  */

'use strict';

const Configuration = require('./configuration');
const ShortCodeController = require('./Controllers/ShortCodeController');
const AreaMailController = require('./Controllers/AreaMailController');
const PostCardController = require('./Controllers/PostCardController');
const LetterController = require('./Controllers/LetterController');
const CallController = require('./Controllers/CallController');
const PhoneNumberController = require('./Controllers/PhoneNumberController');
const SMSController = require('./Controllers/SMSController');
const SharedShortCodeController = require('./Controllers/SharedShortCodeController');
const ConferenceController = require('./Controllers/ConferenceController');
const CarrierController = require('./Controllers/CarrierController');
const EmailController = require('./Controllers/EmailController');
const AccountController = require('./Controllers/AccountController');
const SubAccountController = require('./Controllers/SubAccountController');
const AddressController = require('./Controllers/AddressController');
const RecordingController = require('./Controllers/RecordingController');
const TranscriptionController = require('./Controllers/TranscriptionController');
const UsageController = require('./Controllers/UsageController');
const GroupConfirmFileEnum = require('./Models/GroupConfirmFileEnum');
const AudioUrlEnum = require('./Models/AudioUrlEnum');
const Status24Enum = require('./Models/Status24Enum');
const FileformatEnum = require('./Models/FileformatEnum');
const TypeEnum = require('./Models/TypeEnum');
const AudioFormatEnum = require('./Models/AudioFormatEnum');
const InterruptedCallStatusEnum = require('./Models/InterruptedCallStatusEnum');
const IfMachineEnum = require('./Models/IfMachineEnum');
const MActivateEnum = require('./Models/MActivateEnum');
const ActivateEnum = require('./Models/ActivateEnum');
const HttpActionEnum = require('./Models/HttpActionEnum');
const AudioDirectionEnum = require('./Models/AudioDirectionEnum');
const SendEmailAsEnum = require('./Models/SendEmailAsEnum');
const MergeNumberEnum = require('./Models/MergeNumberEnum');
const PlayDtmfDirectionEnum = require('./Models/PlayDtmfDirectionEnum');
const Numbertype16Enum = require('./Models/Numbertype16Enum');
const MergeNumberStatusEnum = require('./Models/MergeNumberStatusEnum');
const ProductCode27Enum = require('./Models/ProductCode27Enum');
const ActivateStatusEnum = require('./Models/ActivateStatusEnum');
const StatusEnum = require('./Models/StatusEnum');
const NumberTypeEnum = require('./Models/NumberTypeEnum');
const DirectionEnum = require('./Models/DirectionEnum');
const ProductCodeEnum = require('./Models/ProductCodeEnum');
const MError = require('./Models/MError');
const Errors = require('./Models/Errors');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of YtelAPILib
    Configuration,
    // controllers of YtelAPILib
    ShortCodeController,
    AreaMailController,
    PostCardController,
    LetterController,
    CallController,
    PhoneNumberController,
    SMSController,
    SharedShortCodeController,
    ConferenceController,
    CarrierController,
    EmailController,
    AccountController,
    SubAccountController,
    AddressController,
    RecordingController,
    TranscriptionController,
    UsageController,
    // models of YtelAPILib
    GroupConfirmFileEnum,
    AudioUrlEnum,
    Status24Enum,
    FileformatEnum,
    TypeEnum,
    AudioFormatEnum,
    InterruptedCallStatusEnum,
    IfMachineEnum,
    MActivateEnum,
    ActivateEnum,
    HttpActionEnum,
    AudioDirectionEnum,
    SendEmailAsEnum,
    MergeNumberEnum,
    PlayDtmfDirectionEnum,
    Numbertype16Enum,
    MergeNumberStatusEnum,
    ProductCode27Enum,
    ActivateStatusEnum,
    StatusEnum,
    NumberTypeEnum,
    DirectionEnum,
    ProductCodeEnum,
    MError,
    Errors,
    // exceptions of YtelAPILib
    APIException,
};

module.exports = initializer;
