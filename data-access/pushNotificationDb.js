let PushNotification = require('../db/mongoDB/models/pushNotification');
let { 
  create,
  updateOne,
  updateMany,
  deleteOne,
  deleteMany,
  findOne,
  findMany,
  count,
  paginate,
} = require('../db/mongoDB/dbService')(PushNotification);

module.exports = {
  create,
  updateOne,
  updateMany,
  deleteOne,
  deleteMany,
  findOne,
  findMany,
  count,
  paginate,
};