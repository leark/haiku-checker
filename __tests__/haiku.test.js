import Haiku from '../src/haiku.js';

describe('Haiku', () => {
  let haiku;
  let line1;
  let line2;
  let line3;

  beforeEach(() => {
    line1 = 'My nose is runny';
    line2 = 'Eyes are puffy, red hue too';
    line3 = 'Allergy season';
    haiku = new Haiku(line1, line2, line3);
  });

  test('should correctly create a haiku object with given lines', () => {
    expect(haiku.line1).toEqual(line1);
    expect(haiku.line2).toEqual(line2);
    expect(haiku.line3).toEqual(line3);
  });

  test('should confirm completed haiku has three lines', () => {
    expect(haiku.lineCount()).toEqual(true);
    haiku.line3 = '';
    expect(haiku.lineCount()).toEqual(false);
  });

  // rule 1
  test('every syllable has a vowel', () => {
    expect(haiku.countSyllables('nose')).toEqual(1);
  });
});
