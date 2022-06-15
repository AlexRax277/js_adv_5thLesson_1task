import SubCharacter from '../subClasses';
import Character from '../mainClass';

test('throw error Character', () => {
  expect(() => { new Character('P', 'Zombie'); }).toThrow('Incorrect data-input!');
});

test.each([
  ['Paul', 'Bowman', {
    name: 'Paul', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  }],
  ['Hue', 'Swordsman', {
    name: 'Hue', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  }],
  ['Carl', 'Magician', {
    name: 'Carl', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  }],
  ['Mickey', 'Daemon', {
    name: 'Mickey', type: 'Daemon', health: 100, level: 1, attack: 25, defence: 25,
  }],
  ['Robert', 'Undead', {
    name: 'Robert', type: 'Undead', health: 100, level: 1, attack: 40, defence: 10,
  }],
  ['Nick', 'Zombie', {
    name: 'Nick', type: 'Zombie', health: 100, level: 1, attack: 10, defence: 40,
  }],
])('basic test', (name, type, expectedResult) => {
  const result = new SubCharacter(name, type);
  expect(result).toEqual(expectedResult);
});
