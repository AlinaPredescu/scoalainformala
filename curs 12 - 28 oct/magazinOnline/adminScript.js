function makeGetFirebase(url, callBack){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var c = JSON.parse(xhttp.responseText)

            callBack(c);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function drawProduse(list){
    var str = "";
    var menuKeys = Object.keys(list);
    for(var i=0;i<menuKeys.length;i++ ){
        var produs = list[menuKeys[i]];
        var categorie = window.location.search.split("=")[1];
        if(categorie === undefined || categorie===produs.categorie){
            str += `
                <div class="child">
                <p class="produs"> ${produs.nume} <br/>
                    <img src="${produs.url}" class="imagine">
                    <br/>
                    &nbsp &nbsp &nbsp Pret:${produs.pret} RON &nbsp &nbsp &nbsp <button class="buton3" type="button">
                    <a href="edit.html?idProdus=${menuKeys[i]}">Modifica</a></button> &nbsp &nbsp &nbsp <button class="buton3" type="button">
                   <a href="delete.html?idProdus=${menuKeys[i]}"> Sterge</a></button>
                </p>
                </div>
                `
        }
    }
    str+=`<br style="clear:both;" />`
    document.getElementById("container_produse").innerHTML=str;
}

function onLoad(){
    makeGetFirebase("https://magazinonlinealina1.firebaseio.com/produse.json",drawProduse);
    
}




