var MENU_SERVER_URL = "https://magazinonlinealina1.firebaseio.com/produse.json";


var gJson;

function makeGetFirebase(url, callback) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var c = JSON.parse(xhttp.responseText)

            callback(c);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function drawDetalii(produs) {
    pret: document.querySelector("[name='pret']").value,
        nume: document.querySelector("[name='name']").value,
        imagine:document.querySelector("[name='imagine']").value,
        categorie: document.querySelector("[name='categorie']").value,
        stoc: document.querySelector("[name='stoc']").value,
        descriere: document.querySelector("[name='descriere']").value,
        specificatii: document.querySelector("[name='specificatii']").value
}

function onLoad() {
    var idProdus = window.location.search.split("=")[1];

    makeGetFirebase("https://magazinonlinealina1.firebaseio.com/produse/"+idProdus+".json", drawDetalii);

}

function salveazaProdus() {
    var idProdus = window.location.search.split("=")[1];
    var URL = "https://magazinonlinealina1.firebaseio.com/produse/"+idProdus+".json";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200){
        window.location = "admin.html" /*se duce la pag admin*/
        }
    };
    xhttp.open("put", URL, true);
    var formular = {
        pret: document.querySelector("[name='pret']").value,
        nume: document.querySelector("[name='name']").value,
        imagine:document.querySelector("[name='imagine']").value,
        categorie: document.querySelector("[name='categorie']").value,
        stoc: document.querySelector("[name='stoc']").value,
        descriere: document.querySelector("[name='descriere']").value,
        specificatii: document.querySelector("[name='specificatii']").value
    }

    xhttp.send(JSON.stringify(formular));
}