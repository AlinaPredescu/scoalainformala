var MENU_SERVER_URL = "https://restaurant-menu-v1.firebaseio.com/menu.json";
var MENU_ITEM_SERVER_URL = "https://restaurant-menu-v1.firebaseio.com/menu/";

var gJson;

function makeGetFirebase(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var c = JSON.parse(xhttp.responseText)

            drawProduse(c);
        }
    };
    xhttp.open("GET", MENU_SERVER_URL, true);
    xhttp.send();
}

function drawProduse(list){
    var str = "";
    var menuKeys = Object.keys(list);
    for(var i=0;i<menuKeys.length;i++ ){
        var produs = list[menuKeys[i]];
       
       if(produs.ingrediente.indexOf(document.getElementById("ingrediente").value)>=0){
            str += `
           <tr> 
           <td style="width:10%"><img src=${produs.imagine} width=180></td>
           <td style="width:33.33%"><span class="titluPreparat">${produs.nume} </span>
           <br/><br/>
           <div style="padding:10px">${produs.ingrediente}</div>
           </td>
           <td style="width:33.33%"> <button  type="button" class="detaliiPreparat"> <a href="detaliiPreparat.html?preparat=${menuKeys[i]}" class="adetalii">DETALII </a></button></td>
           </tr>
                `
       }
    }
    str+=`<br style="clear:both;" />`
    document.getElementById("tbody").innerHTML=str;
}

function onLoad(){
    makeGetFirebase();
  
}


function cautaIngrediente(){
    makeGetFirebase();
}



