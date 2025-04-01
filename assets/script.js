// let coffeeData = [{
// 	'name': "Espresso", 
// 	'color': "darkgoldenrod",
// 	'height': 1
// }, {
// 	'name': "Hot Water", 
// 	'color': "skyblue",
// 	'height': 1
// }, {
// 	'name': "Milk Foam", 
// 	'color': "bisque",
// 	'height': 1
// }, {
// 	'name': "Steamed Milk", 
// 	'color': "ivory",
// 	'height': 1
// }, {
// 	'name': "Chocolate", 
// 	'color': "chocolate",
// 	'height': 1
// }, {
// 	'name': "Ice Cream", 
// 	'color': "lightyellow",
// 	'height': 1
// }, {
// 	'name': "Cream", 
// 	'color': "mintcream",
// 	'height': 1
// }, {
// 	'name': "Drip Coffee", 
// 	'color': "saddlebrown",
// 	'height': 1
// }]

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
	let espressoCount = coffeeMix.filter(ingredient => ingredient === "Espresso").length;
	let steamedMilkCount = coffeeMix.filter(ingredient => ingredient === "Steamed Milk").length;

	if (espressoCount === 1 && steamedMilkCount === 1) {
		alert("You made a cortado");
	} else if (espressoCount === 6) {
		alert("That's almost certain death");
	} else if (espressoCount === 5) {
		alert("You made way too much Espresso");
	} else if (espressoCount === 4) {
		alert("You made a lot of Espresso");
	} else if (espressoCount === 3) {
		alert("You made a triple espresso");
	} else if (espressoCount === 2) {
		alert("You made a double espresso");
	} else if (espressoCount === 1) {
		alert("You made a single espresso");
	} else {
		alert("Your cup is empty");
	}
});
