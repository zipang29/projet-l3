//Variables globales à définir ici
var canvas, context, currentLevel;

/** 
* Images 
*/
var x; // Position de x actuelle;
var f1, f2, sol; // Image de fond 1, image de fond 2, image du sol
var p1, p2, p3; // Personnage statique, personnage qui avance état 1, personnage qui avance état 2

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
