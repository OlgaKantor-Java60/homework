import { occurrences } from "./occurrences.js";

export function isAnagram(string, anagram) {
  //takes 2 parameters: string and anagram
  //returns true if parametr anagram conteins the same letters as the given string
  //  with the same counters of occurrences
  //otherwise false
  const lettersStr = Array.from(string);
  const lettersAnag = Array.from(anagram);
  const occ = {string: occurrences(lettersStr), testingAnagrem: occurrences(lettersAnag)}
  const jsonOccStr = JSON.stringify(occ.string);
  const jsonOccAnag = JSON.stringify(occ.testingAnagrem);
  return jsonOccStr === jsonOccAnag;
}

//***
//without sort()
//only one object

