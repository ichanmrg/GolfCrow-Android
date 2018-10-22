/// <reference path="../../steps.d.ts" />
const commons = require('../../commons.js');

Feature('GolfCrow: Sign-out');

Scenario('Sign-out of GolfCrow.', (I) => {
  I.click('Settings')
  I.click('Account')
  I.click('Sign Out')
  I.click('YES')
  I.wait(commons.SHORT_WAIT)
  I.see('SIGN IN')
});