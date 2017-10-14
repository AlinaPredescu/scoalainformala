
//Pastrati doar 2 inputuri si colorati ambele inputuri verzi daca valoarea din 
//casuta 1 si din casuta 2 sunt egale (ex 1, tema 26August)
function comparareInput() {
    var firstName = document.getElementById("input1");
    var oras = document.getElementById("input2");
    if (firstName.value === oras.value) {
        document.getElementById("personale").style.backgroundColor = "green";
    }
};


//Pastrati doar 2 inputuri si colorati inputul care are valoarea mai mare. 
//Daca sunt egale, colorati-le pe ambele(ex2,  tema 26August)
function maxInput() {
    var firstName = document.getElementById("input1");
    var oras = document.getElementById("input2");
    if (firstName.value > oras.value) {
        document.getElementById("input1").style.backgroundColor = "yellow";
    } 
    if (firstName.value === oras.value) {
        document.getElementById("personale").style.backgroundColor = "green";
    }
};

//Pastrati doar 3 inputuri si afisati in al 3-lea input valoarea inputului mai mare dintre primul si al doilea
function max2Input(){
    var firstName = document.getElementById("input1");
    var oras = document.getElementById("input2");
    var carte....
}

///nu stiu ce sa-i puN!!1

//Pastrati doar 3 inputuri si afisati in al 3-lea input suma primului + celui de-al 2-lea  input . 

function treiInput() {
    var firstName = document.getElementById("input1");
    var oras = document.getElementById("input2");
    var carte = firstName.value + oras.value;
    return document.getElementById("input3").innerHTML = carte;
}

///asta nu merge!!!
















