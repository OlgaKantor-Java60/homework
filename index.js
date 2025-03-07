import { testFramework } from "./testframework.js";

testFramework('occurences function test', 'const strings = ["b", "a", "c", "b", "b", "c"]', 
  ["occurrences(strings)"], [["a=>1", "b=>3", "c=>2"]] );

testFramework('isAnagram1 testing', 'const string = "hello"', 
  ['isAnagram1(string, "olleh")', 'isAnagram1(string, "olhle")', 'isAnagram1(string, "hell0")'],
  [true, true, false] );

testFramework('isAnagram2 testing','const string = "hello"',
  ['isAnagram2(string, "olleh")', 'isAnagram2(string, "lehol")', 'isAnagram2(string, "ollle")', 
   'isAnagram2(string, "hell")', 'isAnagram2(string, "oelhl")'],
  [true, true, false, false, true] );

  