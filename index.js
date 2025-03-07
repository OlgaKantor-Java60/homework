import {testframework} from './testframework.js'

// ************** 1 ***************

let first = 1;
let second = 2;

//TODO write one code line (insead of three specified below) after which variable 'first" will contain 2 and second will contain 1
//regular code from Java
[first, second] = [second, first]

console.log(`second = ${second}`) 
console.log(`first = ${first}`) 

// ************** 2 ***************

testframework('mergeObjects testing', 'const obj1={x:2, y:3}; const obj2={z:1, i:-10}; const obj3 = {x:10, y:30}',
  ['mergeObjects(obj1, obj2, true)','mergeObjects(obj1,obj3,true)', 'mergeObjects(obj1,obj3,false)'],
  [{x:2, y:3, z:1, i:-10},
    {x:2, y:3},
    {x:10, y:30}
  ]
)

// ************** 3 ***************

testframework('isAnagram testing','const string = "hello"',
    ['isAnagram(string, "olleh")', 'isAnagram(string, "lehol")',
      'isAnagram(string, "ollle")', 'isAnagram(string, "hell")',
      'isAnagram(string, "oelhl")'
    ], [true, true, false, false, true]
   )

