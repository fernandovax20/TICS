const express =  require('express');
const calculatorController = require('../controllers/calculator');

const router =  express.Router();

router.post('/remuneracionmensual',calculatorController.remuneracionmensual);
router.post('/apv',calculatorController.apv);

module.exports = router;
