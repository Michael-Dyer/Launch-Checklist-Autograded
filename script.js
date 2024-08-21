//import {addDestinationInfo, validateInput, formSubmission, myFetch, pickPlanet} from './scriptHelper.js';
//import {formSubmission} from './scriptHelper.js';

//const { formSubmission } = require("./scriptHelper");





window.addEventListener("load", function() {
 

    //handling form submit
    launchForm.addEventListener("submit", function(event){
        event.preventDefault();



        var list = document.getElementById("faultyItems");
        var pilot = document.getElementById("pilot");
        var copilot = document.getElementById("copilot");
        var fuelLevel = document.getElementById("fuelLevel");
        var cargoLevel = document.getElementById("cargoLevel");



        formSubmission(document, list,pilot.value,copilot.value,fuelLevel.value,cargoLevel.value);




    })




    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);

    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    


    var launchStatusCheck = document.getElementById("launchStatusCheck");
    var missionTarget = document.getElementById("missionTarget");
    
    

 });



 