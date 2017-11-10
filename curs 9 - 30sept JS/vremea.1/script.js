var URL_CURRENT_WEATHER = "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
var URL_FORECAST_WEATHER = "https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
var URL_WEATHER_ICON_PREFIX = "http://openweathermap.org/img/w/"; // sufix .png

var gJson;

function afiseazaVremea() {
    var oras = document.getElementById("oras").value;
    console.log(oras);
    //definesc un comportament - ajax on load de pe W3school
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //aici incepe tratamentul  raspunsului de la server
            var json = this.responseText;
            console.log(json)
            gJson = json; //var globale json ii asociem o var locala

            var temperaturaAcum = JSON.parse(json).main.temp; //in console vad pe network main si temp(ce vreau eu sa afisez), pot sa scriu si in console JSON(json).main.temp ca sa vad ce afiseaza
            //parse transforma in obiect
            document.getElementById("temperatura_acum").innerHTML = temperaturaAcum;
            var descriere = JSON.parse(json).weather[0].description;
            document.getElementById("descriere").innerHTML = descriere;

            var umiditate = JSON.parse(json).main.humidity;
            document.getElementById("umiditate").innerHTML = umiditate;

            var presiune = JSON.parse(json).main.pressure;
            document.getElementById("presiune").innerHTML = presiune;

            var temp_min = JSON.parse(json).main.temp_min;
            document.getElementById("temp_min").innerHTML = temp_min;

            var temp_max = JSON.parse(json).main.temp_max;
            document.getElementById("temp_max").innerHTML = temp_max;

            var imagine = URL_WEATHER_ICON_PREFIX + JSON.parse(json).weather[0].icon + ".png";
            document.getElementById("imagine").src = imagine;

            //aici se termina tratamentul raspunsului de la server
        }
    };
    xhttp.open("GET", URL_CURRENT_WEATHER + oras, true);
    xhttp.send();
    //requestul se face cand se apeleaza intructiunea send
}

function hidePrognoza() {
    var x = document.getElementById('prognoza_wrapper');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function showPrognoza() {
    var x = document.getElementById('prognoza_wrapper');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function afiseazaPrognoza() {
    var oras = document.getElementById("oras").value;
    console.log(oras);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = this.responseText;
            console.log(json)
            gJson = json;


            var ziua = JSON.parse(json).list[4].dt_txt;
            document.getElementById("ziua").innerHTML = getData(ziua);

            var ora = JSON.parse(json).list[4].dt_txt;
            document.getElementById("ora").innerHTML = getOra(ora);

            var descriere = JSON.parse(json).list[4].weather[0].description;
            document.getElementById("descriere1").innerHTML = descriere;

            var temperatura = JSON.parse(json).list[4].main.temp;
            document.getElementById("temperatura").innerHTML = temperatura;

            var imagine = URL_WEATHER_ICON_PREFIX + JSON.parse(json).list[4].weather[0].icon + ".png";
            document.getElementById("imagine1").src = imagine;

            var imagine7 = URL_WEATHER_ICON_PREFIX + JSON.parse(json).list[6].weather[0].icon + ".png";
            document.getElementById("imagine7").src = imagine7;

            var ora7 = JSON.parse(json).list[6].dt_txt;
            document.getElementById("ora7").innerHTML = getOra7(ora7);

            var descriere7 = JSON.parse(json).list[6].weather[0].description;
            document.getElementById("descriere7").innerHTML = descriere7;

            var temperatura7 = JSON.parse(json).list[6].main.temp;
            document.getElementById("temperatura7").innerHTML = temperatura7;

        }
    };
    xhttp.open("GET", URL_FORECAST_WEATHER + oras, true);
    xhttp.send();

}

function getData(ziua) {
    var data = "";
    for (i = 0; (i < ziua.length - 9); i++) {
        data = data + ziua[i];
    }
    return data;
}


function getOra(ziua) {
    var ora = "";
    for (i = 0; i < ziua.length; i++) {
        if (i >= (ziua.length - 9)) {
            ora = ora + ziua[i];
        }
    }
    return ora;
}

function getOra7(ziua7) {
    var ora7 = "";
    for (i = 0; i < ziua7.length; i++) {
        if (i >= (ziua7.length - 9)) {
            ora7 = ora7 + ziua7[i];
        }
    }
    return ora7;
}

function afiseazaPrognoza2() {
    var oras = document.getElementById("oras").value;
    console.log(oras);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = this.responseText;
            console.log(json)
            gJson = json;


            var ziua2 = JSON.parse(json).list[12].dt_txt;
            document.getElementById("ziua2").innerHTML = getData2(ziua2);

            var ora2 = JSON.parse(json).list[12].dt_txt;
            document.getElementById("ora2").innerHTML = getOra2(ora2);

            var descriere = JSON.parse(json).list[12].weather[0].description;
            document.getElementById("descriere2").innerHTML = descriere;

            var temperatura = JSON.parse(json).list[12].main.temp;
            document.getElementById("temperatura2").innerHTML = temperatura;

            var imagine2 = URL_WEATHER_ICON_PREFIX + JSON.parse(json).list[12].weather[0].icon + ".png";
            document.getElementById("imagine2").src = imagine2;

        }
    };
    xhttp.open("GET", URL_FORECAST_WEATHER + oras, true);
    xhttp.send();

}

function getData2(ziua2) {
    var data = "";
    for (i = 0; (i < ziua2.length - 9); i++) {
        data = data + ziua2[i];
    }
    return data;
}


function getOra2(ziua2) {
    var ora2 = "";
    for (i = 0; i < ziua2.length; i++) {
        if (i >= (ziua2.length - 9)) {
            ora2 = ora2 + ziua2[i];
        }
    }
    return ora2;
}

function afiseazaPrognoza3() {
    var oras = document.getElementById("oras").value;
    console.log(oras);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = this.responseText;
            console.log(json)
            gJson = json;


            var ziua3 = JSON.parse(json).list[20].dt_txt;
            document.getElementById("ziua3").innerHTML = getData3(ziua3);

            var ora3 = JSON.parse(json).list[20].dt_txt;
            document.getElementById("ora3").innerHTML = getOra3(ora3);

            var descriere = JSON.parse(json).list[20].weather[0].description;
            document.getElementById("descriere3").innerHTML = descriere;

            var temperatura = JSON.parse(json).list[20].main.temp;
            document.getElementById("temperatura3").innerHTML = temperatura;

            var imagine3 = URL_WEATHER_ICON_PREFIX + JSON.parse(json).list[20].weather[0].icon + ".png";
            document.getElementById("imagine3").src = imagine3;

        }
    };
    xhttp.open("GET", URL_FORECAST_WEATHER + oras, true);
    xhttp.send();

}

function getData3(ziua3) {
    var data = "";
    for (i = 0; (i < ziua3.length - 9); i++) {
        data = data + ziua3[i];
    }
    return data;
}


function getOra3(ziua3) {
    var ora3 = "";
    for (i = 0; i < ziua3.length; i++) {
        if (i >= (ziua3.length - 9)) {
            ora3 = ora3 + ziua3[i];
        }
    }
    return ora3;
}

function afiseazaPrognoza4() {
    var oras = document.getElementById("oras").value;
    console.log(oras);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = this.responseText;
            console.log(json)
            gJson = json;


            var ziua4 = JSON.parse(json).list[28].dt_txt;
            document.getElementById("ziua4").innerHTML = getData4(ziua4);

            var ora4 = JSON.parse(json).list[28].dt_txt;
            document.getElementById("ora4").innerHTML = getOra4(ora4);

            var descriere = JSON.parse(json).list[28].weather[0].description;
            document.getElementById("descriere4").innerHTML = descriere;

            var temperatura = JSON.parse(json).list[28].main.temp;
            document.getElementById("temperatura4").innerHTML = temperatura;

            var imagine4 = URL_WEATHER_ICON_PREFIX + JSON.parse(json).list[28].weather[0].icon + ".png";
            document.getElementById("imagine4").src = imagine4;

        }
    };
    xhttp.open("GET", URL_FORECAST_WEATHER + oras, true);
    xhttp.send();

}

function getData4(ziua4) {
    var data = "";
    for (i = 0; (i < ziua4.length - 9); i++) {
        data = data + ziua4[i];
    }
    return data;
}

function getOra4(ziua4) {
    var ora4 = "";
    for (i = 0; i < ziua4.length; i++) {
        if (i >= (ziua4.length - 9)) {
            ora4 = ora4 + ziua4[i];
        }
    }
    return ora4;
}


function afiseazaPrognoza5() {
    var oras = document.getElementById("oras").value;
    console.log(oras);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = this.responseText;
            console.log(json)
            gJson = json;


            var ziua5 = JSON.parse(json).list[36].dt_txt;
            document.getElementById("ziua5").innerHTML = getData5(ziua5);
            var ora5 = JSON.parse(json).list[36].dt_txt;
            document.getElementById("ora5").innerHTML = getOra5(ora5);

            var descriere = JSON.parse(json).list[36].weather[0].description;
            document.getElementById("descriere5").innerHTML = descriere;

            var temperatura = JSON.parse(json).list[36].main.temp;
            document.getElementById("temperatura5").innerHTML = temperatura;

            var imagine5 = URL_WEATHER_ICON_PREFIX + JSON.parse(json).list[36].weather[0].icon + ".png";
            document.getElementById("imagine5").src = imagine5;


        }
    };
    xhttp.open("GET", URL_FORECAST_WEATHER + oras, true);
    xhttp.send();

}

function getData5(ziua5) {
    var data = "";
    for (i = 0; (i < ziua5.length - 9); i++) {
        data = data + ziua5[i];
    }
    return data;
}

function getOra5(ziua5) {
    var ora5 = "";
    for (i = 0; i < ziua5.length; i++) {
        if (i >= (ziua5.length - 9)) {
            ora5 = ora5 + ziua5[i];
        }
    }
    return ora5;
}

function afiseazaPrognoza6() {
    var oras = document.getElementById("oras").value;
    console.log(oras);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = this.responseText;
            console.log(json)
            gJson = json;

            var ziua6 = JSON.parse(json).list[0].dt_txt;
            document.getElementById("ziua6").innerHTML = getData6(ziua6);
            var ora6 = JSON.parse(json).list[0].dt_txt;
            document.getElementById("ora6").innerHTML = getOra6(ora6);
            var descriere = JSON.parse(json).list[0].weather[0].description;
            document.getElementById("descriere6").innerHTML = descriere;
            var temperatura = JSON.parse(json).list[0].main.temp;
            document.getElementById("temperatura6").innerHTML = temperatura;
            var imagine6 = URL_WEATHER_ICON_PREFIX + JSON.parse(json).list[0].weather[0].icon + ".png";
            document.getElementById("imagine6").src = imagine6;

        }
    };
    xhttp.open("GET", URL_FORECAST_WEATHER + oras, true);
    xhttp.send();

}

function getData6(ziua6) {
    var data = "";
    for (i = 0; (i < ziua6.length - 9); i++) {
        data = data + ziua6[i];
    }
    return data;
}
function getOra6(ziua6) {
    var ora6 = "";
    for (i = 0; i < ziua6.length; i++) {
        if (i >= (ziua6.length - 9)) {
            ora6 = ora6 + ziua6[i];
        }
    }
    return ora6;
}


