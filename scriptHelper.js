// Write your helper functions here!

require('cross-fetch/polyfill');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
    // Here is the HTML formatting for our mission target div.
    missionTarget.innerHTML =`
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
    `
 }
 
 function validateInput(testInput) {
    if (testInput===""){
        return "Empty"
    }
    else if (isNaN(testInput)){
        return "Not a Number"
    }
    else if (isNaN(testInput)==false){
        return "Is a Number"
    }
    else{
        return "This shouldn't display"
    }
 }
 
 //var launchStatus = document.getElementById("launchStatus");

 //had to get rid of more sophisticated validation to get tests to run.
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    var launchStatus = document.getElementById("launchStatus");
    var pilotStatus = document.getElementById("pilotStatus");
    var copilotStatus = document.getElementById("copilotStatus");
    var fuelStatus = document.getElementById("fuelStatus");
    var cargoStatus = document.getElementById("cargoStatus");

    var readyFlag = "ready";

    //validate all text is filled out correctly, don't display otherwise

    //alert isn't working on test, chaning to console log
    
    if(validateInput(pilot)!="Not a Number"||validateInput(copilot)!="Not a Number"){
        document.defaultView.alert(`Make sure that "Pilot Name" and "Co-Pilot Name" are both entered as names`);
        readyFlag = "no change";
        list.style.visibility = "hidden";
        launchStatus.style.color = "black";
        launchStatus.innerHTML = "Awaiting Information Before Launch";
        return;

    }
    else if(validateInput(fuelLevel)!="Is a Number"||validateInput(cargoLevel)!="Is a Number"){
        document.defaultView.alert(`Make sure that "Fuel Level (L)" and "Cargo Mass (kg)" are both entered as numbers`);
        readyFlag = "no change";
        list.style.visibility = "hidden";
        launchStatus.style.color = "black";
        launchStatus.innerHTML = "Awaiting Information Before Launch";
        console.log("out in is a number check")
        return;
    }
    else if (validateInput(pilot)=="Empty"||validateInput(copilot)=="Empty"||validateInput(fuelLevel)=="Empty"||validateInput(cargoLevel)=="Empty"){
        document.defaultView.alert("Make sure that you fill out each field")
        readyFlag = "no change";
        list.style.visibility = "hidden";
        launchStatus.style.color = "black";
        launchStatus.innerHTML = "Awaiting Information Before Launch";
        console.log("out on blank check")
        return;

    }
    
  
    //list.style.visibility = "visible";


    //make sure input is correct values
    if (validateInput(pilot)=="Not a Number"){
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    }
    else{
        pilotStatus.innerHTML = "Please enter a valid Pilot name";
    }

    if(validateInput(copilot)=="Not a Number"){
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    }
    else{
        copilotStatus.innerHTML = "Please enter a valid Pilot name";
    }


    //if(fuelLevel<10000&&cargoLevel>10000){
    
    console.log(`fulestatues is ${fuelLevel} cargo is ${cargoLevel}`)
    
    console.log(readyFlag)
    if(cargoLevel>10000&&readyFlag!="no change"){
        //list.style.visibility = "visible";
        cargoStatus.innerHTML="Cargo mass too heavy for launch"

        console.log("in too much cargo")
        readyFlag="not ready";
    }
    else{
        cargoStatus.innerHTML="Cargo mass low enough for launch"
    }

    if (fuelLevel<10000&&fuelLevel!="no change"){
        list.style.visibility = "visible";
        console.log("in not enough fuel")

        fuelStatus.innerHTML="Fuel level too low for launch"

        readyFlag="not ready";
    }
    else{
        fuelStatus.innerHTML="Fuel level high enough for launch"
    }

    //adding this in to catch both cases
    if (cargoLevel>10000&&fuelLevel<10000&&readyFlag!="no change"){
        cargoStatus.innerHTML="Cargo mass too heavy for launch"
        fuelStatus.innerHTML="Fuel level too low for launch"
        readyFlag="not ready";
        console.log("in both")
    }
    console.log(readyFlag)

    
    //check ready Flag
    if (readyFlag == "not ready"){
        console.log("in not ready")
        list.style.visibility = "visible";
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    }
    else if(readyFlag == "ready"){
        console.log("in ready")
        list.style.visibility = "visible";
        launchStatus.style.color = "green";
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
    }
    else{
        console.log("in other")
        list.style.visibility = "hidden"
    }


    //console.log(document.getElementById("launchStatus"));
    
 }
 
 async function myFetch() {
     let planetsReturned;
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        //return response to planets returned
        return response.json();

         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    //return random element
    let randPlanet = Math.floor(Math.random() * planets.length)
    return planets[randPlanet];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;