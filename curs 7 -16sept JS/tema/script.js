function myFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
     cell1.innerHTML = document.getElementById("inserari").value;
}