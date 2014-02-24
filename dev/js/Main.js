//Variables globales à définir ici
var canvas, context, currentLevel;

/**
* Fonction utilisée pour initialiser et lancer le jeu
*/
function init() {
	canvas = document.getElementById("elevator");
    context = canvas.getContext("2d");
	currentLevel = 1;
	loadLevel(currentLevel);
}
