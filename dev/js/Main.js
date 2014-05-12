//Variables globales à définir ici
var canvas, context;
var currentLevel;
var partieEnCours;
var score = 0;
var mainTimer;
var xFond; // Position de x actuelle pour le fond

/** 
* Images 
*/
var f1, f2, sol; // Image de fond 1, image de fond 2, image du sol
var finNiveau;
var coeur; // Image de coeur de vie
var coeurPerdu; // Image d'un coeur de vie perdu

/**
* Fonction utilisée pour initialiser et lancer le jeu
*/
function init()
{
 	partieEnCours = 0;
	xFond = 0;
	boutpause = document.getElementById("pause");
    boutpause.onclick = changBout1; //Voir fichier Chrono.js
	canvas = document.getElementById("elevator");
    context = canvas.getContext("2d");
	currentLevel = 1;
	loadLevel(currentLevel);
	window.onload = function() {
		mainTimer = setInterval("redraw()", 30/1000);
	}
}

/**
* Actualise la vue courante
*/
function redraw() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	updateLevel(currentLevel);
}
