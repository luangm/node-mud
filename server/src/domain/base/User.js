import Character from "./Character";

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

  get socket() {
    return this._socket;
  }

  set socket(val) {
    this._socket = val;
  }
}