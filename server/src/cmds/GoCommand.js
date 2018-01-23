import Command from "./Command";
import RoomRepository from "../db/RoomRepository";
import Socket from "../socket/Socket";

class GoCommand extends Command {
  execute(user, args) {
    console.log('executing go command', args);
    console.log(user);
    let dir = args[0];

    let room = RoomRepository.get(user.room);
    for (let exit of room.exits) {
      if (exit.dir === dir) {
        let nextRoom = RoomRepository.get(exit.path);
        user.room = nextRoom.path;
        Socket.emit("Enter next room: " + nextRoom.path);
      }
    }
  }
}

export default new GoCommand();