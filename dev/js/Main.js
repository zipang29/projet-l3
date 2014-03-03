//Variables globales à définir ici
var canvas, context, currentLevel;
var x;
var f1, f2, sol;

/**
* Fonction utilisée pour initialiser et lancer le jeu
*/
function init() {
	x = 0;
	canvas = document.getElementById("elevator");
    context = canvas.getContext("2d");
	currentLevel = 1;
	loadLevel(currentLevel);
}

/**
* Actualise la vue courante
*/
function redraw() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	updateLevel(currentLevel);
}



