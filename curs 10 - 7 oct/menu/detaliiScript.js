var MENU_SERVER_URL = "https://restaurant-menu-v1.firebaseio.com/menu.json";
var MENU_ITEM_SERVER_URL = "https://restaurant-menu-v1.firebaseio.com/menu/.json";

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
    var str = "";
    
    
        str += `<div>
            <br/>
           <img src=${produs.imagine} width=300>
           </br>
          <div class="titlu"> ${produs.nume} </div>
          <br/>
          <div class="ingrediente"> ${produs.ingrediente} </div>
           <div class="reteta"> ${produs.reteta}</div>
           </div>
                `

    
    str += `<br style="clear:both;" />`
    document.getElementById("body").innerHTML = str;
}

function onLoad() {
    var idPreparat = window.location.search.split("=")[1];

    makeGetFirebase("https://restaurant-menu-v1.firebaseio.com/menu/"+idPreparat+".json", drawDetalii);

}