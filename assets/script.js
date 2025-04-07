// ATTRIBUTION & CREDIT
// Coded with assistance from Liv Beruti, Parsons MFA CD

let espressoNew = true;
let doppioNew = true;
let threeEspressoNew = true;
let cafeZorroNew = true;
let americanoNew = true;
let cappuccinoNew = true;
let latteNew = true;
let cortadoNew = true;
let flatWhiteNew = true;
let hotChocolateNew = true;
let affogatoNew = true;
let mochaNew = true;
let blackEyeNew = true;
let redEyeNew = true;



let mysteryDrinks = document.querySelectorAll('.drink');
let mysteryDrinkList = [];
let discoverDrinkCounter = -1

mysteryDrinks.forEach((drink) => {
  mysteryDrinkList.push(drink);
});

console.log(mysteryDrinkList);

let divOne = document.getElementById("one");
let divTwo = document.getElementById("two");
let divThree = document.getElementById("three");
let divFour = document.getElementById("four");
let divFive = document.getElementById("five");
let divSix = document.getElementById("six");

let divList = [divOne, divTwo, divThree, divFour, divFive, divSix];

let counter = -1;
let coffeeMix = [];

let espressoButton = document.getElementById("espresso-button");
let hotWaterButton = document.getElementById("hot-water-button");
let milkFoamButton = document.getElementById("milk-foam-button");
let steamedMilkButton = document.getElementById("steamed-milk-button");
let chocolateButton = document.getElementById("chocolate-button");
let iceCreamButton = document.getElementById("ice-cream-button");
let creamButton = document.getElementById("cream-button");
let dripCoffeeButton = document.getElementById("drip-coffee-button");

let refreshButton = document.getElementById("refresh-button");
let serveButton = document.getElementById("serve-button");

//INGREDIENTS

// ESPRESSO
espressoButton.addEventListener("click", ()=>{
	console.log('Espresso added')
	counter += 1 
	if(counter > 5){
		alert("Please stop")
	} else {
		divList[counter].style.backgroundColor = "darkgoldenrod";
		coffeeMix.push("Espresso")
		console.log(coffeeMix)
	}
})

// HOT WATER
hotWaterButton.addEventListener("click", ()=>{
	console.log('Hot Water added')
	counter += 1;
	if (counter > 5) {
		alert("Please stop");
	} else {
		divList[counter].style.backgroundColor = "skyblue";
		coffeeMix.push("Hot Water");
		console.log(coffeeMix);
	}
});

// MILK FOAM
milkFoamButton.addEventListener("click", ()=>{
	console.log('Milk Foam added');
	counter += 1;
	if (counter > 5) {
		alert("Please stop");
	} else {
	divList[counter].style.backgroundColor = "bisque";
		coffeeMix.push("Milk Foam");
		console.log(coffeeMix);
	}
});

// STEAMED MILK
steamedMilkButton.addEventListener("click", ()=>{
	console.log('Steamed Milk added');
	counter += 1;
	if (counter > 5) {
		alert("Please stop");
	} else {
		divList[counter].style.backgroundColor = "ivory";
		coffeeMix.push("Steamed Milk");
		console.log(coffeeMix);
	}
});

// CHOCOLATE
chocolateButton.addEventListener("click", ()=>{
	console.log('Chocolate added');
	counter += 1;
	if (counter > 5) {
		alert("Please stop");
	} else {
		divList[counter].style.backgroundColor = "chocolate";
		coffeeMix.push("Chocolate");
		console.log(coffeeMix);
	}
});

// ICE CREAM
iceCreamButton.addEventListener("click", ()=>{
	console.log('Ice Cream added');
	counter += 1;
	if (counter > 5) {
		alert("Please stop");
	} else {
		divList[counter].style.backgroundColor = "lightyellow";
		coffeeMix.push("Ice Cream");
		console.log(coffeeMix);
	}
});

// CREAM
creamButton.addEventListener("click", ()=>{
	console.log('Cream added');
	counter += 1;
	if (counter > 5) {
		alert("Please stop");
	} else {
		divList[counter].style.backgroundColor = "mintcream";
		coffeeMix.push("Cream");
		console.log(coffeeMix);
	}
});

// DRIP COFFEE
dripCoffeeButton.addEventListener("click", ()=>{
	console.log('Drip Coffee added');
	counter += 1;
	if (counter > 5) {
		alert("Please stop");
	} else {
		divList[counter].style.backgroundColor = "saddlebrown";
		coffeeMix.push("Drip Coffee");
		console.log(coffeeMix);
	}
});



refreshButton.addEventListener("click", ()=>{
	divList.forEach(box => {
		box.style.backgroundColor = "transparent"
	});

	counter = -1;
	coffeeMix = [];
})


serveButton.addEventListener("click", ()=>{

	function booleanCheck(recipeBool, stringForAlert, imgSrc){
		if(recipeBool){
			discoverDrinkCounter += 1;
			recipeBool = false;
			stringForAlert += " — and it's a brand new discovery!";
			mysteryDrinkList[discoverDrinkCounter].src = imgSrc

		}
		return { recipeBool, stringForAlert };
	}



	let espressoCount = coffeeMix.filter(ingredient => ingredient === "Espresso").length;
	let hotWaterCount = coffeeMix.filter(ingredient => ingredient === "Hot Water").length;
	let milkFoamCount = coffeeMix.filter(ingredient => ingredient === "Milk Foam").length;
	let steamedMilkCount = coffeeMix.filter(ingredient => ingredient === "Steamed Milk").length;
	let chocolateCount = coffeeMix.filter(ingredient => ingredient === "Chocolate").length;
	let iceCreamCount = coffeeMix.filter(ingredient => ingredient === "Ice Cream").length;
	let creamCount = coffeeMix.filter(ingredient => ingredient === "Cream").length;
	let dripCoffeeCount = coffeeMix.filter(ingredient => ingredient === "Drip Coffee").length;

	
// RECIPES

if (espressoCount === 1 && steamedMilkCount === 1 && coffeeMix.length == 2) {
	let alertString = "You made a Cortado";
	let sourceImg = "assets/single-espresso.png";
	let result = booleanCheck(cortadoNew, alertString, sourceImg);
	cortadoNew = result.recipeBool;
	alertString = result.stringForAlert;
	alert(alertString);

} else if (espressoCount === 1 && iceCreamCount === 1 && coffeeMix.length == 2) {
	let alertString = "You made an Affogato";
	let sourceImg = "assets/single-espresso.png";
	let result = booleanCheck(affogatoNew, alertString, sourceImg);
	affogatoNew = result.recipeBool;
	alertString = result.stringForAlert;
	alert(alertString);

} else if (steamedMilkCount === 3 && chocolateCount === 1 && coffeeMix.length == 4) {
	let alertString = "You made Hot Chocolate";
	let sourceImg = "assets/single-espresso.png";
	let result = booleanCheck(hotChocolateNew, alertString, sourceImg);
	hotChocolateNew = result.recipeBool;
	alertString = result.stringForAlert;
	alert(alertString);

} else if (espressoCount === 1 && steamedMilkCount === 2 && chocolateCount === 1 && coffeeMix.length == 4) {
	let alertString = "You made a Mocha";
	let sourceImg = "assets/single-espresso.png";
	let result = booleanCheck(mochaNew, alertString, sourceImg);
	mochaNew = result.recipeBool;
	alertString = result.stringForAlert;
	alert(alertString);

} else if (espressoCount === 1 && steamedMilkCount === 2 && milkFoamCount === 1 && coffeeMix.length == 4) {
	let alertString = "You made a Latte";
	let sourceImg = "assets/single-espresso.png";
	let result = booleanCheck(latteNew, alertString, sourceImg);
	latteNew = result.recipeBool;
	alertString = result.stringForAlert;
	alert(alertString);

} else if (espressoCount === 1 && steamedMilkCount === 1 && milkFoamCount === 1 && coffeeMix.length == 3) {
	let alertString = "You made a Cappuccino";
	let sourceImg = "assets/single-espresso.png";
	let result = booleanCheck(cappuccinoNew, alertString, sourceImg);
	cappuccinoNew = result.recipeBool;
	alertString = result.stringForAlert;
	alert(alertString);

} else if (espressoCount === 1 && steamedMilkCount === 2 && coffeeMix.length == 3) {
	let alertString = "You made a Flat White";
	let sourceImg = "assets/single-espresso.png";
	let result = booleanCheck(flatWhiteNew, alertString, sourceImg);
	flatWhiteNew = result.recipeBool;
	alertString = result.stringForAlert;
	alert(alertString);

} else if (espressoCount === 1 && dripCoffeeCount === 3 && coffeeMix.length == 4) {
	let alertString = "You made a Black Eye";
	let sourceImg = "assets/single-espresso.png";
	let result = booleanCheck(blackEyeNew, alertString, sourceImg);
	blackEyeNew = result.recipeBool;
	alertString = result.stringForAlert;
	alert(alertString);

} else if (espressoCount === 1 && dripCoffeeCount === 2 && coffeeMix.length == 3) {
	let alertString = "You made a Red Eye";
	let sourceImg = "assets/single-espresso.png";
	let result = booleanCheck(redEyeNew, alertString, sourceImg);
	redEyeNew = result.recipeBool;
	alertString = result.stringForAlert;
	alert(alertString);

} else if (espressoCount === 1 && hotWaterCount === 1 && coffeeMix.length == 2) {
	let alertString = "You made a Cafe Zorro";
	let sourceImg = "assets/single-espresso.png";
	let result = booleanCheck(cafeZorroNew, alertString, sourceImg);
	cafeZorroNew = result.recipeBool;
	alertString = result.stringForAlert;
	alert(alertString);

} else if (espressoCount === 1 && hotWaterCount === 2 && coffeeMix.length == 3) {
	let alertString = "You made an Americano";
	let sourceImg = "assets/single-espresso.png";
	let result = booleanCheck(americanoNew, alertString, sourceImg);
	americanoNew = result.recipeBool;
	alertString = result.stringForAlert;
	alert(alertString);

} else if (espressoCount === 6 && coffeeMix.length == 1) {
	alert("That's almost certain death");

} else if (espressoCount === 5 && coffeeMix.length == 5) {
	alert("You made way too much Espresso");

} else if (espressoCount === 4 && coffeeMix.length == 4) {
	alert("You made a lot of Espresso");

} else if (espressoCount === 3 && coffeeMix.length == 3)  {
	let alertString = "You made 3 shots of Espresso";
	let sourceImg = "assets/single-espresso.png";
	let result = booleanCheck(threeEspressoNew, alertString, sourceImg);
	threeEspressoNew = result.recipeBool;
	alertString = result.stringForAlert;
	alert(alertString);

} else if (espressoCount === 2 && coffeeMix.length == 2) {
	let alertString = "You made a doppio";
	let sourceImg = "assets/single-espresso.png";
	let result = booleanCheck(doppioNew, alertString, sourceImg);
	doppioNew = result.recipeBool;
	alertString = result.stringForAlert;
	alert(alertString);

} else if (espressoCount === 1 && coffeeMix.length == 1) {
	let alertString = "You made a single espresso";
	let sourceImg = "assets/single-espresso.png";
	let result = booleanCheck(espressoNew, alertString, sourceImg);
	espressoNew = result.recipeBool;
	alertString = result.stringForAlert;
	alert(alertString);

} else if (coffeeMix.length == 0){
	alert("Your cup is empty");
} else {
	alert("you made a new drink!")
}

	divList.forEach(box => {
		box.style.backgroundColor = "transparent";
	});
	
	counter = -1;
	coffeeMix = [];
});




