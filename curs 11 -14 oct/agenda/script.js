var lista_contacte = [];

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
                <td width=25%>Nume</td>
                <td width=25%>Telefon</td>
                <td width=25%></td>
                <td width=25%></td>
            </tr>
    `;

    for (var i=0; i<lista_contacte.length; i++) {
        html= html + `
        <tr>
            <td>${lista_contacte[i].nume}</td>
            <td>${lista_contacte[i].telefon}</td>
            <td> <button onclick=" modificareNume()"> Modifica </button></td>
            <td><button> Sterge </button></td>
        </tr>`
    }

    html = html + `
        </table>
    `;

    document.getElementById("lista_contacte").innerHTML=html;
}

function modificareNume() {
    var nume = document.getElementById("inserariNume").innerHTML.value;
}
