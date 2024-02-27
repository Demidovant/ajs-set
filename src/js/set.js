class Character {
  constructor(player) {
    this.player = player;
  }
}

class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) {
      throw new Error(`Игрок ${member} уже есть в команде`);
    } else {
      this.members.add(member);
      return new Character(this.members);
    }
  }

  addAll(...args) {
    args.forEach((arg) => {
      this.members.add(arg);
    });
    return new Character(this.members);
  }

  toArray() {
    return [...this.members];
  }
}

export { Team, Character };
