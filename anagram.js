export function isAnagram(string, anagram) {
    //takes two parameters: string  and anagram
    //returns true if parameter anagram contains the same letters as
    //the given string with the same counters of occurrences
    //otherwise false
    let result = false;
    if (string.length === anagram.length) {
      const letterOccurrences = getLetterOccurrences(string);
      console.log(letterOccurrences);
      
      result = isAnagramOccurrences(letterOccurrences, anagram);
    }
  
    return result;
  }
  function getLetterOccurrences(string) {
    //TODO update code with reduce callback function as one expression that is with no return statement
    return Array.from(string).reduce((acc, cur) => ({...acc, [cur] : acc[cur] ? acc[cur] + 1 : 1}), {})
  }

  function isAnagramOccurrences(letterOccurrences, anagram) {
    const res = Array.from(anagram).every(
      (letter) => --letterOccurrences[letter] >= 0
    );
    return res;
  }
  