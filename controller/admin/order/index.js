const orderDb = require('../../../data-access/orderDb');

const orderSchema = require('../../../validation/schema/order');

const createValidation = require('../../../validation')(orderSchema.createSchema);
const updateValidation = require('../../../validation')(orderSchema.updateSchema);
const filterValidation = require('../../../validation')(orderSchema.filterValidationSchema);
const addOrderUsecase = require('../../../use-case/order/addOrder')({
  orderDb,
  createValidation 
});
const findAllOrderUsecase = require('../../../use-case/order/findAllOrder')({
  orderDb,
  filterValidation
});
const getOrderCountUsecase = require('../../../use-case/order/getOrderCount')({
  orderDb,
  filterValidation
});
const getOrderUsecase = require('../../../use-case/order/getOrder')({
  orderDb,
  filterValidation
});
const updateOrderUsecase = require('../../../use-case/order/updateOrder')({
  orderDb,
  updateValidation 
});
const partialUpdateOrderUsecase = require('../../../use-case/order/partialUpdateOrder')({ orderDb });
const softDeleteOrderUsecase = require('../../../use-case/order/softDeleteOrder')({ orderDb });
const softDeleteManyOrderUsecase = require('../../../use-case/order/softDeleteManyOrder')({ orderDb });
const bulkInsertOrderUsecase = require('../../../use-case/order/bulkInsertOrder')({ orderDb });
const bulkUpdateOrderUsecase = require('../../../use-case/order/bulkUpdateOrder')({ orderDb });
const deleteOrderUsecase = require('../../../use-case/order/deleteOrder')({ orderDb });
const deleteManyOrderUsecase = require('../../../use-case/order/deleteManyOrder')({ orderDb });

const orderController = require('./order');

const addOrder = orderController.addOrder(addOrderUsecase);
const findAllOrder = orderController.findAllOrder(findAllOrderUsecase);
const getOrderCount = orderController.getOrderCount(getOrderCountUsecase);
const getOrderById = orderController.getOrder(getOrderUsecase);
const updateOrder = orderController.updateOrder(updateOrderUsecase);
const partialUpdateOrder = orderController.partialUpdateOrder(partialUpdateOrderUsecase);
const softDeleteOrder = orderController.softDeleteOrder(softDeleteOrderUsecase);
const softDeleteManyOrder = orderController.softDeleteManyOrder(softDeleteManyOrderUsecase);
const bulkInsertOrder = orderController.bulkInsertOrder(bulkInsertOrderUsecase);
const bulkUpdateOrder = orderController.bulkUpdateOrder(bulkUpdateOrderUsecase);
const deleteOrder = orderController.deleteOrder(deleteOrderUsecase);
const deleteManyOrder = orderController.deleteManyOrder(deleteManyOrderUsecase);

module.exports = {
  addOrder,
  findAllOrder,
  getOrderCount,
  getOrderById,
  updateOrder,
  partialUpdateOrder,
  softDeleteOrder,
  softDeleteManyOrder,
  bulkInsertOrder,
  bulkUpdateOrder,
  deleteOrder,
  deleteManyOrder,
};