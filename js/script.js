/* DÉCLENCHEUR D'ÉMOTIONS
--------------------------------------------------*/

// Objet HTML du visage
var visage = document.querySelector('.jonathan-flat');
// Les objets HTML qui déclenchent des émotions
var declencheurEmo = document.querySelectorAll('.emo');

// Écouteurs d'événements sur les déclencheurs d'émotions
for(var i = 0; i < declencheurEmo.length; i++) {
	// Appliquer une émotion
	declencheurEmo[i].addEventListener('mouseover', function(e) {
		e.target.classList.contains('emo--content') && visage.classList.add('jonathan--content');
		e.target.classList.contains('emo--neutre') && visage.classList.add('jonathan--neutre');
		e.target.classList.contains('emo--triste') && visage.classList.add('jonathan--triste');
	});
	// Retirer une émotion
	declencheurEmo[i].addEventListener('mouseleave', function() {
		visage.classList.contains('jonathan--content') && visage.classList.remove('jonathan--content');
		visage.classList.contains('jonathan--neutre') && visage.classList.remove('jonathan--neutre');
		visage.classList.contains('jonathan--triste') && visage.classList.remove('jonathan--triste');
	});
}






/* ANIMATION DU FOND DU VISAGE SUR LA PROGRESSION DU SCROLL
--------------------------------------------------*/

// on cible l'élément « path » que l'on veut animer 
var jonathanFond = document.querySelectorAll(".jonathan-flat #cercle")[0];

// la longueur du chemin «path»
var contourFond = getCircleLength(jonathanFond);

console.log(contourFond);

// La longueur du tracé
jonathanFond.style.strokeDasharray = contourFond;

// On fait disparaître le tracé en appliquant la propriété css strokeDashoffset sur toute la longueur du chemin
jonathanFond.style.strokeDashoffset = contourFond;

//On fait également disparaître le fond
jonathanFond.style.fillOpacity = 0;

console.log('Le code se lit jusqu\'ici.');

// extraire la fraction du déplacement de la barre de défilement et  ajusté le tracé
document.querySelector('.parallax').addEventListener("scroll", maTrace);

function maTrace() {
	var fractionDuScroll = (document.querySelector('.parallax').scrollTop + document.documentElement.scrollTop) / (document.querySelector('.parallax').scrollHeight - document.documentElement.clientHeight);
	var traceCercle = contourFond * fractionDuScroll;

	// tracé selon la fraction de «scroll»
	var differenceContour = (contourFond - traceCercle * 2.5);
	jonathanFond.style.strokeDashoffset = differenceContour;
	if (differenceContour <= 0) {
		jonathanFond.style.strokeDashoffset = 0;
	}

	jonathanFond.style.fillOpacity = (fractionDuScroll * 5) -1;
}

function getCircleLength(el) {
	var r = el.getAttribute('r');
	var circleLength = 2 * Math.PI * r; 
	return circleLength;
}


/* DÉFILEMENT VERS UNE ANCRE
--------------------------------------------------*/

var liens = document.querySelectorAll('.defilement');
console.log('Nb de liens = '+liens.length);
console.log(liens[0].dataset.ancre);

for(var i = 0; i < liens.length; i ++) {
	if(liens[i].dataset.ancre && document.getElementById(liens[i].dataset.ancre)) {
		liens[i].addEventListener('click', function() {
			var ancre = document.getElementById(this.dataset.ancre);
			ancre.scrollIntoView({behavior: "smooth"});
		})
	}
}