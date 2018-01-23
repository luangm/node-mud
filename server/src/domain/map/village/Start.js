import Room from "../../base/Room";

export default class VillageStart extends Room {

  get path() {
    return '/village/start';
  }

  get name() {
    return 'Start Room'
  }

  get description() {
    return 'This is the Start Room';
  }

  get exits() {
    return [{
      dir: 'south',
      path: '/village/room1'
    }, {
      dir: 'north',
      path: '/village/room2'
    }]
  }

}