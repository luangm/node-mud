import village from "../domain/map/village";

/**
 * Singleton Room Repo
 */
class RoomRepository {

  constructor() {
    this._repo = {};

    for (let room of Object.values(village)) {
      this._repo[room.path] = room;
    }

    console.log(this._repo);
  }

  get(path) {
    return this._repo[path];
  }
}

export default new RoomRepository();