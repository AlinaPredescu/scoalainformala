
var elevi=[];

function myFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
     cell1.innerHTML = document.getElementById("inserari").value;
     elevi.push(cell1);
}

function creareButon(){

    var cell3 = document.createElement("BUTTON");
    var numeBtn=document.createTextNode("Vezi note");
    cell3.appendChild(numeBtn);
    document.body.appendChild(cell3);
}
