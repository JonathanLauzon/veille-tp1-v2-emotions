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