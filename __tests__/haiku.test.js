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
  test('count the vowels in the word', () => {
    expect(haiku.countSyllables('my')).toEqual(1);
  });

  // rule 2
  test('subtract one vowel from every diphthong (e.g. e in deep or a in season)', () => {
    expect(haiku.countSyllables('season')).toEqual(2);
  });

  // rule 3
  // test('Divide between two middle consonants.', () => {
  //   expect(haiku.countSyllables('happen')[1]).toEqual(2);
  // });

  test('My nose is runny has a total of 5 syllables', () => {
    expect(haiku.countSyllables('My')).toEqual(1);
    // this one requires us to check for silent e
    expect(haiku.countSyllables('nose')).toEqual(1);
    expect(haiku.countSyllables('is')).toEqual(1);
    expect(haiku.countSyllables('runny')).toEqual(2);
  });

  test('Eyes are puffy, red hue too has a total of 7 syllables', () => {
    // why is eyes only one syllable
    expect(haiku.countSyllables('Eyes')).toEqual(1);
    expect(haiku.countSyllables('are')).toEqual(1);
    expect(haiku.countSyllables('puffy')).toEqual(2);
    expect(haiku.countSyllables('red')).toEqual(1);
    expect(haiku.countSyllables('hue')).toEqual(1);
    expect(haiku.countSyllables('too')).toEqual(1);
  });

  test('Allergy season has a total of 7 syllables', () => {
    expect(haiku.countSyllables('Allergy')).toEqual(3);
    expect(haiku.countSyllables('season')).toEqual(2);
  });

  test('line 1 has total of 5 syllables', () => {
    expect(haiku.countSyllablesInLine(line1)).toEqual(5);
  });

  test('haiku is an haiku', () => {
    expect(haiku.isThisProperHaiku()).toEqual(true);
  });
});
