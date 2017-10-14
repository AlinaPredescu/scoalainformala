
var elevi = [];
var note = [];


function adaugareElev() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    medieNote(row);
    adaugareButon(row);
    cell1.innerHTML = document.getElementById("inserari").value;
    elevi.push(cell1);
}

//function sumaNoteElev(){} 
//nu reusesc sa adaug in coloana "mdie note" daca modific functia de mai jos care adauga buton...

function medieNote(row) {
    var rand = row;
    var cell = row.insertCell();
    var buton = document.createElement("BUTTON");
    var numeBtn = document.createTextNode("");
    buton.appendChild(numeBtn);
    cell.appendChild(buton);
    buton.onclick = hideNote;
}

//functia pentru medie este:

//function medieNoteElev() {
  //  var noteElev = note[indexElevPeCareAmDatClick];
    //var sumaNote = sumaNoteElev();
    //var nrNote = noteElev.length;
    //var mediaNotelor = sumaNote / nrNote;
    //return mediaNotelor;
//}

function adaugareButon(row) {
    var rand = row;
    var cell = row.insertCell();
    var buton = document.createElement("BUTTON");
    var numeBtn = document.createTextNode("Vezi notele");
    buton.appendChild(numeBtn);
    cell.appendChild(buton);
    buton.onclick = hideNote;
}



function hideNote() {
    var x = document.getElementById('note_elev_wrapper');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function adaugaNota() {
    var table = document.getElementById("tabel_note");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = document.getElementById("nota_elev").value;
    note.push(cell1);
}

function displayElevi(elevi) {
    var eleviHtml = "";
    for (var i = 0; i < elevi.length; i++) {
        eleviHtml += "<div>" + elevi[i] + "</div>";
    }
    document.getElementById("elevi").innerHTML = eleviHtml;

}


function displayNote(note) {
    var noteHtml = "";
    for (var i = 0; i < note.length; i++) {
        noteHtml += "<div>" + note[i] + "</div>";
    }
    document.getElementById("note").innerHTML = noteHtml;

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
    note = note.slice();
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
    note = note.slice(); 
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
