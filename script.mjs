// PART ONE ---------------------------------------
// initial numbers to verify
const num1 = 10;

const num2 = 15;

const num3 = 20;

const num4 = 5;

//do numbers add to 50?
const isSum50 = (num1 + num2 + num3 + num4) === 50;
console.log(isSum50); 
const areTwoOdd = (num1 % 2) + (num2 % 2) + (num3 % 2) + (num4 % 2) >= 2;
console.log(areTwoOdd);

// numbers can't be larger than 25 
const areLargerThan25 = num1  > 25 || num2 > 25 || num3 > 25 || num4 > 25;
console.log(areLargerThan25);

//unique numbers 
const unique = num1 != num2 && num1 != num3 && num1 != num4 && num2 != num3 && num2 != num4 && num3 != num4;
console.log(unique);

//did numbers pass all validations checks?
const isValid = isSum50 && areTwoOdd && areLargerThan25 && unique;
console.log(isValid);

// PART TWO ---------------------------------------
const distance = 1500;
const budget = 175;
const fuelCost = 3;
const slowSpeed = 30;
const mediumSpeed = 28;
const fastSpeed = 23;


// How many gallons of fuel will you need for the entire trip? 
// distance 1500 / slow
// distance 1500 / medium
// distance 1500 / fast
const fuelSlow = distance / slowSpeed;
const fuelMedium = distance / mediumSpeed;
const fuelFast = distance / fastSpeed;


console.log(`Driving at 55mph will use ${fuelSlow} gallons of fuel.`);

console.log(`Driving at 60mph will use ${fuelMedium.toFixed(2)} gallons of fuel.`);

console.log(`Driving at 75mph will use ${fuelFast.toFixed(2)} gallons of fuel.`);

// Will your budget be enough to cover the fuel expense?
// fuel cost 3 x mph
const slowCost = fuelCost * fuelSlow;
const mediumCost = fuelCost * fuelMedium;
const fastCost = fuelCost * fuelFast;

console.log(`The cost of driving at 55mph will be within my budget: ${slowCost < budget}.`);
console.log(`The cost of driving at 60mph will be within my budget: ${mediumCost < budget}.`)
console.log(`The cost of driving at 75mph will be within my budget: ${fastCost < budget}.`)

// How long will the trip take in hours? 
// distance divided by 55/60/75?
const slowTime = distance / 55;
const mediumTime = distance / 60;
const fastTime = distance / 75;

console.log(`It will take ${slowTime.toFixed(2)} hours to complete the trip.`)
console.log(`It will take ${mediumTime} hours to complete the trip.`)
console.log(`It will take ${fastTime} hours to complete the trip.`)


// PART THREE ---------------------------------------
