import Command from "./Command";
import RoomRepository from "../db/RoomRepository";
import Socket from "../socket/Socket";
import LookCommand from "./LookCommand";

class GoCommand extends Command {
  get cmd() {
    return 'go';
  }

  execute(user, args) {
    console.log('executing go command', args);
    let dir = args[0];

    let room = RoomRepository.get(user.room);
    for (let exit of room.exits) {
      if (exit.dir === dir) {
        let nextRoom = RoomRepository.get(exit.path);
        user.room = nextRoom.path;

        let data = {
          cmd: this.cmd,
          desc: "Enter next room: " + nextRoom.path
        };
        Socket.emit(user, data);
        LookCommand.execute(user);
      }
    }
  }
}

export default new GoCommand();