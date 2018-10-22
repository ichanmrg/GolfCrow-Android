/// <reference path="../../steps.d.ts" />
const commons = require('../../commons.js');

Feature('GolfCrow: 4 Players, 7 Ways');

Scenario('Create 4 players, 7 ways match.', (I) => {
  I.click('Create Match')
  I.click(commons.GC_ID_LOCATOR+'buttonGame')
  I.click('5 Ways');
  I.click(commons.GC_ID_LOCATOR+'buttonCourse')
  I.click(commons.GC_ID_LOCATOR+'buttonAdd')
});


