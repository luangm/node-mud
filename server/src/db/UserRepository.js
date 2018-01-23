import User from "../domain/base/User";

/**
 * Singleton User Repo keep tracks of all users
 */
class UserRepository {

  constructor() {
    this._repo = {};
    this._sockets = {};
  }

  addOrGet(id, options) {
    let existing = this._repo[id];
    if (existing == null) {
      existing = new User(id, options)
    }
    return existing;
  }

  socket(socketId, user) {
    this._sockets[socketId] = user;
    user.socket = socketId;
  }

  getBySocket(socketId) {
    return this._sockets[socketId];
  }
}

export default new UserRepository();