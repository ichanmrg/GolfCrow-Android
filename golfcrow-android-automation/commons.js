const isInternalBuild = false
const isForPhilippines = true
const isPrivacyMode = false

const faker = require('faker');
const dateformat = require('dateformat')
const now = new Date()


const SHORT_WAIT = 5;

//Environment Details
const OS = 'Android'

var BUNDLE_ID,APP_NAME
if (isInternalBuild)
{
    BUNDLE_ID = 'com.fabforedev.golfcrow.internal'
    APP_NAME = 'GolfCrow Internal'
}
else
{
    BUNDLE_ID = 'com.fabforedev.golfcrow'
    APP_NAME = 'GolfCrow'
}

const GC_ID_LOCATOR = '#'+BUNDLE_ID+':id/'

//Names
const FIRST_NAME = faker.name.firstName();
const LAST_NAME = faker.name.lastName();

//Phone
var COUNTRY,COUNTRY_CODE,COUNTRY_ACRONYM
if (isForPhilippines)
{
    COUNTRY = 'Philippines'
    COUNTRY_CODE = '+'+'63'
    COUNTRY_ACRONYM = 'Philippines (PH)'
}
else
{
    COUNTRY = 'United States'
    COUNTRY_CODE = '+'+'1'
    COUNTRY_ACRONYM = 'United States (US)'
}


const PHONE_VALID = faker.helpers.replaceSymbolWithNumber("9#########").toString();
const PHONE_INVALID = faker.random.number({min:0, max:99999999}).toString();

//Credentials
const PASSWORD_INVALID = 'qwert'
const PASSWORD_VALID = 'qwerty1'
const USERNAME = 'GolfCrow+'+dateformat(now,"ddmmyyyyhMMssTT")
const EMAIL_VALID = USERNAME+'@qa.sourcepad.com'
const EMAIL_INVALID = USERNAME+'.qa.sourcepad.com'

//GHIN
const GHIN = faker.helpers.replaceSymbolWithNumber("#######");


/*
Exports
*/

exports.APP_NAME = APP_NAME
exports.OS = OS

exports.SHORT_WAIT = SHORT_WAIT
exports.BUNDLE_ID = BUNDLE_ID
exports.GC_ID_LOCATOR = GC_ID_LOCATOR

exports.FIRST_NAME = FIRST_NAME
exports.LAST_NAME = LAST_NAME

exports.COUNTRY = COUNTRY
exports.COUNTRY_CODE = COUNTRY_CODE
exports.COUNTRY_ACRONYM = COUNTRY_ACRONYM

exports.PHONE_VALID = PHONE_VALID
exports.PHONE_INVALID = PHONE_INVALID
exports.PASSWORD_INVALID = PASSWORD_INVALID
exports.PASSWORD_VALID = PASSWORD_VALID
exports.EMAIL_VALID = EMAIL_VALID
exports.EMAIL_INVALID = EMAIL_INVALID

exports.GHIN = GHIN