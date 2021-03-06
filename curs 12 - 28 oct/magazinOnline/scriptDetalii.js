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



function drawDetalii(detalii){
    document.getElementById("titlu_detalii").innerHTML=detalii.nume;
    document.getElementById("pret_detalii").innerHTML=detalii.pret+"";
    document.getElementById("imagine_detalii").src=detalii.url;
    document.getElementById("stoc").innerHTML=detalii.stoc;
    document.getElementById("descriere_child").innerHTML=detalii.descriere;
    document.getElementById("specificatii").innerHTML=detalii.specificatii;
}

function updateCos(lista_produse){
    var s=0;
    for (var i in lista_produse){
        s+=lista_produse[i].cantitate;
    
    }
    document.getElementById("buton2").innerHTML=s + " produse in cos";
}

function onLoad(){
    var idProdus = window.location.search.split("=")[1];
    //var idProdus = window.location.search.substring(10)
    //window.location.search.substring("?idProdus=".length)
    makeGetFirebase("https://magazinonlinealina1.firebaseio.com/produse/"+idProdus+".json", drawDetalii);
 
    makeGetFirebase("https://magazinonlinealina1.firebaseio.com/shoppingCart.json", updateCos);
}


class produs {
    constructor(pNume,pPret, pCantitate, pSubTotal, pIdProdus){
        this.nume=pNume;
        this.pret=pPret;
        this.cantitate=pCantitate;
        this.subTotal=pSubTotal;
        this.idProdus=pIdProdus
    }
}

function adaugaProdus() {
    var adaugaNume = document.getElementById("titlu_detalii").innerHTML;
    var adaugaPret = parseInt(document.getElementById("pret_detalii").innerHTML);
    var adaugaCantitate= parseInt(document.querySelector("#cantitate input").value);
    var calculeazaSubTotal= adaugaCantitate*adaugaPret;
    var idProdus = window.location.search.split("=")[1];
    var c = new produs(adaugaNume, adaugaPret, adaugaCantitate, calculeazaSubTotal, idProdus);
    if(adaugaCantitate>0 && adaugaCantitate<=parseInt(document.getElementById("stoc").innerHTML)){
        makePutFirebase("https://magazinonlinealina1.firebaseio.com/shoppingCart.json",c);
    } else {
        alert("Verificati cantitatea introdusa!");
    }
}

function makePutFirebase(url,produs){
    
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              // Typical action to be performed when the document is ready:
              var c = JSON.parse(xhttp.responseText)
            console.log(c);
              makeGetFirebase("https://magazinonlinealina1.firebaseio.com/shoppingCart.json", updateCos);
          }
      };
      xhttp.open("POST", url, true);
      xhttp.send(JSON.stringify(produs));
    }




   