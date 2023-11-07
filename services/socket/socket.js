const socketDataDb = require('../../data-access/socketDataDb');

module.exports = function (httpServer){
  const io = require('socket.io')(httpServer,{ cors:{ origin: '*' } });
  io.on('connection', (socket) => {
    socket.on('event', async (data) => {
      if (data.message){
        const user = await socketDataDb.findOne({ message:data.message });
        if (user){
          await socketDataDb.updateOne({ message:data.message },{ socketId:socket.id });
        } else {
          const input = new socketData({
            message:data.message,
            socketId: socket.id
          });
          await socketDataDb.create(input);
        }
      } else {
        const input = new socketDataDb({ socketId: socket.id });
        await socketDataDb.create(input);
      }
    });
  });
};