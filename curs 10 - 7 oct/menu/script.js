var MENU_SERVER_URL = "https://restaurant-menu-v1.firebaseio.com/.json";
var MENU_ITEM_SERVER_URL = "https://restaurant-menu-v1.firebaseio.com/menu/";

var gJson;

function afiseazaMeniu() {
    var preparat = document.getElementById("preparat").value;
    console.log(preparat);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = this.responseText;
            console.log(json)
            gJson = json; 

            var imagine = JSON.parse(json).main.temp; 
        }
    };
    xhttp.open("GET", MENU_ITEM_SERVER_URL + preparat, true);
    xhttp.send();
}


/*var imagine = URL_WEATHER_ICON_PREFIX + JSON.parse(json).weather[0].icon + ".png";
            document.getElementById("imagine").src = imagine;*/

/*function cautaIngrediente() {
    var ingrediente = document.getElementById("ingrediente").value;
    console.log(ingrediente);
    //definesc un comportament - ajax on load de pe W3school
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //aici incepe tratamentul  raspunsului de la server
            var json = this.responseText;
            console.log(json)
            gJson = json; //var globale json ii asociem o var locala

            var temperaturaAcum = JSON.parse(json).main.temp; //in console vad pe network main si temp(ce vreau eu sa afisez), pot sa scriu si in console JSON(json).main.temp ca sa vad ce afiseaza
            //parse transforma in obiect
            
            //aici se termina tratamentul raspunsului de la server
        }
    };
    xhttp.open("GET", MENU_SERVER_URL + ingrediente, true);
    xhttp.send();
    //requestul se face cand se apeleaza intructiunea send
} */

