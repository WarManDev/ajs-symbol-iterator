export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(personage) {
    if (this.members.has(personage)) {
      throw new Error('Данный персонаж уже существует');
    } else {
      this.members.add(personage);
    }
  }

  addAll(...personage) {
    personage.forEach((item) => this.members.add(item));
  }

  toArray() {
    return [...this.members];
  }

  [Symbol.iterator]() {
    const entries = this.toArray();
    let index = 0;
    let result;

    return {
      next() {
        if (index < entries.length) {
          result = {
            value: entries[index],
            done: true,
          };
        } else {
          result = {
            value: undefined,
            done: false,
          };
        }

        index += 1;
        return result;
      },
    };
  }
}
