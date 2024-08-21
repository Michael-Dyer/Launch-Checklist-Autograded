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
    if (testInput==""){
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
    if (pilot==""||copilot==""||fuelLevel==""||cargoLevel==""){
        //alert("Make sure that you fill out each field")
        readyFlag = "no change";
    }
    else if(validateInput(pilot)!="Not a Number"||validateInput(copilot)!="Not a Number"){
        //alert(`Make sure that "Pilot Name" and "Co-Pilot Name" are both entered as names`);
        readyFlag = "no change";
    }
    else if(validateInput(fuelLevel)!="Is a Number"||validateInput(cargoLevel)!="Is a Number"){
        //alert(`Make sure that "Fuel Level (L)" and "Cargo Mass (kg)" are both entered as numbers`);
        readyFlag = "no change";
   
    }
  
    list.style.visibility = "visible";


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



    if (fuelLevel<10000){
        list.style.visibility = "visible";
        fuelStatus.innerHTML="Fuel level too low for launch"


        readyFlag="not ready";
    }
    else if(readyFlag!="no change"){
        fuelStatus.innerHTML="Fuel level high enough for launch"
    }
    

    if(cargoLevel>10000){
        list.style.visibility = "visible";
        cargoStatus.innerHTML="Cargo mass too heavy for launch"

        readyFlag="not ready";
    }
    else if(readyFlag!="no change"){
        cargoStatus.innerHTML="Cargo mass low enough for launch"
    }
    

    


    //check ready Flag
    if (readyFlag == "not ready"||readyFlag == "no change"){
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    }
    else if(readyFlag == "ready"){
        launchStatus.style.color = "green";
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
    }


    //console.log(document.getElementById("launchStatus"));
    
 }
 
 async function myFetch() {
     let planetsReturned;
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {


         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;