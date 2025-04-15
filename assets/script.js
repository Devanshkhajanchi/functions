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
		alertString = "You made a Cortado and discovered a new drink";
		cortadoImg.src = "../assets/svg/cortado.svg"
		discoverDrinkCounter += 1;
		cortadoNew = false;
	} else {
		alertString = "You made a Cortado";
	}
	alert(alertString);

	//Affogato

} else if (espressoCount === 1 && iceCreamCount === 1 && coffeeMix.length == 2) {
	let alertString = ""
	if(affogatoNew){
		alertString = "You made an Affogato and discovered a new recipe";
		affogatoImg.src = "../assets/svg/affogato.svg"
		discoverDrinkCounter += 1;
		affogatoNew = false;
	} else {
		alertString = "You made an Affogato";
	}
	alert(alertString);

	//Hot Chocolate

} else if (steamedMilkCount === 3 && chocolateCount === 1 && coffeeMix.length == 4) {
	let alertString = ""
	if(hotChocolateNew){
		alertString = "You made a Hot Chocolate and discovered a new drink";
		hotChocolateImg.src = "../assets/svg/hot-chocolate.svg"
		discoverDrinkCounter += 1;
		hotChocolateNew = false;
	} else {
		alertString = "You made a Hot Chocolate";
	}
	alert(alertString);

	//Cafe Mocha

} else if (espressoCount === 1 && steamedMilkCount === 2 && chocolateCount === 1 && coffeeMix.length == 4) {
	let alertString = ""
	if(mochaNew){
		alertString = "You made a Cafe Mocha and discovered a new drink";
		mochaImg.src = "../assets/svg/mocha.svg"
		discoverDrinkCounter += 1;
		mochaNew = false;
	} else {
		alertString = "You made a Cafe Mocha";
	}
	alert(alertString);

	//Cafe Latte

} else if (espressoCount === 1 && steamedMilkCount === 2 && milkFoamCount === 1 && coffeeMix.length == 4) {
	let alertString = ""
	if(latteNew){
		alertString = "You made a Cafe Latte and discovered a new drink";
		latteImg.src = "../assets/svg/latte.svg"
		discoverDrinkCounter += 1;
		latteNew = false;
	} else {
		alertString = "You made a Cafe Latte";
	}
	alert(alertString);

	//Cappuccino

} else if (espressoCount === 1 && steamedMilkCount === 1 && milkFoamCount === 1 && coffeeMix.length == 3) {
	let alertString = ""
	if(cappuccinoNew){
		alertString = "You made a Cappuccino and discovered a new drink";
		cappuccinoImg.src = "../assets/svg/cappuccino.svg"
		discoverDrinkCounter += 1;
		cappuccinoNew = false;
	} else {
		alertString = "You made a Cappuccino";
	}
	alert(alertString);

	//Flat White

} else if (espressoCount === 1 && steamedMilkCount === 2 && coffeeMix.length == 3) {
	let alertString = ""
	if(flatWhiteNew){
		alertString = "You made a Flat White and discovered a new drink";
		flatWhiteImg.src = "../assets/svg/flat-white.svg"
		discoverDrinkCounter += 1;
		flatWhiteNew = false;
	} else {
		alertString = "You made a Flat White";
	}
	alert(alertString);

	//Black Eye

} else if (espressoCount === 1 && dripCoffeeCount === 3 && coffeeMix.length == 4) {
	let alertString = ""
	if(blackEyeNew){
		alertString = "You made a Black Eye and discovered a new drink";
		blackEyeImg.src = "../assets/svg/black-eye.svg"
		discoverDrinkCounter += 1;
		blackEyeNew = false;
	} else {
		alertString = "You made a Black Eye";
	}
	alert(alertString);

	//Red Eye

} else if (espressoCount === 1 && dripCoffeeCount === 2 && coffeeMix.length == 3) {
	let alertString = ""
	if(redEyeNew){
		alertString = "You made a Red Eye and discovered a new drink";
		redEyeImg.src = "../assets/svg/red-eye.svg"
		discoverDrinkCounter += 1;
		redEyeNew = false;
	} else {
		alertString = "You made a Red Eye";
	}
	alert(alertString);

	//Cafe Zorro

} else if (espressoCount === 1 && hotWaterCount === 1 && coffeeMix.length == 2) {
	let alertString = ""
	if(cafeZorroNew){
		alertString = "You made a Cafe Zorro and discovered a new drink";
		cafeZorroImg.src = "../assets/svg/cafe-zorro.svg"
		discoverDrinkCounter += 1;
		cafeZorroNew = false;
	} else {
		alertString = "You made a Cafe Zorro";
	}
	alert(alertString);

	//Americano

} else if (espressoCount === 1 && hotWaterCount === 2 && coffeeMix.length == 3) {
	let alertString = ""
	if(americanoNew){
		alertString = "You made an Americano and discovered a new drink";
		americanoImg.src = "../assets/svg/americano.svg"
		discoverDrinkCounter += 1;
		americanoNew = false;
	} else {
		alertString = "You made an Americano";
	}
	alert(alertString);

	//More Espresso

} else if (espressoCount === 6 && coffeeMix.length == 6) {
	alert("That's almost certain death");

} else if (espressoCount === 5 && coffeeMix.length == 5) {
	alert("You made way too much Espresso");

} else if (espressoCount === 4 && coffeeMix.length == 4) {
	alert("You made a lot of Espresso");

	//Drip Coffee

} else if (dripCoffeeCount === 1 && coffeeMix.length == 1) {
	alert("You served very little drip coffee. Is this a joke to you?");

} else if (dripCoffeeCount === 2 && coffeeMix.length == 2) {
	alert("You served some drip coffee Wait, that's it?!");

} else if (dripCoffeeCount === 3 && coffeeMix.length == 3) {
	alert("You served half a drip coffee.");

} else if (dripCoffeeCount === 4 && coffeeMix.length == 4) {
	alert("You served some drip coffee. Now we're talkin");

} else if (dripCoffeeCount === 5 && coffeeMix.length == 5) {
	alert("You served drip coffee. There's still some space in the cup, what am I paying for?");

} else if (dripCoffeeCount === 6 && coffeeMix.length == 6) {
	alert("You served a Cuppa Joe... Ahhh");

	//Water

} else if (hotWaterCount === 1 && coffeeMix.length == 1) {
	alert("Um, a shot of water?");

} else if (hotWaterCount === 2 && coffeeMix.length == 2) {
	alert("Come on!");

} else if (hotWaterCount === 3 && coffeeMix.length == 3) {
	alert("I have water at home you know...");

} else if (hotWaterCount === 4 && coffeeMix.length == 4) {
	alert("Fine, if you insist");

} else if (hotWaterCount === 5 && coffeeMix.length == 5) {
	alert("No really, that's enough water. I'd like some coffee please?");

} else if (hotWaterCount === 6 && coffeeMix.length == 6) {
	alert("You're a true Hydro Homie!");

	//Triple Espresso

} else if (espressoCount === 3 && coffeeMix.length == 3)  {
	let alertString = ""
	if(threeEspressoNew){
		alertString = "You made a Triple Espresso and discovered a new drink";
		threeEspressoImg.src = "../assets/svg/triple-espresso.svg"
		discoverDrinkCounter += 1;
		threeEspressoNew = false;
	} else {
		alertString = "You made a Triple Espresso";
	}
	alert(alertString);

	//Doppio

} else if (espressoCount === 2 && coffeeMix.length == 2) {
	let alertString = ""
	if(doppioNew){
		alertString = "You made a Doppio and discovered a new drink";
		doppioImg.src = "../assets/svg/doppio.svg"
		discoverDrinkCounter += 1;
		doppioNew = false;
	} else {
		alertString = "You made a Doppio";
	}
	alert(alertString);

	//Espresso

} else if (espressoCount === 1 && coffeeMix.length == 1) {
	let alertString = ""
	if(espressoNew){
		alertString = "You made a single Espresso and discovered a new drink";
		espressoImg.src = "../assets/svg/single-espresso.svg"
		discoverDrinkCounter += 1;
		espressoNew = false;
	} else {
		alertString = "You made a single Espresso";
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

//Enter for submit
// Attribution: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
// This 'Event listener' function works by telling the browser to listen for an input from a device (Keyboard). The function runs when the selected key is pressed. 
document.addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
		event.preventDefault();
		document.getElementById("serve-button").click();
	}
});




