class SocketHandler {

  constructor() {
    console.log("SocketHandler Created");
  }

  handleEvent(socket) {
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  }

}

export default new SocketHandler();