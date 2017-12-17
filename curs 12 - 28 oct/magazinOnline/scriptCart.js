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
function makeDeleteFirebase(url){
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            makeGetFirebase("https://magazinonlinealina1.firebaseio.com/shoppingCart.json",drawCos);

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
            makeGetFirebase("https://magazinonlinealina1.firebaseio.com/shoppingCart.json",drawCos);

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
        <td width=30%><b>Nume</b></td>
        <td width=5%><b>Pret</b></td>
        <td width=10%><b>Cantitate</B></td>
        <td width=10%><B>Subtotal</b></td>
        <td width=10%></td>
    </tr>

    `;

var total=0;

for (var i in lista_produse){
        html= html + `
            <tr>
            <td>${lista_produse[i].nume}</td>
            <td>${lista_produse[i].pret}</td>
          
            <td><span class="butonCantitate" onclick="scadeCantitate('${i}', ${lista_produse[i].cantitate}, ${lista_produse[i].idProdus})"> - </span>
            ${lista_produse[i].cantitate} 
            <span class="butonCantitate" onclick="cresteCantitate('${i}', ${lista_produse[i].cantitate}, ${lista_produse[i].idProdus})"> + </span></td>
       
            <td>${lista_produse[i].cantitate*lista_produse[i].pret}</td>
            <td><button onclick="stergeProdus('${i}')"> Sterge </button></td>
                    </tr>`

total+=lista_produse[i].cantitate*lista_produse[i].pret
    }
    document.getElementById("sumaSubtotal").innerHTML=(total/1.19).toFixed(2);
    document.getElementById("tva").innerHTML=(-total/1.19+total).toFixed(2);
    document.getElementById("total").innerHTML=total+0;
    html = html + `
        </table>
    `;

    document.getElementById("lista_produse").innerHTML=html;
}


makeGetFirebase("https://magazinonlinealina1.firebaseio.com/shoppingCart.json",drawCos);

function stergeProdus(produsDeSters){
    makeDeleteFirebase("https://magazinonlinealina1.firebaseio.com/shoppingCart/"+produsDeSters+".json");
 }



function cresteCantitate(idCantitate, cantitate, idProdus) {
    cantitate++;
    verificaStoc("https://magazinonlinealina1.firebaseio.com/produse/"+idProdus+"/stoc.json",idCantitate,cantitate)
}
function verificaStoc(url,idCantitate,cantitate){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            if(cantitate<= xhttp.responseText){
                makePutFirebase("https://magazinonlinealina1.firebaseio.com/shoppingCart/"+idCantitate+"/cantitate.json",cantitate);}
                else {
                    alert("Stoc epuizat!");
                }

        }
    };
    xhttp.open("GET", url, true);
    xhttp.send(); 
}


 function scadeCantitate(idCantitate, cantitate) {
    cantitate--;
    if(cantitate>=0 ){
        makePutFirebase("https://magazinonlinealina1.firebaseio.com/shoppingCart/"+idCantitate+"/cantitate.json",cantitate);}
        else {
            alert("Cantitatea nu poate fi negativa!");
        }
    }


function updateCos(lista_produse){
    var s=0;
    for (var i in lista_produse){
        s+=lista_produse[i].cantitate;

    }
    document.getElementById("buton2").innerHTML=s + " produse in cos";
}

function onLoad(){
    //cand se incarca pagina
    makeGetFirebase("https://magazinonlinealina1.firebaseio.com/shoppingCart.json", updateCos);
}

