var elevi = [];
var note = [];
var indexElevPeCareAmDatClick;

var medieNote = [];

function adaugareElev(){
var nume = document.getElementById("nume_elev").value;
elevi.push(nume);
note.push([]);
medieNote.push(0);
document.getElementById("nume_elev").value = "";
}

function displayElev(){
    var htmlElevi = `
    <table>
        <tr>
            <th>Nume elev</th>
            <th>Medie note</th>
            <th></th>
            </tr>
            `;
       
    for (var i = 0; i < elevi.length; i++){
        htmlElevi = htmlElevi + `
        <tr>
            <td>${elevi[i]}</td>
            <th>${medieNote[i]}</th>
            <td>
            <button onclick="indexElevPeCareAmDatClick=${i}; displayNote();">Vezi notele </button>
            </td>
            </tr>
        `;
    }
   htmlElevi = htmlElevi + "</table>"
document.getElementById("lista_elevi").innerHTML = htmlElevi;
    }

    function displayNote(){

        document.getElementById("span_nume_elev").innerHTML = elevi[indexElevPeCareAmDatClick];
        document.getElementById("note_wrapper").style.display = "block";

        //pas 1 -preluam notele pe care le are elevul
        var NoteElev = note[indexElevPeCareAmDatClick];

        // pas 2 - compunem html ul cu notele elevului
        var htmlNote = "";
        for(var i = 0; i< NoteElev.length; i++){
            htmlNote = htmlNote + NoteElev[i] + "<br/>";
        
        }

        //pas 3 - afisam html ul cu notele elevului in ecran

        document.getElementById("lista_note").innerHTML = htmlNote;
    }
    function hideNote() {
    document.getElementById("note_wrapper").style.display = "note";
    }

    function adaugaNota(){
        var nota = document.getElementById("nota_elev").value;
        
        //PAS 1 -preiau lista de note din matrice
      
        var noteElev = note[indexElevPeCareAmDatClick];

        //PAS 2 - adaug nota noua in lista

        noteElev.push(nota);

//sterge nota din imput introdusa de user

        document.getElementById("nota_elev").value = ""; 
    }

    function sumaNoteElev(){
        var NoteElev = note[indexElevPeCareAmDatClick];
        var sum = 0;
             for (var i = 0; i < NoteElev.length; i++){
                  sum = sum  + parseInt(NoteElev[i]);
            }
            return sum;
    }

    function medieNoteElev() {
        var noteElev = note[indexElevPeCareAmDatClick];

        var sumaNote = sumaNoteElev();
        var nrNote = noteElev.length;
        var mediaNotelor = sumaNote / nrNote;

        return mediaNotelor;
    }

    