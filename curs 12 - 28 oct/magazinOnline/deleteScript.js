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
    document.getElementById("produsDeSters").innerHTML=produs.nume;
    }

function onLoad() {
    var idProdus = window.location.search.split("=")[1];
    makeGetFirebase("https://magazinonlinealina1.firebaseio.com/produse/"+idProdus+".json", drawDetalii);
}

function confirmaStergerea() {
    var idProdus = window.location.search.split("=")[1];
   var url= "https://magazinonlinealina1.firebaseio.com/produse/"+idProdus+".json";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            window.location = "admin.html"                       
        }
    };
    xhttp.open("delete", url, true);
    xhttp.send();
}