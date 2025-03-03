import { testFramework } from "./testframework.js";

testFramework('occurences function test', 'const strings = ["b", "a", "c", "b", "b", "c"]', 
  ["occurrences(strings)"], [["a=>1", "b=>3", "c=>2"]] );

testFramework('isAnagram testing', 'const string = "hello"', 
  ['isAnagram(string, "olleh")', 'isAnagram(string, "olhle")', 'isAnagram(string, "hell0")'],
  [true, true, false] );

  