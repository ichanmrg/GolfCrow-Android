/// <reference path="../../steps.d.ts" />
const commons = require('../../commons.js');

Feature('GolfCrow: Sign-in');

Scenario('Check if sign-in page is loaded', (I) => {
  I.click(commons.GC_ID_LOCATOR+'buttonSignIn')
  I.see('Sign In')
});

Scenario('Sign-in with valid credentials', (I) => {
  I.fillField(commons.GC_ID_LOCATOR+'editTextNumber',commons.PHONE_VALID)
  I.fillField(commons.GC_ID_LOCATOR+'editTextPassword',commons.PASSWORD_VALID)
  I.click(commons.GC_ID_LOCATOR+'buttonSignIn')
});

Scenario('User to see Golf and Crow tabs and contents after sign-in.', (I) => {
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


