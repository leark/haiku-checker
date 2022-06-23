export default class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  // returns true if all three lines are present
  lineCount() {
    if (
      this.line1.length > 0 &&
      this.line2.length > 0 &&
      this.line3.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  countSyllables(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    word = word.toLowerCase();
    const chars = word.split('');

    let numVowels = 0;
    let previousLetter = chars[0];
    // previousLetter = s
    // s e a s o n
    // starting the loop at e
    for (let i = 1; i < chars.length; i++) {
      let isCurrentCharVowel = false;
      // rule 1
      if (vowels.includes(chars[i])) {
        numVowels++;
        isCurrentCharVowel = true;
      }
      // rule 2
      if (isCurrentCharVowel && vowels.includes(previousLetter)) {
        numVowels--;
      }
      previousLetter = chars[i];
    }
    return numVowels;
  }

  countSyllablesInLine(line) {
    // uses countSyllables
  }

  isThisProperHaiku() {
    // uses countSyllablesInLine on line1,2,3
    if (this.lineCount()) {
      return (
        this.countSyllablesInLine(this.line1) &&
        this.countSyllablesInLine(this.line2) &&
        this.countSyllablesInLine(this.line3)
      );
    }
    return false;
  }
}

/*


constructor
  option 1
    line1
    line2
    line3
  
  option 2
    words - example "haiku" (2 syllables) - need to pass "haiku" trough a function (to be written) to check against the 7 US syllable rules. Outcome = totalSyllables
    line - example: line 1: this is a haiku (5 syllables) - need to pass these words through same function as above to identify totalSyllables, then trough another function to confirm line1 requirement of line1Syllables === 5

1. check if poem is 3 lines
2. check syllable for line 1 and 3 *cause they're same
3. check syllable for line 2


check if word has correct number of syllables
  method to count syllables in a word
    countSyllables()


poem has three lines.
first line: 5 syllables
second line: 7 syllables
third line: 5 syllables

Your logic should verify English syllable rules (and exceptions) one at a time. 

If you successfully complete a Haiku checker, continue to build out your application to randomly generate haikus.

*/
