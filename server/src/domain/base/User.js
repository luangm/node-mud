import Character from "./Character";
import RoomRepository from "../../db/RoomRepository";
import Socket from "../../socket/Socket";

export default class User extends Character {

  constructor(id, options) {
    super();
    this._id = id;
    this._room = options.room;
  }

  get id() {
    return this._id;
  }

  get room() {
    return this._room;
  }

  set room(val) {
    this._room = val;
  }

  go(room) {
    room = room || this.room;
    console.log("this user is going to", room);

    let roomObj = RoomRepository.get(room);

    if (roomObj != null) {
      this.room = roomObj.path;
      Socket.emit('Entering Room: ' + roomObj.name);
    }
  }
}