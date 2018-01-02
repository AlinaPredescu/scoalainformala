function adaugaPreparat() {
    var URL = "https://meniu-4a929.firebaseio.com/menu.json";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
window.location="admin.html"
    };
    xhttp.open("post", URL, true);
    var formular = {
        nume: document.querySelector("[name='name']").value,
        imagine:document.querySelector("[name='imagine']").value,
        ingrediente: document.querySelector("[name='ingrediente']").value,
        reteta: document.querySelector("[name='preparare']").value
           }

    xhttp.send(JSON.stringify(formular));
}