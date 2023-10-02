// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    return Math.abs(location - 42)
} 

function distanceFromHqInFeet(someValue){
    return 264*distanceFromHqInBlocks(someValue)
}

function distanceTravelledInFeet(street1, street2){
    return Math.abs(264*(street2-street1))
}

function calculatesFarePrice (start, destination){
    let numberOfFeet = distanceTravelledInFeet(start, destination);
    if (numberOfFeet <= 400) {
        return 0}
    else if(numberOfFeet<=2000) 
    return (numberOfFeet-400)*0.02
    else if (numberOfFeet<=2500) 
    return 25
    else { 
        return 'cannot travel that far'}
}