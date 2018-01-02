var listaItems = [];
var listaItemsCumparate = [];

function adaugareItem() {
    var table = document.querySelector("table tbody");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    creareButon(row);
    cell1.innerHTML = document.getElementById("inserari").value;
    listaItems.push(document.getElementById("inserari").value);
}

function creareButon(row) {
    var rand = row;
    var cell = row.insertCell();
    var buton = document.createElement("BUTTON");
    var numeBtn = document.createTextNode("Mark as buyed");
    buton.appendChild(numeBtn);
    cell.appendChild(buton);
    buton.style.backgroundColor = "pink";
    buton.style.borderRadius = "5px";
    buton.addEventListener("click", function () {
        this.parentNode.previousSibling.style.textDecoration = "line-through";

    })
}

function sortAsc() {
    var tr = document.querySelectorAll("table tbody tr");
    var trs = [];
    for (i = 0; i < tr.length; i++) {
        trs.push(tr[i]);
    }
    trs.sort(function (a, b) {
        var aVal = a.querySelector("td").innerHTML;
        var bVal = b.querySelector("td").innerHTML;
        if (aVal > bVal) { return 1 } else
            if (bVal > aVal) { return -1 } else { return 0 }
    })
    var table = document.querySelector("table tbody");
    for (var i = 0; i < trs.length; i++) {
        table.appendChild(trs[i]);
    }
}

function sortDesc() {
    var tr = document.querySelectorAll("table tbody tr");
    var trs = [];
    for (i = 0; i < tr.length; i++) {
        trs.push(tr[i]);
    }
    trs.sort(function (a, b) {
        var aVal = a.querySelector("td").innerHTML;
        var bVal = b.querySelector("td").innerHTML;
        if (aVal > bVal) { return 1 } else
            if (bVal > aVal) { return -1 } else { return 0 }
    })

    trs.reverse();
    var table = document.querySelector("table tbody");
    for (var i = 0; i < trs.length; i++) {
        table.appendChild(trs[i]);
    }
}
