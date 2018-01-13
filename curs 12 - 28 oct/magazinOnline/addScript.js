function adaugaProdus() {
    var URL = "https://magazinonlinealina1.firebaseio.com/produse.json";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200){
window.location="admin.html";}

    };
    xhttp.open("post", URL, true);
    var formular = {
        pret: document.querySelector("[name='pret']").value,
        nume: document.querySelector("[name='name']").value,
        imagine:document.querySelector("[name='imagine']").value,
        categorie: document.querySelector("[name='categorie']").value,
        stoc: document.querySelector("[name='stoc']").value,
        descriere: document.querySelector("[name='descriere']").value,
        specificatii: document.querySelector("[name='specificatii']").value
           }

    xhttp.send(JSON.stringify(formular));
}

