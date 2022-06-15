export default class Character {
  static #shortest_name = 2;

  static #longest_name = 10;

  static #types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

  constructor(name, type) {
    this.name = name;
    this.type = type;
    if (this.name.length < Character.#shortest_name
      || name.length > Character.#longest_name
      || !Character.#types.includes(type)) {
      throw new Error('Incorrect data-input!');
    }
  }
}
