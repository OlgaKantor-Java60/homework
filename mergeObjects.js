export function mergeObjects(firstObj, secondObj, isFirstPref) {
    //returns result object as merging of firstObj and secondObj
    //if there is conflict of keys the parameter isFirstPref defines how to resove a conflict
    //if isFirstPref is true, then result object should contain value of the conflicted key from the first object
    //otherwise - from the second one

let res = {};
if (isFirstPref) {
 res = {...secondObj, ...firstObj}
} else {
 res = {...firstObj, ...secondObj};
}
return res;
} 

//doesn't pass the test, but consits the same object (?)