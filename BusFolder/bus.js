

let from = document.getElementById("start");
let to = document.getElementById("end");
let businfo = document.getElementsByClassName("displayBus")[0];
let totalPrice;
let numberOfTickets = document.getElementById("totalTicket");
//lj
// one
//two
//three
//four fivr
//four
//fivre
//uhyg
const busData = {
    "kmch-gandhipuram":
        [
            { bus: "SITRA", shift: "Morning", timing_start: "08:00 AM", timing_end: "10:00 AM" },
            { bus: "STALIN", shift: "Morning", timing_start: "10:00 AM", timing_end: "11:00 AM" },
            { bus: "MODI", shift: "Afternoon", timing_start: "01:00 PM", timing_end: "02:00 PM" },
            { bus: "Govt", shift: "Evening", timing_start: "10:00 PM", timing_end: "11:00 PM" }
        ],
    "kmch-triuppur":
        [
            { bus: "KOVAI", shift: "Morning", timing_start: "08:00 AM", timing_end: "10:00 AM" },
            { bus: "STALIN", shift: "Morning", timing_start: "10:00 AM", timing_end: "12:00 AM" },
            { bus: "MODI", shift: "Afternoon", timing_start: "01:00 PM", timing_end: "02:00 PM" },
            { bus: "STALIN", shift: "Evening", timing_start: "10:00 AM", timing_end: "12:00 AM" },
            { bus: "Govt", shift: "Evening", timing_start: "02:00 PM", timing_end: "03:00 PM" }
        ],
    "gandhipuram-kmch":
        [
            { bus: "SITRA", shift: "Morning", timing_start: "08:00 AM", timing_end: "10:00 AM" },
            { bus: "STALIN", shift: "Morning", timing_start: "10:00 AM", timing_end: "12:00 AM" },
            { bus: "MODI", shift: "Afternoon", timing_start: "01:00 PM", timing_end: "02:00 PM" },
            { bus: "STALIN", shift: "Evening", timing_start: "10:00 AM", timing_end: "12:00 AM" },
            { bus: "Govt", shift: "Evening", timing_start: "02:00 PM", timing_end: "03:00 PM" }
        ],
    "gandhipuram-triuppur":
        [
            { bus: "KOVAI", shift: "Morning", timing_start: "08:00 AM", timing_end: "10:00 AM" },
            { bus: "STALIN", shift: "Morning", timing_start: "10:00 AM", timing_end: "12:00 AM" },
            { bus: "MODI", shift: "Afternoon", timing_start: "01:00 PM", timing_end: "02:00 PM" },
            { bus: "STALIN", shift: "Evening", timing_start: "10:00 AM", timing_end: "12:00 AM" },
            { bus: "Govt", shift: "Evening", timing_start: "02:00 PM", timing_end: "03:00 PM" }
        ],
    "triuppur-gandhipuram":
        [
            { bus: "SITRA", shift: "Morning", timing_start: "08:00 AM", timing_end: "10:00 AM" },
            { bus: "STALIN", shift: "Morning", timing_start: "10:00 AM", timing_end: "12:00 AM" },
            { bus: "MODI", shift: "Afternoon", timing_start: "01:00 PM", timing_end: "02:00 PM" },
            { bus: "STALIN", shift: "Evening", timing_start: "10:00 AM", timing_end: "12:00 AM" },
            { bus: "Govt", shift: "Evening", timing_start: "02:00 PM", timing_end: "03:00 PM" }
        ],
    "triuppur-kmch":
        [
            { bus: "KOVAI", shift: "Morning", timing_start: "08:00 AM", timing_end: "10:00 AM" },
            { bus: "STALIN", shift: "Morning", timing_start: "10:00 AM", timing_end: "12:00 AM" },
            { bus: "MODI", shift: "Afternoon", timing_start: "01:00 PM", timing_end: "02:00 PM" },
            { bus: "STALIN", shift: "Evening", timing_start: "10:00 AM", timing_end: "12:00 AM" },
            { bus: "Govt", shift: "Evening", timing_start: "07:00 PM", timing_end: "08:00 PM" }
        ]
};


function display() {

    let findbus = from.value + "-" + to.value;
    console.log(findbus)
    let timings = busData[findbus]

    if (timings) {
        let displayinfo = "<label for='bus' id='select'>Select Your Bus:</label><select id='bus'>"
        timings.forEach(timing => {
            displayinfo += `<option value="${timing.bus}|${timing.shift}|${timing.timing_start}">${timing.bus}->${timing.shift}->${timing.timing_start} <--> ${timing.timing_end}</option>`
       
        });

        displayinfo += "</select>";
        displayinfo += "<button onclick='totalSeat()' id='bookButton'>Ticket Price</button>"
        businfo.innerHTML = displayinfo;

    }
    else {
        businfo.innerHTML = "No Bus Available for this route";
    }
}
let selectedBusPrice;

function ticketPrice(selectedBus, route) {

    console.log("Selected Bus:", selectedBus);
    console.log("Selected Route:", route);
   

    if (route === "kmch-gandhipuram" && selectedBus === "Govt") {
    
        document.getElementById("price").textContent = "10.00";

    } else if (route === "kmch-gandhipuram" && selectedBus !== "Govt") {
        document.getElementById("price").textContent = "5.00";

    } else if (route === "kmch-triuppur" && selectedBus === "Govt") {
        document.getElementById("price").textContent = "12.00";

    } else if (route === "kmch-triuppur" && selectedBus !== "Govt") {
        document.getElementById("price").textContent = "7.00";

    }
    else if (route === "gandhipuram-kmch" && selectedBus === "Govt") {
        document.getElementById("price").textContent = "10.00";

    } else if (route === "gandhipuram-kmch" && selectedBus !== "Govt") {
        document.getElementById("price").textContent = "5.00";

    } else if (route === "gandhipuram-triuppur" && selectedBus === "Govt") {
        document.getElementById("price").textContent = "12.00";

    } else if (route === "gandhipuram-triuppur" && selectedBus !== "Govt") {
        document.getElementById("price").textContent = "7.00";

    }
    else if (route === "triuppu-gandhipuram" && selectedBus === "Govt") {
        document.getElementById("price").textContent = "10.00";

    } else if (route === "triuppur-gandhipuram" && selectedBus !== "Govt") {
        document.getElementById("price").textContent = "5.00";

    } else if (route === "triuppu-kmch" && selectedBus === "Govt") {
        document.getElementById("price").textContent = "12.00";

    } else if (route === "triuppur-kmch" && selectedBus !== "Govt") {
        document.getElementById("price").textContent = "7.00";

    }

    else {
        document.getElementById("price").textContent = "00.00";
        console.log("No specific price set, defaulting to 00.00");
    }

    selectedBusPrice = document.getElementById("price").textContent;
    console.log(selectedBusPrice)
    amount(selectedBusPrice)

}



function bookBus() {
    const selectedOption = document.getElementById("bus").value.split("|");
    const selectedBus = selectedOption[0];
    const selectedShift = selectedOption[1];
    const startTime = selectedOption[2];
    console.log(selectedBus)
    console.log(selectedShift)
    console.log(startTime)
    const busDetails = findBusDetails(selectedBus, selectedShift);
    let findbus = from.value + "-" + to.value;
    startCountdown(startTime, selectedBus, findbus);
     document.getElementById("head").textContent = "Ticket Price:";
    

    if (busDetails) {
        const fullInfo = `You have selected ${selectedBus}: Shift - ${selectedShift}, Timing - ${busDetails.timing_start} - ${busDetails.timing_end}`;

        document.getElementById("showDetails").innerHTML = fullInfo

    } else {
        alert(`Sorry, no information found for ${selectedBus}`);
    }
}

let totalSeats = document.getElementById("numberOfTickets");
//  totalSeats.addEventListener("input", amount);

function totalSeat() {
    let numberOfTickets = parseInt(totalSeats.value);
    if (isNaN(numberOfTickets)) {
        document.querySelector(".modalWindow").style.display = "block";
        document.querySelector(".border").style.backgoundColor="gray";
        // document.querySelector(".modalWindow").style.backgroundColor = "gray";
    } else {
        document.querySelector(".modalWindow").style.display = "none";
        bookBus(); 

    }
}

function closeModalWindow() {
    document.querySelector(".modalWindow").style.display = "none";
}

function amount(selectedBusPrice) {
    const numberOfTickets = parseInt(totalSeats.value);
    if (!isNaN(numberOfTickets)) {
        const totalAmount = selectedBusPrice * numberOfTickets;
        document.getElementById("total").innerHTML =totalAmount;
        console.log(totalAmount);
        console.log(selectedBusPrice);
        console.log(numberOfTickets);
    }
}

function findBusDetails(busName, selectedShift) {
    for (const route in busData) {
        const timings = busData[route];
        for (const timing of timings) {
            if (timing.bus === busName && timing.shift === selectedShift) {
                return timing;
            }
        }
    }
    return null;
}

let countdownInterval;
let countdownElement = document.getElementById("countdown");
function startCountdown(startTime, selectedBus, findbus) {
    clearInterval(countdownInterval);

    const selectedDate = new Date(document.getElementById("dateBook").value);
    const currentDate = new Date();




    const [time, period] = startTime.split(" ");
    const [hours, minutes] = time.split(":");
    let adjustedHours = parseInt(hours, 10);

    let currentTime;

   


    if (period === "PM" && adjustedHours < 12) {
        adjustedHours += 12;
    } else if (period === "AM" && adjustedHours === 12) {
        adjustedHours = 0;
    }

    console.log(adjustedHours)


    const selectedDateTime = new Date(selectedDate);
    selectedDateTime.setHours(adjustedHours, parseInt(minutes, 10), 0, 0);

    if (selectedDateTime <= currentDate.setHours(0, 0, 0, 0)) {
        document.getElementById("countdown").textContent = "Please select---future date";
        document.getElementById("price").textContent = "Please select--future date";
        return;
    }




    countdownInterval = setInterval(() => {
        currentTime = new Date();
        const remainingTime = selectedDateTime - currentTime;
        console.log("___________________________________________")
        console.log(selectedDateTime)
        console.log(currentTime)
        console.log(remainingTime)

        if (remainingTime <= 0) {
            console.log("Sorry, You missed your bus!");
            countdownElement.textContent = "Sorry, You missed your bus!";
            return;
        }

        else if (isNaN(selectedDateTime)) {
            clearInterval(countdownInterval);
            countdownElement.textContent = "Enter Your travel Date!";
            document.getElementById("price").textContent = "Enter Your travel Date!";
            return;
        }


        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        ticketPrice(selectedBus, findbus);
        
    }, 1000);
    

}

// function preview(){
// let bookingPage= document.getElementsByClassName("border")[0];
// bookingPage.style.display="none";
// }

function preview() {
   
    let bookingPage = document.querySelector(".border");
    bookingPage.style.display = "none";
    document.getElementById("userInfo").style.display = "flex";
    const selectedBusInfo = document.getElementById("showDetails").innerHTML;
    const amountPaid = document.getElementById("total").innerHTML;
    const userInfoSection = document.getElementById("userInfo");
    userInfoSection.innerHTML += `<h3>${selectedBusInfo}</h3>`;
    userInfoSection.innerHTML += `<h4>Amount Paid: ${amountPaid}</h4>`; 
    // userInfoSection.innerHTML += "Time to Go:"
    // const countdownElement = document.getElementById("countdown");

    // userInfoSection.appendChild(countdownElement);
    userInfoSection.innerHTML += `<h5>Enjoy your Travel!!</h5>`
}


from.addEventListener("change", display);
to.addEventListener("change", display);

