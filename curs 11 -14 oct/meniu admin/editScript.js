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
    document.querySelector("[name='name']").value=produs.nume;
    document.querySelector("[name='imagine']").value=produs.imagine;
    document.querySelector("[name='ingrediente']").value=produs.ingrediente;
    document.querySelector("[name='preparare']").value=produs.reteta;
}

function onLoad() {
    var idPreparat = window.location.search.split("=")[1];

    makeGetFirebase("https://meniu-4a929.firebaseio.com/menu/"+idPreparat+".json", drawDetalii);

}

function salveazaPreparat() {
    var idPreparat = window.location.search.split("=")[1];
    var URL = "https://meniu-4a929.firebaseio.com/menu/"+idPreparat+".json";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200){
        window.location = "admin.html" /*se duce la pag admin*/
        }
    };
    xhttp.open("put", URL, true);
    var formular = {
        nume: document.querySelector("[name='name']").value,
        imagine: document.querySelector("[name='imagine']").value,
        ingrediente: document.querySelector("[name='ingrediente']").value,
        reteta: document.querySelector("[name='preparare']").value
    }

    xhttp.send(JSON.stringify(formular));
}