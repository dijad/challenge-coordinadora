const { Router } = require('express')
const router = Router()

const challengeCtrl = require('../controller/challenge.controller.js')

router.get('/', challengeCtrl.displayUi);
router.post('/average', challengeCtrl.average);
router.post('/string-manipulation', challengeCtrl.manipulateString);
router.post('/sum-array', challengeCtrl.sumArray);
router.post('/transform-array', challengeCtrl.transformArray);
router.post('/mycows', challengeCtrl.countMyCows);
router.post('/array-score', challengeCtrl.scoreArray);
router.get('/tracking/:code', challengeCtrl.tracking);
router.get('/docs', challengeCtrl.showDocs);

module.exports = router;