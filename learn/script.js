let espressoReveal = document.getElementById("espresso-reveal")

espressoReveal.addEventListener("mouseenter", ()=>{
	espressoReveal.src = '../assets/single-espresso.png'
})

espressoReveal.addEventListener("mouseleave", ()=>{
	espressoReveal.src = '../assets/mystery-drink.png'
})