let slumptal =parseInt(Math.random()*7);

const lander = ["Holland", "Belgien", "Italien", "Rumänien", "Albanien",
"Tjeckien", "Polen", "Österrike"];
const stader = ["Amsterdam", "Bryssel", "Rom", "Bukarest", "Tirana","Prag",
"Warzawa", "Österrike"];

let p_fraga=document.querySelector("#fraga");
let input_svar=document.querySelector("#svar");
let p_resultat=document.querySelector("#resultat");
let rakna = 0;

function fraga(){
    rakna +=1;
    // Skapa slumptal
    slumptal=parseInt(Math.random()*7);
    // Hämta landet som vi ska använda i frågan
    let fraga = lander[slumptal]
    // Visa frågan för användaren
    p_fraga.textContent= "Fråga "+rakna+" Ange huvudstad för "+fraga
}
let poang=0;
function angesvar(){
    // Hämta användarens svar och spara det
    let svar = input_svar.value ;
    // Skriv ut det rätta svaret till användaren.
    p_resultat.textContent="Rätt svar: "+ stader[slumptal];
    // Rensa input-fältet så att det är  tomt
    input_svar.value="";
    // Jämför om användarens svar och rätta svaret är samma
    if(svar==stader[slumptal])
    // Om sant så Öka poängen med 1
    poang++;
    //Lägg till information om poängen till användaren
    p_resultat.textContent += ",poäng="+poang;
}
