var lista_contacte = [];
var indexContactDeModificat=[];

class Contact {
    constructor(pNume, pTelefon){
        this.nume=pNume;
        this.telefon=pTelefon;
    }
}

function adaugaContact() {
    var inserariNume = document.getElementById("inserariNume").value;
    var inserariTelefon = document.getElementById("inserariTelefon").value;

    var c = new Contact(inserariNume, inserariTelefon);

    lista_contacte.push(c);

    document.getElementById("inserariNume").value= null;
    document.getElementById("inserariTelefon").value="";

}

function displayContacte(){
    var html = `
        <table id="myTable">
            <tr>
                <td width=25%><b>Nume</b></td>
                <td width=25%><b>Telefon</b></td>
                <td width=40%></td>
                <td width=35%></td>
            </tr>
    `;

    for (var i=0; i<lista_contacte.length; i++) {
        html= html + `
        <tr>
            <td>${lista_contacte[i].nume}</td>
            <td>${lista_contacte[i].telefon}</td>
            <td> <button onclick="modificareContact(${i})"> Modifica </button></td>
            <td><button onclick="stergeContact(${i})"> Sterge </button></td>
        </tr>`
    }

    html = html + `
        </table>
    `;

    document.getElementById("lista_contacte").innerHTML=html;
}


function stergeContact(ContactDeSters){
   lista_contacte.splice(ContactDeSters, 1);
   displayContacte();
}

function modificareContact(indexContactDeModificat){
    isOperatieDeModificare = true;
    globalIndexContactDeModificat = indexContactDeModificat;
    document.getElementById("inserariNume").value = lista_contacte[indexContactDeModificat].nume;
    document.getElementById("inserariTelefon").value = lista_contacte[indexContactDeModificat].telefon;
}

function saveModificare() {
    stergeContact(globalIndexContactDeModificat);
    adaugaContact();
    isOperatieDeModificare = false;
}



