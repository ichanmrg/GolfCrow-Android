/// <reference path="../../steps.d.ts" />
const commons = require('../../commons.js');

Feature('GolfCrow: Sign-up');

Scenario('Check if sign-up page is loaded.', (I) => {
  I.showAllCreds();
  I.click(commons.GC_ID_LOCATOR+'buttonSignUp')
  I.verifyUserPageLocation('Sign Up')
});

Scenario('Check if required fields are mandatory.', (I) => {
  I.click(commons.GC_ID_LOCATOR+'action_menu_done')
  I.verifyUserPageLocation('Sign Up')

  I.say("!! Let's fill the form with valid data first then play around with the values later. !!")
  I.fillOutGolfCrowSignUpWithValidValues()

});

Scenario('Sign-up with invalid number.', (I) => {
  I.fillField(commons.GC_ID_LOCATOR+'editTextNumber',commons.PHONE_INVALID);
  I.hideDeviceKeyboard();
  I.click(commons.GC_ID_LOCATOR+'action_menu_done')
  I.verifyUserPageLocation('Sign Up')
  I.fillField(commons.GC_ID_LOCATOR+'editTextNumber',commons.PHONE_VALID);
  I.hideDeviceKeyboard();
});

Scenario('Sign-up with invalid password.', (I) => {
  I.fillField(commons.GC_ID_LOCATOR+'editTextPassword',commons.PASSWORD_INVALID);
  I.hideDeviceKeyboard();
  I.click(commons.GC_ID_LOCATOR+'action_menu_done')
  I.verifyUserPageLocation('Sign Up')
  I.fillField(commons.GC_ID_LOCATOR+'editTextPassword',commons.PASSWORD_VALID);
  I.hideDeviceKeyboard();
});

Scenario('Sign-up with invalid email.', (I) => {
  I.fillField(commons.GC_ID_LOCATOR+'editTextEmail',commons.EMAIL_INVALID);
  I.hideDeviceKeyboard();
  I.click(commons.GC_ID_LOCATOR+'action_menu_done')
  I.verifyUserPageLocation('Sign Up')
  I.fillField(commons.GC_ID_LOCATOR+'editTextEmail',commons.EMAIL_VALID);
  I.hideDeviceKeyboard();
});

Scenario('Sign-up with valid credentials.', (I) => {
  I.click(commons.GC_ID_LOCATOR+'action_menu_done')
});

Scenario('User to see "Privacy Mode".', (I) => {
  I.wait(commons.SHORT_WAIT)
  I.see('PRIVACY MODE')
});

Scenario('User to see "Enter Confirmation Code".', (I) => {
  I.click(commons.GC_ID_LOCATOR+'action_next')
  I.see('Enter Confirmation Code')
});

Scenario('User to see "You have successfully signed up!"', (I) => {
  I.click(commons.GC_ID_LOCATOR+'action_next')
  I.see('You have successfully signed up!')
});

Scenario('Import contacts after sign-up.', (I) => {
  I.click('Import Contacts')
  I.click('ALLOW')
  I.click('Import Golf Crow Contacts')
});


Scenario('User to see Golf and Crow tabs and contents after import contacts.', (I) => {
  I.click('CROW')
  I.see('Match Records')
  I.see('Player Comparison')
  I.see('Player Stats')
  I.see('Match Leaders')
  I.see('Score Leaders')
  I.see('Junk Leaders')

  I.click('GOLF')
  I.see('Create Match')
  I.see('Match List')
  I.see('Courses')
  I.see('Players')
  I.see('Games')
  I.see('Settings')
});