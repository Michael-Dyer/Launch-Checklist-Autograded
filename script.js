//import {addDestinationInfo, validateInput, formSubmission, myFetch, pickPlanet} from './scriptHelper.js';
//import {formSubmission} from './scriptHelper.js';






window.addEventListener("load", function() {
 

    //handling form submit
    launchForm.addEventListener("submit", function(event){
        event.preventDefault();



        var list = document.getElementById("faultyItems");
        var pilot = document.getElementById("pilot");
        var copilot = document.getElementById("copilot");
        var fuelLevel = document.getElementById("fuelLevel");
        var cargoLevel = document.getElementById("cargoLevel");

        formSubmission(document, list, pilot.value,copilot.value,fuelLevel.value,cargoLevel.value);

    })



    var pickedPlanet;
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        //console.log(listedPlanets);

    }).then(function () {
        pickedPlanet = pickPlanet(listedPlanets);
        //console.log(pickedPlanet);

        addDestinationInfo(document,pickedPlanet.name,pickedPlanet.diameter,pickedPlanet.star,pickedPlanet.distance,pickedPlanet.moons,pickedPlanet.image)
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
    

 });



 