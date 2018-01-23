import Command from "./Command";
import Socket from "../socket/Socket";
import RoomRepository from "../db/RoomRepository";

class LookCommand extends Command {
  get cmd() {
    return 'look';
  }

  execute(user, args) {
    let room = RoomRepository.get(user.room);
    // console.log(room);
    let data = {
      cmd: this.cmd,
      desc: room.description,
      exits: room.exits
    };
    Socket.emit(user, data);
  }
}

export default new LookCommand();