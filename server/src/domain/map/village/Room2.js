import Room from "../../base/Room";

export default class VillageRoom2 extends Room {

  get path() {
    return '/village/room2';
  }

  get name() {
    return 'Room 2'
  }

  get description() {
    return 'This is Room 2';
  }

  get exits() {
    return [{
      dir: 'south',
      path: '/village/start'
    }]
  }

}