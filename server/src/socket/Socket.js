import CommandDispatcher from "../cmds/CommandDispatcher";
import UserRepository from "../db/UserRepository";

class Socket {

  constructor() {
    console.log("SocketHandler Created");
    this._sockets = {};
  }

  connect(socket) {
    console.log("Connect Socket", socket.id);
    let userId = socket.decoded_token.email;
    let user = UserRepository.addOrGet(userId, {room: '/village/start'});
    UserRepository.socket(socket.id, user);

    this._sockets[socket.id] = socket;

    socket.on('disconnect', function(){
      delete this._sockets[socket.id];
      console.log('user disconnected');
    });

    socket.on('cmd', function(cmd) {
      CommandDispatcher.dispatch(cmd, user);
    });
  }

  emit(msg) {
    this.socket.emit('msg', msg);
  }
}

export default new Socket();