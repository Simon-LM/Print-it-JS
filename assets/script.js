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

// Number of images
slides.length
const nbr_img_max = slides.length 
console.log('nbr_img_max :', nbr_img_max)

// Number max of images in TABLE 
const nbr_img_max_tab = slides.length - 1 
console.log('nbr_img_max :', nbr_img_max_tab)

// Initial position of img
let img_position = 0
console.log('Position initial de l\'image :', img_position)

// Click arrows
let arrow_left = document.querySelector(".arrow_left");
arrow_left.addEventListener("click", left)  
let arrow_right = document.querySelector(".arrow_right");
arrow_right.addEventListener("click", right)


function left() {
	console.log("Gauche")
	if (img_position == 0) {
		img_position = nbr_img_max - 1
	}
	else {
		img_position = img_position - 1
	}
	document.getElementById("img_position_slide").src = "./assets/images/slideshow/" + slides[img_position].image

	let new_tag_line_heavy = document.getElementById("tag_line_heavy")		
	new_tag_line_heavy.replaceChildren(slides[img_position].tagLine_heavy)
	let new_tag_line_thin = document.getElementById("tag_line_thin")		
	new_tag_line_thin.replaceChildren(slides[img_position].tagLine_thin)
	
	// Dot position 
	if (img_position == nbr_img_max_tab) {
		let iii = document.getElementById(`dot_0${1}`)
		iii.setAttribute("class", "dot")
		let jjj  = document.getElementById(`dot_0${img_position + 1}`)		
		jjj.setAttribute("class", "dot dot_selected");
	}
	else {
		let iii = document.getElementById(`dot_0${img_position + 2}`)
		iii.setAttribute("class", "dot")
		let jjj  = document.getElementById(`dot_0${img_position + 1}`)		
		jjj.setAttribute("class", "dot dot_selected");
	}	

	console.log('Position actuelle de l\'image :', img_position)
}
function right() {
	console.log("Droite")
	if (img_position == nbr_img_max_tab) {
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

	// Dot position 
	if (img_position == 0) {
		let iii = document.getElementById(`dot_0${nbr_img_max_tab + 1}`)
		iii.setAttribute("class", "dot")
		let jjj  = document.getElementById(`dot_0${img_position + 1}`)		
		jjj.setAttribute("class", "dot dot_selected");
	}
	else {
		let iii = document.getElementById(`dot_0${img_position}`)
		iii.setAttribute("class", "dot")
		let jjj  = document.getElementById(`dot_0${img_position + 1}`)		
		jjj.setAttribute("class", "dot dot_selected");
	}	
	console.log('Position actuelle de l\'image :', img_position)
}

// Nbr dots selectors = Nbr imgs
let dots_nbr = nbr_img_max + 1
let place_of_dots = document.getElementById("dots")
for (let pas = 1; pas < dots_nbr ; pas++) {	
	console.log("<a class=\"dot_link\"><div id=\"dot_0" + pas + "\" class=\"dot\"></div></a>")
	let doooot =  document.createElement("a")
	doooot.innerHTML = `<div id=\"dot_0` + pas + `\" class=\"dot\"></div>`
	place_of_dots.append(doooot)
}

// Initial position of dot
let dot_initial = document.getElementById(`dot_01`)		
dot_initial.setAttribute("class", "dot dot_selected");

console.log(place_of_dots)




