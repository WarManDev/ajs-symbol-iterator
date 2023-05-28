import Character from '../character';

test.each([
  ['символы имя цифры', 'Ошибка! Имя должно быть строкой!', 123, 'Bowman'],
  ['один символ', 'Значение не соответствует', 'a', 'Bowman'],
  ['больше 10 символов', 'Значение не соответствует', 'aaaaaaaaaaa', 'Bowman'],
  ['не соответствует тип', 'Заданный персонаж не существует', 'aaaaaa', 'AAA'],
])('Проверка создания класса %s', (_, expected, paramName, paramType) => {
  expect(() => {
    const result = new Character(paramName, paramType);
    return result;
  }).toThrow(expected);
});
