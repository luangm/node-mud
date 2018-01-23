import Room from "../../base/Room";

export default class VillageRoom1 extends Room {

  get path() {
    return '/village/room1';
  }

  get name() {
    return 'Room 1'
  }

  get exits() {
    return [{
      dir: 'north',
      path: '/village/start'
    }]
  }

}