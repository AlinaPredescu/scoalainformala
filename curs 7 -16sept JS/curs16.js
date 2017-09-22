//variabila maxima//
var a = 10;
var b = 20;

var max = 0;
if (a < b) {
    max = b;
} else {
    max = a;
}

console.log(max);

//variabila minima//
var a = 10;
var b = 20;

var min = undefined;
if (a < b) {
    min = a;
} else {
    min = b;
}

console.log(min);

//declarare sir de note si aflare maximul dintre ele//

var note = [8, 7, 3, 9, 10, 2, 1];
var maxim = note[0];

for (var i = 0; i < note.length; i++) {
    if (maxim < note[i]) {
        maxim = note[i];
    }
}

console.log(maxim);

//si cu functie//
var note = [8, 7, 3, 9, 10, 2, 1];

function calculeazaMax() {
    var maxim1 = note[0];
    for (var i = 0; i < note.length; i++) {
        if (maxim1 < note[i]) {
            maxim1 = note[i];
        }
    }
    return maxim1;
}
var maxim2 = calculeazaMax();
console.log(maxim2);

//findPositionInArray //

function findPositionInArray(value) {
    var positionOfElemInArray = 0;
    for (var i = 0; i < note.length; i++) {
        if (value == note[i]) {
            positionOfElemInArray = i;
        }
    }
    return positionOfElemInArray;
}
console.log("positionOfElem=" + findPositionInArray(maxim2));

//functie care ordoneaza desccrescator//

function sortAsc() {
    //var sortedArray=newArray(); asa se declara un array nou//
    var sortedArray = [];  //sau asa//
var nrElemente=note.length;
    for (var i = 0; i < nrElemente; i++) {
        var max = calculeazaMax();
        var pozitieMaxInArray = findPositionInArray(max);
        sortedArray.push(max); //adauga element in array//
        note.splice(pozitieMaxInArray, 1); //incepand cu pozitia max sterge un element//
    }
    return sortedArray;
}
console.log(note);
console.log(sortAsc());








