const express = require('express');
const router = express.Router();
const { auth } = require('../../../middleware');
const authController = require('../../../controller/client/v1/authentication');
const { PLATFORM } =  require('../../../constants/authConstant');  
router.route('/register').post(authController.register);
router.route('/send_login_otp').post(authController.sendOtpForLogin);
router.route('/login_with_otp').post(authController.loginWithOTP);
router.route('/logout').post(auth(PLATFORM.CLIENT),authController.logout);
router.route('/push-notification/addPlayerId').post(authController.addPlayerId);
router.route('/push-notification/removePlayerId').post(authController.removePlayerId);

module.exports = router;
