function makeGetFirebase(url){
    
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              // Typical action to be performed when the document is ready:
              var c = JSON.parse(xhttp.responseText)
                drawDetalii(c);
    
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



function onLoad(){
    var idProdus = window.location.search.split("=")[1];
    //var idProdus = window.location.search.substring(10)
    //window.location.search.substring("?idProdus=".length)
    makeGetFirebase("https://magazinonlinealina1.firebaseio.com/produse/"+idProdus+".json");
    //https://magazinonlinealina1.firebaseio.com/produse/1
}

var lista_produse=[];

class produs {
    constructor(pNume,pPret, pCantitate, pSubTotal){
        this.nume=pNume;
        this.pret=pPret;
        this.cantitate=pCantitate;
        this.subTotal=pSubTotal
    }
}

function adaugaProdus() {
    var adaugaNume = document.getElementById("titlu_detalii").innerHTML;
    var adaugaPret = parseInt(document.getElementById("pret_detalii").innerHTML);
    var adaugaCantitate= parseInt(document.querySelector("#cantitate input").value);
    var calculeazaSubTotal= adaugaCantitate*adaugaPret;

    var c = new produs(adaugaNume, adaugaPret, adaugaCantitate, calculeazaSubTotal);

    makePutFirebase("https://magazinonlinealina1.firebaseio.com/shoppingCart.json",c);

}

function makePutFirebase(url,produs){
    
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              // Typical action to be performed when the document is ready:
              var c = JSON.parse(xhttp.responseText)
            console.log(c);
    
          }
      };
      xhttp.open("POST", url, true);
      xhttp.send(JSON.stringify(produs));
    }
