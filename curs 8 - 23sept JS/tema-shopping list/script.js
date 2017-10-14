var listaItems=[];
var listaItemsCumparate=[];

function adaugareItem() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    creareButon(row);
     cell1.innerHTML = document.getElementById("inserari").value;
     listaItems.push(cell1);

    
}

function creareButon(row) {
    var rand = row;
    var cell = row.insertCell();
    var buton=document.createElement("BUTTON");
    var numeBtn=document.createTextNode("Mark as buyed");
    buton.appendChild(numeBtn);
    cell.appendChild(buton);
}

    //nu stiu cum sa folosesc mai departe butonul creat - sa ii pun onclick => strikethrough
    //sa ii pun culoare - nu siu cum sa leg functia de mai jos de buton - butonul nu are id, pot sa pun in loc de id variabila?

    function changeColor() {
        document.getElementById("buton").style.color = "pink";
    }
  