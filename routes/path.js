const express = require('express');
const router = express.Router();

const cartMainController = require('../controllers/cart-main');

router.post('/get-discount', cartMainController.getDiscount);
router.get('/get-promocode-discount', cartMainController.getPromocodeDiscount);

module.exports = router;
