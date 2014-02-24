//Variables globales à définir ici
var canvas, context, currentLevel;

function init() {
	canvas = document.getElementById("elevator");
    context = canvas.getContext("2d");
	currentLevel = 1;
	loadLevel(currentLevel);
}
