
function displayProdus(){
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
</table>
    `;

var i;
var shoppingCart=https://magazinonlinealina1.firebaseio.com/shoppingCart


    for (i in shoppingCart) { 
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


function stergeProdus(produsDeSters){
    lista_produse.splice(produsDeSters, 1);
    displayProdus();
 }


  function cresteCantitate() {
     var c = document.getElementById("cantitate").value + 1;
     return c;
 }

 function scadeCantitate() {
     var c = document.getElementById("cantitate").value - 1;
     return c;
 }

