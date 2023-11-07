module.exports = (pushNotification) => {

  let newPushNotification = { 
    userId: pushNotification.userId,
    deviceId: pushNotification.deviceId,
    playerId: pushNotification.playerId,
    isActive: pushNotification.isActive,
    isDeleted: pushNotification.isDeleted,
  };

  // remove undefined values
  Object.keys(newPushNotification).forEach(key => newPushNotification[key] === undefined && delete newPushNotification[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newPushNotification) => {
   *   if (!newPushNotification.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newPushNotification) 
   */

  return Object.freeze(newPushNotification);
};
