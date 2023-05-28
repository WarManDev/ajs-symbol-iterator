import Team from '../Team';
import Character from '../character';

test('Проверка итератора', () => {
  const personage1 = new Character('Surik', 'Zombie');
  const personage2 = new Character('Surik', 'Bowman');
  const team = new Team();
  team.addAll(personage1, personage2, personage2);
  const iterator = team[Symbol.iterator]();

  expect(iterator.next().value).toEqual(personage1);
  expect(iterator.next().value).toEqual(personage2);
  expect(iterator.next().value).toEqual(undefined);
});

test('Проверка метода addAll', () => {
  const personage1 = new Character('Surik', 'Zombie');
  const personage2 = new Character('Surik', 'Bowman');
  const team = new Team();
  team.addAll(personage1, personage2, personage2);
  expect(team.members).toContain(personage1, personage2);
});

test('Проверка метода add', () => {
  const personage1 = new Character('Surik', 'Zombie');
  const personage2 = new Character('Surik', 'Bowman');
  const team = new Team();
  team.add(personage1);
  team.add(personage2);
  expect(team.members).toContain(personage1, personage2);
});

test('Проверка метода add на ошибку', () => {
  expect(() => {
    const personage1 = new Character('Surik', 'Zombie');
    const team = new Team();
    team.add(personage1);
    team.add(personage1);
  }).toThrow('Данный персонаж уже существует');
});

test('Проверка метода toArray', () => {
  const personage1 = new Character('Surik', 'Zombie');
  const personage2 = new Character('Surik', 'Bowman');
  const team = new Team();
  team.addAll(personage1, personage2);
  expect(team.toArray()).toEqual([personage1, personage2]);
});
