var arraysEqual = require('./nestedArraysEqual.js');
var fs = require("fs");
//var oldFilteredArr = [];
//var newFilteredArr = [];
var oldDrawingText = fs.readFileSync("./oldList.txt") //, function(err, text) {
    //if (err) {
      //  throw err;
    //};
var oldDrawingLineSplitArr = oldDrawingText.toString().split("\n");//.split(" ");
//console.log(oldDrawingLineSplitArr);
var oldDrawingArr = [];
for (let line of oldDrawingLineSplitArr) {
    //console.log("line:"+line);
    //console.log("split:"+line.split(' '));
    oldDrawingArr.push(line.split(' '));
};
//console.log(oldDrawingArr);
var oldFilteredArr = [];
for (let line of oldDrawingArr) {
    let colorIndex = line.findIndex((elem) => {
        return (
            elem === 'RED' ||
            elem === 'PINK' ||
            elem === 'WHITE' ||
            elem === 'GREEN' ||
            elem === 'BLACK' ||
            elem === 'YELLOW' ||
            elem === 'ORANGE'
        )
    });
    let gauageIndex = colorIndex-1;
    let circuitIndex = gauageIndex-1;
    //console.log(colorIndex);
    //console.log(line[colorIndex]);
    oldFilteredArr.push([line[circuitIndex], line[gauageIndex], line[colorIndex]]);
};
//console.log(oldFilteredArr);
let sortedOldArr = oldFilteredArr.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
});
//console.log(sortedOldArr);
//});
var newDrawingText = fs.readFileSync("./newList.txt")//, function(err, text) {
    //if (err) {
      //  throw err;
    //};
var newDrawingLineSplitArr = newDrawingText.toString().split("\n");//.split(" ");
var newDrawingArr = [];
for (let line of newDrawingLineSplitArr) {
    newDrawingArr.push(line.split(' '));
}
//console.log(newDrawingArr);
var newFilteredArr = [];
for (let line of newDrawingArr) {
    let colorIndex = line.findIndex((elem) => {
        return (
            elem === 'RED' ||
            elem === 'PINK' ||
            elem === 'WHITE' ||
            elem === 'GREEN' ||
            elem === 'BLACK' ||
            elem === 'YELLOW' ||
            elem === 'ORANGE'
        )
    });
    let gauageIndex = colorIndex-1;
    let circuitIndex = gauageIndex-1;
    newFilteredArr.push([line[circuitIndex], line[gauageIndex], line[colorIndex]]);
}
//console.log(newFilteredArr);
let sortedNewArr = newFilteredArr.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
});
//console.log(sortedNewArr);
//});
if(arraysEqual(sortedOldArr, sortedNewArr)) {
    console.log('Lists match!');
} else {
    console.log('Lists do not match');
};




