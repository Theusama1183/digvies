const response = require('../../utils/response');
const { sendSMS } = require('../../services/sms');
const generateRandomNumber = require('../../utils/generateRandomNumber');
const dayjs = require('dayjs');
const ejs = require('ejs');

const sendSmsForLoginOtp = ({ userDb }) =>async (user) => {
  let otp = generateRandomNumber();
  let expires = dayjs();
  expires = expires.add(6, 'hour').toISOString();
  await userDb.updateOne({ _id :user.id }, {
    loginOTP: {
      code: otp,
      expireTime: expires 
    } 
  });
  let updatedUser = await userDb.findOne({
    _id:user.id,
    isActive : true,
    isDeleted : false,
  });
  let renderData = { ...updatedUser };
  const msg = await ejs.renderFile(`${__basedir}/views/sms/OTP/html.ejs`, renderData);
  let smsObj = {
    to:updatedUser.mobileNo,
    message:msg
  };
  try {
    let info = await sendSMS(smsObj);
    return response.success(info);
  } catch (error) {
    return response.failure(error);
  }
};

module.exports = sendSmsForLoginOtp;