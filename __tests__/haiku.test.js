import Haiku from '../src/js/haiku.js';

describe('Haiku', () => {
  let haiku;

  beforeEach(() => {
    haiku = new haiku();
  });

  test('should correctly create a haiku object', () => {
    expect(haiku).toEqual(haiku);
  });
});
