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


var lista_produse=[];

function drawCos(lista_produse){
     
    var html = `

    <table id="myTable">
    <tr>
        <td width=30%>Nume</td>
        <td width=5%>Pret</td>
        <td width=5%></td>
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
            <td><button onclick="scadeCantitate(${i})"> - </button></td>
            <td>${lista_produse[i].cantitate}</td>
            <td><button onclick="cresteCantitate(${i})"> + </button></td>
            <td>${lista_produse[i].subTotal}</td>
            <td><button onclick="stergeProdus(${i})"> Sterge </button></td>
                    </tr>`


    }
    html = html + `
        </table>
    `;

    document.getElementById("lista_produse").innerHTML=html;
}


makeGetFirebase("https://magazinonlinealina1.firebaseio.com/shoppingCart.json");

function stergeProdus(produsDeSters){
    lista_produse.splice(produsDeSters, 1);
    drawCos();
 }


  function cresteCantitate() {
     var c = document.getElementById("cantitate").innerHTML + 1;
     return c;
 }

 function scadeCantitate() {
     var c = document.getElementById("cantitate").innerHTML - 1;
     return c;
 }



 /*var count = Object.keys("https://magazinonlinealina1.firebaseio.com/shoppingCart.json").length;
 console.log(count);*/