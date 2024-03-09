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
    }
  }

  addAll(...args) {
    args.forEach((arg) => {
      this.members.add(arg);
    });
  }

  toArray() {
    return [...this.members];
  }
}

export { Team, Character };
