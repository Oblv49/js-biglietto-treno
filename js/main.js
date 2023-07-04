//input cliente per nome e cognome, km da percorrere e celta fascia de'età
function submitForm(event) {

    event.preventDefault();

    //controllo se l'evento funziona
    console.log("Il Form Funziona");

    //variabili contenitori imput
    let clientName = document.getElementById("nameAndSurname").value;
    let kmToTravel = parseInt(document.getElementById("km").value);
    let age = document.getElementById("ageRange").value;

    //controllo se le info inserite sono corrette
    if (typeof clientName == 'string' && kmToTravel >= 1 && kmToTravel <= 10000 && ageRange.selectedIndex != 0) {
        
        //operazioni
        let ticketCost = kmToTravel * 0.21;
        let carriageNumber = Math.floor(Math.random() * 7) + 1;
        let codeCp = Math.floor(Math.random() * 10000) + 1;

        //calcolo prezzo in base alla scelta dell'utente
        if (age == "20% sconto Minorenni") {

            document.getElementById("ticket").classList.remove("d-none");
            document.getElementById("informationForm").classList.add("d-none");
            document.getElementById("passengerName").innerHTML = clientName;
            document.getElementById("typeOffer").innerHTML = age;
            document.getElementById("carriage").innerHTML = carriageNumber;
            document.getElementById("cpCode").innerHTML = codeCp;
            document.getElementById("ticketPrice").innerHTML = (ticketCost - ((ticketCost / 100) * 20)).toFixed(2);

        } else if (age == "40% sconto Over65") {

            document.getElementById("ticket").classList.remove("d-none");
            document.getElementById("informationForm").classList.add("d-none");
            document.getElementById("passengerName").innerHTML = clientName;
            document.getElementById("typeOffer").innerHTML = age;
            document.getElementById("carriage").innerHTML = carriageNumber;
            document.getElementById("cpCode").innerHTML = carriageNumber;
            document.getElementById("ticketPrice").innerHTML = (ticketCost - ((ticketCost / 100) * 40)).toFixed(2);

        } else {

            document.getElementById("ticket").classList.remove("d-none");
            document.getElementById("informationForm").classList.add("d-none");
            document.getElementById("passengerName").innerHTML = clientName;
            document.getElementById("typeOffer").innerHTML = age;
            document.getElementById("carriage").innerHTML = carriageNumber;
            document.getElementById("cpCode").innerHTML = codeCp;
            document.getElementById("ticketPrice").innerHTML = ticketCost.toFixed(2);

        }

    } else {
        
        document.getElementById("errorInfo").classList.remove("d-none");

    }

}
