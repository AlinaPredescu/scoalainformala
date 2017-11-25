function makeGetFirebase(url){
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var c = JSON.parse(xhttp.responseText)
            drawCos(c);

        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
function makeDeleteFirebase(url){
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            makeGetFirebase("https://magazinonlinealina1.firebaseio.com/shoppingCart.json");

        }
    };
    xhttp.open("delete", url, true);
    xhttp.send();
}

function makePutFirebase(url, cantitate){
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            makeGetFirebase("https://magazinonlinealina1.firebaseio.com/shoppingCart.json");

        }
    };
    xhttp.open("put", url, true);
    xhttp.send(cantitate);
}


var lista_produse=[];

function drawCos(lista_produse){
     
    var html = `

    <table id="myTable">
    <tr>
        <td width=30%>Nume</td>
        <td width=5%>Pret</td>
       
        <td width=10%>Cantitate</td>
       
        <td width=10%>Sub total</td>
        <td width=10%></td>
    </tr>
    `;

for (var i in lista_produse){
        html= html + `
            <tr>
            <td>${lista_produse[i].nume}</td>
            <td>${lista_produse[i].pret}</td>
          
            <td><span class="butonCantitate" onclick="scadeCantitate('${i}', ${lista_produse[i].cantitate}, ${lista_produse[i].idProdus})"> - </span> ${lista_produse[i].cantitate} <span class="butonCantitate" onclick="cresteCantitate('${i}', ${lista_produse[i].cantitate}, )"> + </span></td>
       
            <td>${lista_produse[i].subTotal}</td>
            <td><button onclick="stergeProdus('${i}')"> Sterge </button></td>
                    </tr>`


    }
    html = html + `
        </table>
    `;

    document.getElementById("lista_produse").innerHTML=html;
}


makeGetFirebase("https://magazinonlinealina1.firebaseio.com/shoppingCart.json");

function stergeProdus(produsDeSters){
    makeDeleteFirebase("https://magazinonlinealina1.firebaseio.com/shoppingCart/"+produsDeSters+".json");
 }


 function cresteCantitate(idCantitate, cantitate, idProdus) {
    cantitate++;
    if(cantitate> makeGetFirebase("https://magazinonlinealina1.firebaseio.com/produse/"+idProdus+".json")){
    makePutFirebase("https://magazinonlinealina1.firebaseio.com/shoppingCart/"+idCantitate+"/cantitate.json",cantitate);}
    else {
        alert("Stoc epuizat!");
    }
}


 
  /*function cresteCantitate(idCantitate, cantitate) {
    cantitate++;
    makePutFirebase("https://magazinonlinealina1.firebaseio.com/shoppingCart/"+idCantitate+"/cantitate.json",cantitate)
    
 }*/

 function scadeCantitate(idCantitate, cantitate) {
    cantitate--;
    makePutFirebase("https://magazinonlinealina1.firebaseio.com/shoppingCart/"+idCantitate+"/cantitate.json",cantitate)
    
 }


 /*function scadeCantitate(idCantitate, cantitate) {
    cantitate--;
    if(cantitate<=0 ){
        makePutFirebase("https://magazinonlinealina1.firebaseio.com/shoppingCart/"+idCantitate+"/cantitate.json",cantitate);}
        else {
            alert("Cantitatea nu poate fi negativa!");
        }
    }*/