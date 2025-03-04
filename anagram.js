import { occurrences, fillObj } from "./occurrences.js";

export function isAnagram1(string, anagram) {
  //takes 2 parameters: string and anagram
  //returns true if parametr anagram conteins the same letters as the given string
  //  with the same counters of occurrences
  //otherwise false
  const lettersStr = Array.from(string);
  const lettersAnag = Array.from(anagram);
  const occStr = occurrences(lettersStr);
  const occTestingAnagrem = occurrences(lettersAnag)
  const jsonOccStr = JSON.stringify(occStr);
  const jsonOccAnag = JSON.stringify(occTestingAnagrem);
  return jsonOccStr === jsonOccAnag;
}

export function isAnagram2(string, anagram) {
//***
//without sort()
//only one object
  const lettersStr = Array.from(string);
  const lettersAnag = Array.from(anagram);
  const resObj = {}; 
  fillObj(lettersStr, resObj);
  subLetters(lettersAnag,resObj);
  const res = Object.values(resObj).reduce((a,b)=>a+b)
return res===0;
}

function subLetters (strings, originalObj) {
  strings.forEach((e) => {
    if(originalObj[e]) {
      originalObj[e]--}
  });
}