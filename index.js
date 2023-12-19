// This function returns the first two drivers from the given array.
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

// This function returns the last two drivers from the given array.
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

// This array stores two functions that can be used to select drivers.
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// This higher-order function returns a new function that multiplies a fare by the given multiplier.
function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}

// This function doubles a fare. It's created by calling createFareMultiplier with 2.
const fareDoubler = createFareMultiplier(2);

// This function triples a fare. It's created by calling createFareMultiplier with 3.
const fareTripler = createFareMultiplier(3);

// This function selects different drivers based on the function passed as the second argument.
// It can choose either the first two or the last two drivers from the array of drivers.
function selectDifferentDrivers(drivers, whichDrivers) {
    return whichDrivers(drivers);
}
