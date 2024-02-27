import { Team, Character } from '../set';

test('Проверка создания объекта на основе класса Character', () => {
  const person = new Character('Max');
  expect(person).toEqual({ player: 'Max' });
});

test('Проверка добавления игрока в команду - метод add()', () => {
  expect(() => {
    const team = new Team();
    team.add('Max');
  }).not.toThrow();
});

test('Проверка добавления игрока в команду - метод add() #2', () => {
  const team = new Team();
  team.add('Max');
  expect(team.members).toEqual(new Set(['Max']));
});

test('Проверка выброса ошибки при попытки дублирования игрока - метод add()', () => {
  expect(() => {
    const team = new Team();
    team.add('Max');
    team.add('Max');
  }).toThrow();
});

test('Проверка добавления произвольного количества игроков в команду - метод addAll()', () => {
  expect(() => {
    const team = new Team();
    team.addAll('Max', 'Max1', 'Max2', 'Max3');
  }).not.toThrow();
});

test('Проверка добавления произвольного количества игроков в команду - метод addAll() #2', () => {
  const expected = new Set(['Max', 'Max1', 'Max2', 'Max3']);
  const team = new Team();
  team.addAll('Max', 'Max1', 'Max2', 'Max3');
  expect(team.members).toEqual(expected);
});

test('Проверка преобразования Set в массив - метод toArray', () => {
  const team = new Team();
  expect(() => {
    team.toArray();
  }).not.toThrow();
});

test('Проверка преобразования Set в массив - метод toArray #2', () => {
  const expected = ['Max', 'Max1', 'Max2', 'Max3'];
  const team = new Team();
  team.addAll('Max', 'Max1', 'Max2', 'Max3');
  expect(team.toArray()).toEqual(expected);
});
