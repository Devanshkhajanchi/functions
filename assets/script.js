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


espressoButton.addEventListener("click", ()=>{
	console.log('works')
	counter += 1 
	if(counter > 5){
		alert("too much")
	} else {
		divList[counter].style.backgroundColor = "darkgoldenrod"
		coffeeMix.push("Espresso")
		console.log(coffeeMix)
	}
})


refreshButton.addEventListener("click", ()=>{
	divList.forEach(box => {
		box.style.backgroundColor = "transparent"
	});

	counter = -1;
	coffeeMix = [];
})


serveButton.addEventListener("click", ()=>{
	if (coffeeMix[0] == "Espresso" && coffeeMix[1]=="Espresso" && coffeeMix[2] == "Espresso"){
		alert("you made a triple espresso")
	} else if(coffeeMix[0] == "Espresso" && coffeeMix[1]=="Espresso"){
		alert("you made a double espresso")
	} else if (coffeeMix[0] == 'Espresso'){
		alert("you made a single espresso")
	} else if (coffeeMix.length == 0){
		alert("your cup is empty")
	}
})
