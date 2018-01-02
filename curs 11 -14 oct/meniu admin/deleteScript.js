var MENU_SERVER_URL = "https://meniu-4a929.firebaseio.com/menu.json";

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
    var idPreparat = window.location.search.split("=")[1];
    makeGetFirebase("https://meniu-4a929.firebaseio.com/menu/"+idPreparat+".json", drawDetalii);
}

function confirmaStergerea() {
    var idPreparat = window.location.search.split("=")[1];
   var url= "https://meniu-4a929.firebaseio.com/menu/"+idPreparat+".json";
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