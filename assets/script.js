// ATTRIBUTION & CREDIT
// Coded with assistance from Liv Beruti, Parsons MFA CD

//BOOLEANS
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

let espressoImg = document.getElementById("espresso-img");
let doppioImg = document.getElementById("doppio-img");
let threeEspressoImg = document.getElementById ("threeespressos-img")
let cafeZorroImg = document.getElementById("cafezorro-img");
let americanoImg = document.getElementById("americano-img");
let cappuccinoImg = document.getElementById("cappuccino-img");
let latteImg = document.getElementById("latte-img");
let cortadoImg = document.getElementById("cortado-img");
let flatWhiteImg = document.getElementById("flatwhite-img");
let hotChocolateImg = document.getElementById("hotchocolate-img");
let affogatoImg = document.getElementById("affogato-img");
let mochaImg = document.getElementById("mocha-img");
let blackEyeImg = document.getElementById("blackeye-img");
let redEyeImg = document.getElementById("redeye-img");



let mysteryDrinks = document.querySelectorAll('.drink');
let mysteryDrinkList = [];
mysteryDrinks.forEach((drink) => {
	mysteryDrinkList.push(drink);
  });

let mysteryDrinksName = document.querySelectorAll('.drink-name');
let mysteryDrinkNamesList = [];
mysteryDrinksName.forEach((drinkname) =>{
	mysteryDrinkNamesList.push(drinkname);
})

let discoverDrinkCounter = -1;



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
// let creamButton = document.getElementById("cream-button");
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

// creamButton.addEventListener("click", ()=>{
// 	console.log('Cream added');
// 	counter += 1;
// 	if (counter > 5) {
// 		alert("Please stop");
// 	} else {
// 		divList[counter].style.backgroundColor = "mintcream";
// 		coffeeMix.push("Cream");
// 		console.log(coffeeMix);
// 	}
// });

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

	let espressoCount = coffeeMix.filter(ingredient => ingredient === "Espresso").length;
	let hotWaterCount = coffeeMix.filter(ingredient => ingredient === "Hot Water").length;
	let milkFoamCount = coffeeMix.filter(ingredient => ingredient === "Milk Foam").length;
	let steamedMilkCount = coffeeMix.filter(ingredient => ingredient === "Steamed Milk").length;
	let chocolateCount = coffeeMix.filter(ingredient => ingredient === "Chocolate").length;
	let iceCreamCount = coffeeMix.filter(ingredient => ingredient === "Ice Cream").length;
	let creamCount = coffeeMix.filter(ingredient => ingredient === "Cream").length;
	let dripCoffeeCount = coffeeMix.filter(ingredient => ingredient === "Drip Coffee").length;

	
// RECIPES

	//Cortado

if (espressoCount === 1 && steamedMilkCount === 1 && coffeeMix.length == 2) {
	
	let alertString = ""

	if(cortadoNew){
		alertString = "You made a Cortado, it's a new drink";
		cortadoImg.src = "../assets/single-espresso.png"
		discoverDrinkCounter += 1;
		espressoNew = false;

	} else {
		alertString = "You made a Hot Chocolate";
	}
	
	alert(alertString);

	//Affogato

} else if (espressoCount === 1 && iceCreamCount === 1 && coffeeMix.length == 2) {

	let alertString = ""

	if(affogatoNew){
		alertString = "You made a Affogato, it's a new recipe";
		affogatoImg.src = "../assets/single-espresso.png"
		discoverDrinkCounter += 1;
		espressoNew = false;

	} else {
		alertString = "You made a Affogato";
	}
	
	alert(alertString);

	//Hot Chocolate

} else if (steamedMilkCount === 3 && chocolateCount === 1 && coffeeMix.length == 4) {

	let alertString = ""

	if(hotChocolateNew){
		alertString = "You made a Hot Chocolate, it's a new drink";
		hotChocolateImg.src = "../assets/single-espresso.png"
		discoverDrinkCounter += 1;
		espressoNew = false;

	} else {
		alertString = "You made a Hot Chocolate";
	}

	//Cafe Mocha
	
	alert(alertString);

} else if (espressoCount === 1 && steamedMilkCount === 2 && chocolateCount === 1 && coffeeMix.length == 4) {

	let alertString = ""

	if(mochaNew){
		alertString = "You made a Cafe Mocha, it's a new drink";
		mochaImg.src = "../assets/single-espresso.png"
		discoverDrinkCounter += 1;
		espressoNew = false;

	} else {
		alertString = "You made a Cafe Mocha";
	}
	
	alert(alertString);

	//Cafe Latte

} else if (espressoCount === 1 && steamedMilkCount === 2 && milkFoamCount === 1 && coffeeMix.length == 4) {

	let alertString = ""

	if(latteNew){
		alertString = "You made a Cafe Latte, it's a new drink";
		latteImg.src = "../assets/single-espresso.png"
		discoverDrinkCounter += 1;
		espressoNew = false;

	} else {
		alertString = "You made a Cafe Latte";
	}
	
	alert(alertString);

	//Cappuccino

} else if (espressoCount === 1 && steamedMilkCount === 1 && milkFoamCount === 1 && coffeeMix.length == 3) {

	let alertString = ""

	if(cappuccinoNew){
		alertString = "You made a Cappuccino, it's a new drink";
		cappuccinoImg.src = "../assets/single-espresso.png"
		discoverDrinkCounter += 1;
		espressoNew = false;

	} else {
		alertString = "You made a Cappuccino";
	}
	
	alert(alertString);

	//Flat White

} else if (espressoCount === 1 && steamedMilkCount === 2 && coffeeMix.length == 3) {
	
	let alertString = ""

	if(flatWhiteNew){
		alertString = "You made a Flat White, it's a new drink";
		flatWhiteImg.src = "../assets/single-espresso.png"
		discoverDrinkCounter += 1;
		espressoNew = false;

	} else {
		alertString = "You made a Flat White";
	}
	
	alert(alertString);

	//Black Eye

} else if (espressoCount === 1 && dripCoffeeCount === 3 && coffeeMix.length == 4) {
	
	let alertString = ""

	if(blackEyeNew){
		alertString = "You made a Black Eye, it's a new drink";
		blackEyeImg.src = "../assets/single-espresso.png"
		discoverDrinkCounter += 1;
		espressoNew = false;

	} else {
		alertString = "You made a Black Eye espresso";
	}
	
	alert(alertString);

	//Red Eye

} else if (espressoCount === 1 && dripCoffeeCount === 2 && coffeeMix.length == 3) {

	let alertString = ""

	if(redEyeNew){
		alertString = "You made a Red Eye, it's a new drink";
		redEyeImg.src = "../assets/single-espresso.png"
		discoverDrinkCounter += 1;
		espressoNew = false;

	} else {
		alertString = "You made a Red Eye espresso";
	}
	
	alert(alertString);

	//Cafe Zorro

} else if (espressoCount === 1 && hotWaterCount === 1 && coffeeMix.length == 2) {

	let alertString = ""

	if(cafeZorroNew){
		alertString = "You made a Cafe Zorro, it's a new drink";
		cafeZorroImg.src = "../assets/single-espresso.png"
		discoverDrinkCounter += 1;
		cafeZorroNew = false;

	} else {
		alertString = "You made a Cafe Zorro espresso";
	}
	
	alert(alertString);

	//Americano

} else if (espressoCount === 1 && hotWaterCount === 2 && coffeeMix.length == 3) {

	let alertString = ""

	if(americanoNew){
		alertString = "You made a americano, it's a new drink";
		americanoImg.src = "../assets/single-espresso.png"
		discoverDrinkCounter += 1;
		americanoNew = false;

	} else {
		alertString = "You made a doppio espresso";
	}
	
	alert(alertString);

} else if (espressoCount === 6 && coffeeMix.length == 6) {
	alert("That's almost certain death");

} else if (espressoCount === 5 && coffeeMix.length == 5) {
	alert("You made way too much Espresso");

} else if (espressoCount === 4 && coffeeMix.length == 4) {
	alert("You made a lot of Espresso");

	//Triple Espresso

} else if (espressoCount === 3 && coffeeMix.length == 3)  {

	let alertString = ""

	if(threeEspressoNew){
		alertString = "You made a Triple Espresso, it's a new drink";
		threeEspressoImg.src = "../assets/single-espresso.png"
		discoverDrinkCounter += 1;
		espressoNew = false;

	} else {
		alertString = "You made a triple espresso espresso";
	}
	
	alert(alertString);

	//Doppio

} else if (espressoCount === 2 && coffeeMix.length == 2) {

	let alertString = ""

	if(doppioNew){
		alertString = "You made a doppio, it's a new drink";
		doppioImg.src = "../assets/single-espresso.png"
		discoverDrinkCounter += 1;
		espressoNew = false;

	} else {
		alertString = "You made a doppio espresso";
	}
	
	alert(alertString);

	//Espresso

} else if (espressoCount === 1 && coffeeMix.length == 1) {

	let alertString = ""

	if(espressoNew){
		alertString = "You made a single espresso, it's a new drink";
		espressoImg.src = "../assets/single-espresso.png"
		discoverDrinkCounter += 1;
		espressoNew = false;

	} else {
		alertString = "You made a single espresso";
	}

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




