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


// serveButton.addEventListener("click", ()=>{
// 	if (coffeeMix[0] == "Espresso" && coffeeMix[1]=="Espresso" && coffeeMix[2] ==  "Espresso" && coffeeMix[3] == "Espresso" && coffeeMix[4] == "Espresso" && coffeeMix[5] == "Espresso"){
// 		alert("That's almost certain death") 
// 	} else if(coffeeMix[0] == "Espresso" && coffeeMix[1]=="Espresso" && coffeeMix[2] ==  "Espresso" && coffeeMix[3] == "Espresso" && coffeeMix[4] == "Espresso"){
// 		alert("You made way too much Espresso")
// 	} else if(coffeeMix[0] == "Espresso" && coffeeMix[1]=="Espresso" && coffeeMix[2] ==  "Espresso" && coffeeMix[3] == "Espresso"){
// 		alert("You made a lot of Espresso")
// 	} else if(coffeeMix[0] == "Espresso" && coffeeMix[1]=="Espresso" && coffeeMix[2] == "Espresso"){
// 		alert("You made a triple espresso")
// 	} else if(coffeeMix[0] == "Espresso" && coffeeMix[1]=="Espresso"){
// 		alert("You made a double espresso")
// 	} else if (coffeeMix[0] == 'Espresso'){
// 		alert("You made a single espresso")
// 	} else if (coffeeMix.length == 0){
// 		alert("your cup is empty")
// 	}



// })

serveButton.addEventListener("click", ()=>{

	function booleanCheck(recipeBool, stringForAlert, imgSrc){
		if(recipeBool){
			discoverDrinkCounter += 1;
			recipeBool = false;
			stringForAlert += "& you made a new drink: "
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

	


	if (espressoCount === 1 && steamedMilkCount === 1) {
		alert("You made a cortado");

	} else if (espressoCount === 1 && iceCreamCount === 1 && coffeeMix.length == 2) {
		alert ("You made an Affogato");

	} else if (steamedMilkCount === 3 && chocolateCount === 1) {
		alert ("You made Hot Chocolate");

	} else if (espressoCount === 1 && steamedMilkCount === 2 && chocolateCount === 1) {
		alert ("You made a Mocha");

	} else if (espressoCount === 1 && steamedMilkCount === 2 && milkFoamCount === 1) {
		alert ("You made a Latte");

	} else if (espressoCount === 1 && steamedMilkCount === 1 && milkFoamCount === 1) {
		alert ("You made a Cappuccino");

	} else if (espressoCount === 1 && steamedMilkCount === 2) {
		alert ("You made a Flat White");

	} else if (espressoCount === 1 && dripCoffeeCount === 3) {
		alert ("You made a Black Eye");

	} else if (espressoCount === 1 && dripCoffeeCount === 2) {
		alert ("You made a Red Eye");

	} else if (espressoCount === 1 && hotWaterCount === 1) {
		alert ("You made a Cafe Zorro");

	} else if (espressoCount === 1 && hotWaterCount === 2) {
		alert ("You made an Americano");

	} else if (espressoCount === 6) {
		alert("That's almost certain death");

	} else if (espressoCount === 5) {
		alert("You made way too much Espresso");

	} else if (espressoCount === 4) {
		alert("You made a lot of Espresso");

	} else if (espressoCount === 3) {
		alert("You made 3 shots of Espresso");

	} else if (espressoCount === 2) {
		let alertString = "You made a doppio"
		let sourceImg = "assets/single-espresso.png" //change source image to correct

		let result = booleanCheck(doppioNew, alertString, sourceImg);
		doppioNew = result.recipeBool;
		alertString = result.stringForAlert;
		alert(alertString); 
		
	} else if (espressoCount === 1 && coffeeMix.length == 1) {
		let alertString = "You made a single espresso "
		let sourceImg = "assets/single-espresso.png"

		let result = booleanCheck(espressoNew, alertString, sourceImg);

		espressoNew = result.recipeBool;
		alertString = result.stringForAlert;
		alert(alertString);

	} else {
		alert("Your cup is empty");
	}

	divList.forEach(box => {
		box.style.backgroundColor = "transparent";
	});
	
	counter = -1;
	coffeeMix = [];
});




