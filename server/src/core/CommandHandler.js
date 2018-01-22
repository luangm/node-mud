/**
 * Command Handler is a global singleton that takes in a text command and parse it to individual command and executes it.
 * The command handler upon creation, registers all the known commands.
 */
class CommandHandler {

  constructor() {
    this._cmdRegistry = {};
  }

  register(cmd) {
    this._cmdRegistry[cmd.cmd] = cmd;
  }


}

export default new CommandHandler();