var note = [];
function generateRandomArray() {
    var randomNote = [];
    for (var i = 0; i < 10; i++) {
        var valoareRandom = generateRandomNumberBetween0And10();
        randomNote.push(valoareRandom);
    }
    return randomNote;
}

function displayNote(note) {
    var noteHtml = "";
    for (var i = 0; i < note.length; i++) {
        noteHtml += "<div>" + note[i] + "</div>";
    }
    document.getElementById("note").innerHTML = noteHtml;

}

function generateRandomNumberBetween0And10() {
    return Math.floor(Math.random() * 10);
}



function maxNote(note) {
    var maxim = note[0];
    for (var i = 0; i < note.length; i++) {
        if (maxim < note[i]) {
            maxim = note[i];
        }
    }
    return maxim;
}



function findPositionInArray(value) {
    var positionOfElemInArray = 0;
    for (var i = 0; i < note.length; i++) {
        if (value == note[i]) {
            positionOfElemInArray = i;
        }
    }
    return positionOfElemInArray;
}



function sortDesc(note) {
    note = note.slice(); //creaza o copie a vectorului
    var sortedArray = [];
    var nrElemente = note.length;
    for (var i = 0; i < nrElemente; i++) {
        var max = maxNote(note);
        var pozitieMaxInArray = findPositionInArray(note, max);
        sortedArray.push(max);
        note.splice(pozitieMaxInArray, 1);
    }
    displayNote(sortedArray);
    return sortedArray;
}



function minNote(note) {
    var minim = note[0];
    for (var i = 0; i < note.length; i++) {
        if (minim > note[i]) {
            minim = note[i];
        }
    }
    return minim;
}


function findPositionInArray(note, value) {
    var positionOfElemInArray = 0;
    for (var i = 0; i < note.length; i++) {
        if (value == note[i]) {
            positionOfElemInArray = i;
        }
    }
    return positionOfElemInArray;
}


function sortAsc(note) {
    note = note.slice(); //creaza o copie a vectorului
    var sortedArray = [];
    var nrElemente = note.length;
    for (var i = 0; i < nrElemente; i++) {
        var min = minNote(note);
        var pozitieMinInArray = findPositionInArray(note, min);
        sortedArray.push(min);
        note.splice(pozitieMinInArray, 1);
    }
    displayNote(sortedArray);
    return sortedArray;
}




