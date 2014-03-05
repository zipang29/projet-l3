//Variables globales à définir ici
var canvas, context, currentLevel;

var vie; // Points de vie restant
var score = 0;

/** 
* Images 
*/
var x; // Position de x actuelle pour le fond
var xPerso; // Position de x actuelle du personnage
var f1, f2, sol; // Image de fond 1, image de fond 2, image du sol
var p0, p1, p2; // Personnage statique, personnage qui avance état 1, personnage qui avance état 2
var coeur; // Image de coeur de vie
var coeurPerdu; // Image d'un coeur de vie perdu
// Les ennemis
var bidon1, bidon2, xBidon;

/**
* Fonction utilisée pour initialiser et lancer le jeu
*/
function init() {
	x = 0;
	xPerso = 50;
	xBidon = 400;
	canvas = document.getElementById("elevator");
    context = canvas.getContext("2d");
	currentLevel = 1;
	loadLevel(currentLevel);
	window.onload = function() {
		setInterval("redraw()", 30/1000);
	}
}

/**
* Actualise la vue courante
*/
function redraw() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	updateLevel(currentLevel);
}
