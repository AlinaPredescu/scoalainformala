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

            var prognoze = JSON.parse(json).list;
            var trs={};
            for (var i = 0; i < prognoze.length; i++) {
                var prognoza = prognoze[i];
                prognoza.zi = getData(prognoza.dt_txt);
                if (trs[prognoza.zi]===undefined){
                    trs[prognoza.zi]=1;
                }else{
                    trs[prognoza.zi]++;
                }
                prognoza.ora = getOra(prognoza.dt_txt);
                prognoza.descriere = prognoza.weather[0].description;
                prognoza.temperatura = prognoza.main.temp;
                prognoza.imagine = URL_WEATHER_ICON_PREFIX + prognoza.weather[0].icon + ".png";

                var str = `
                <td width=17.7%>
                    <p>Ziua: ${prognoza.zi}</p>
                    <img src="${prognoza.imagine}"/>
                    <p>Ora:${prognoza.ora}</p>
                    <p>Temperatura:${prognoza.temperatura}</p>
                    <p>Descriere: ${prognoza.descriere} </p>
                </td>
                `
                document.querySelector("#myTable tr:nth-of-type("+trs[prognoza.zi]+")").innerHTML+=str;
            }
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
