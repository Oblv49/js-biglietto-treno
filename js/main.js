//input cliente per nome e cognome, km da percorrere e celta fascia de'età
function submitForm(event){
    
    event.preventDefault();

    //controllo se l'evento funziona
    console.log("Il Form Funziona");

    //variabili contenitori imput
    let clientName = document.getElementById("nameAndSurname").value;
    let kmToTravel = parseInt(document.getElementById("km").value);
    let age = document.getElementById("ageRange").checked;

    //operazioni
    let ticketCost = kmToTravel * 0.21;
    let carriageNumber = Math.floor(Math.random() * 7) + 1; 
    let codeCp = Math.floor(Math.random() * 10000) + 1; 
   

}
