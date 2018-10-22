
'use strict';
// in this file you can append custom step methods to 'this' object
const commons = require('./commons.js');
const assert = require('assert')
module.exports = function() {
  return actor({

    fillOutGolfCrowSignUpWithValidValues: function()
    {
      this.click(commons.GC_ID_LOCATOR+'textView_selectedCountry');
      this.fillField(commons.GC_ID_LOCATOR+'editText_search',commons.COUNTRY);
      this.hideDeviceKeyboard();
      this.click(commons.COUNTRY_ACRONYM);
      this.see(commons.COUNTRY_CODE);
      this.fillField(commons.GC_ID_LOCATOR+'editTextNumber',commons.PHONE_VALID);
      this.hideDeviceKeyboard();
      this.fillField(commons.GC_ID_LOCATOR+'editTextPassword',commons.PASSWORD_VALID);
      this.hideDeviceKeyboard();
      this.fillField(commons.GC_ID_LOCATOR+'editTextFName',commons.FIRST_NAME);
      this.hideDeviceKeyboard();
      this.fillField(commons.GC_ID_LOCATOR+'editTextLName',commons.LAST_NAME);
      this.hideDeviceKeyboard();
      this.fillField(commons.GC_ID_LOCATOR+'editTextEmail',commons.EMAIL_VALID);
      this.hideDeviceKeyboard();
      this.fillField(commons.GC_ID_LOCATOR+'editTextGHIN',commons.GHIN);
      this.hideDeviceKeyboard();
    },

    verifyUserPageLocation: async function(pageTitle)
    {
      //var pageTitle = await this.grabTextFrom('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.TextView');
      this.see(pageTitle)
      this.say('!! '+ commons.APP_NAME + ' for '+ commons.OS + ' is in ' +pageTitle);
      //this.say(assert.equal(pageTitle,pageTitle))
    },

    showAllCreds: function()
    {
      this.say('App Name: ' + commons.APP_NAME)
      this.say('OS: ' + commons.OS)
      this.say('Country: ' + commons.COUNTRY)
      this.say('Country Code: ' + commons.COUNTRY_CODE)
      this.say('First Name: ' + commons.FIRST_NAME)
      this.say('Last Name: ' + commons.LAST_NAME)
      this.say('Phone Number: ' + commons.PHONE_VALID)
      this.say('Password: '+ commons.PASSWORD_VALID)
      this.say('Email: '+ commons.EMAIL_VALID)
      this.say('GHIN: ' + commons.GHIN)
    },

    addGolfCrowContact: function()
    {

    }

  });
}
