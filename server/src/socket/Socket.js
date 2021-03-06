import CommandDispatcher from "../cmds/CommandDispatcher";
import UserRepository from "../db/UserRepository";

class Socket {

  constructor() {
    console.log("SocketHandler Created");
    this._sockets = {};
  }

  connect(socket) {
    let self = this;

    console.log("Connect Socket", socket.id);
    let userId = socket.decoded_token.email;
    let user = UserRepository.addOrGet(userId, {room: '/village/start'});
    UserRepository.socket(socket.id, user);

    this._sockets[socket.id] = socket;

    socket.on('disconnect', function() {
      console.log('user disconnected', socket.id);
      delete self._sockets[socket.id];
    });

    socket.on('cmd', function(cmd) {
      CommandDispatcher.dispatch(cmd, user);
    });
  }

  emit(user, data) {
    this._sockets[user.socket].emit('msg', data);
  }
}

export default new Socket();