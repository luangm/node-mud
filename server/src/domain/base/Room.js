export default class Room {

  get path() {
    throw new Error('Should not call Room.path');
  }

  get name() {
    throw new Error('Should not call Room.name');
  }

  get exits() {
    return [];
  }
}