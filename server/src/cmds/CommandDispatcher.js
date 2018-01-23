/**
 * Command Dispatcher is a global singleton that takes in a text command and parse it to individual command and executes it.
 * The command handler upon creation, registers all the known commands.
 */
import LookCommand from "./LookCommand";
import GoCommand from "./GoCommand";

class CommandDispatcher {

  constructor() {
    this._cmdRegistry = {};
    this._cmdRegistry['look'] = LookCommand;
    this._cmdRegistry['go'] = GoCommand;
  }

  register(cmd) {
    this._cmdRegistry[cmd.cmd] = cmd;
  }

  dispatch(cmd, user) {
    console.log("Dispatching cmd", cmd, user);
    let array = cmd.split(' ');
    let first = array[0];
    if (this._cmdRegistry[first]) {
      if (array.length > 1) {
        let args = array.splice(1);
        this._cmdRegistry[first].execute(user, args);
      } else {
        this._cmdRegistry[first].execute(user);
      }
    }
  }

}

export default new CommandDispatcher();