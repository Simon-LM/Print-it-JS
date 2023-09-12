console.log("Java Script");

const slides = [
	{
		"image": "slide1.jpg",
		"tagLine_heavy": "Impressions tous formats",
		"tagLine_thin": "en boutique et en ligne"
	},
	{
		"image": "slide2.jpg",
		"tagLine_heavy": "Tirages haute définition grand format",
		"tagLine_thin": "pour vos bureaux et events"
	},
	{
		"image": "slide3.jpg",
		"tagLine_heavy": "Grand choix de couleurs",
		"tagLine_thin": "de CMJN aux pantones"
	},
	{
		"image": "slide4.png",
		"tagLine_heavy": "Autocollants",
		"tagLine_thin": "avec découpe laser sur mesure"
	}
];

slides.length
//console.log(slides.length)

const nbr_img_max = slides.length - 1 
console.log('nbr_img_max :', nbr_img_max)
//console.log('nbr_img_max :', slides.lenght)

let img_position = 0
console.log('Position initial de l\'image :', img_position)


let arrow_left = document.querySelector(".arrow_left");
arrow_left.addEventListener("click", left)  

let arrow_right = document.querySelector(".arrow_right");
arrow_right.addEventListener("click", right)



function left() {
	console.log("Gauche")
	if (img_position == 0) {
		img_position = nbr_img_max
	}
	else {
		img_position = img_position - 1
	}
	document.getElementById("img_position_slide").src = "./assets/images/slideshow/" + slides[img_position].image


	let new_tag_line_heavy = document.getElementById("tag_line_heavy")		
	new_tag_line_heavy.replaceChildren(slides[img_position].tagLine_heavy)
	let new_tag_line_thin = document.getElementById("tag_line_thin")		
	new_tag_line_thin.replaceChildren(slides[img_position].tagLine_thin)

	
	console.log('Position actuelle de l\'image :', img_position)
}

function right() {
	console.log("Droite")
	if (img_position == nbr_img_max) {
		img_position = 0 
	}
	else {
		img_position = img_position + 1
	}
	document.getElementById("img_position_slide").src = "./assets/images/slideshow/" + slides[img_position].image
	

	let new_tag_line_heavy = document.getElementById("tag_line_heavy")		
	new_tag_line_heavy.replaceChildren(slides[img_position].tagLine_heavy)
	let new_tag_line_thin = document.getElementById("tag_line_thin")		
	new_tag_line_thin.replaceChildren(slides[img_position].tagLine_thin)


	console.log('Position actuelle de l\'image :', img_position)
}










