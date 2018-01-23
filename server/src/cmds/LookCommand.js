import Command from "./Command";
import Socket from "../socket/Socket";

class LookCommand extends Command {
  execute(user, args) {
    console.log('executing look command', args);
    Socket.emit('Looking');
  }
}

export default new LookCommand();