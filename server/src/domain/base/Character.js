export default class Character {

  constructor() {
    this._name = "";
  }

  get age() {
    return 14;
  }

  // Charming
  get charisma() {
    return 0;
  }

  // Health + Regen
  get constitution() {
    return 0;
  }

  get description() {
    return "";
  }

  // Dodge
  get dexterity() {
    return 0;
  }

  // 精力, used to use special skills
  get energy() {
    return 0;
  }

  get exprience() {
    return 0;
  }

  // aka 内力，use the force to restore health or energy or stamina
  get force() {
    return 0;
  }

  get gender() {
    return 1;
  }

  // 气血, if drop below 0 is dead.
  get health() {
    return 0;
  }

  // Magic Power + Learn Speed
  get intelligence() {
    return 0;
  }

  // Affect many things
  get luck() {
    return 0;
  }

  get name() {
    return this._name;
  }

  // 体力, used up when attacking or lifting heavy stuff
  get stamina() {
    return 0;
  }

  // Attack Pow
  get strength() {
    return 0;
  }

  // Magic Def
  get will() {
    return 0;
  }

  get room() {
    return '';
  }

  go(room) {
    room = room || this.room;
    console.log("this user is going to", room);
  }
}