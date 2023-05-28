import Zombie from '../Zombie';

test('Проверка метода levelUp', () => {
  const result = new Zombie('Surik');
  result.levelUp();
  expect(result).toEqual({
    name: 'Surik',
    type: 'Zombie',
    health: 100,
    level: 2,
    attack: 48,
    deffence: 12,
  });
});

test('Проверка метода levelUp Health = 0', () => {
  expect(() => {
    const result = new Zombie('Surik');
    result.health = 0;
    result.levelUp();
  }).toThrow('Нельзя повысить левел умершего');
});

test('Проверка метода levelUp', () => {
  const result = new Zombie('Surik');
  result.damage(5);
  expect(result.health).toBeCloseTo(95.5, 0);
});

test('Проверка метода levelUp Health = 0', () => {
  expect(() => {
    const result = new Zombie('Surik');
    result.health = 0;
    result.damage(5);
  }).toThrow('Нельзя повысить левел умершего');
});
