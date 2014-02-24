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
	//setInterval(redraw, 1000 / 30);
}

/**
* Actualise la vue courante
*/
function redraw() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	updateLevel(currentLevel);
}

/**
* Fonction anonyme qui s'exécute (évènement) à la pression d'une touche du clavier
*/
document.onkeydown = function(event) {
	x = x - 1; //Permet de faire avancer les 2 images de fond de 1 pixel à chaque appuie sur une touche
	redraw();
};

/**
* Charge le niveau correspondant
* @var int level Le numéro du niveau à charger
*/
function loadLevel(level) {
	switch (level) {
		case 1:
			loadLevel1();
		break;
		case 2:
		
		break;
		case 3:
		
		break;
		case 4:
		
		break;
		case 5:
		
		break;
		default:
			loadLevel1();
		break;
	}
}

function updateLevel(level) {
	switch (level) {
		case 1:
			updateLevel1();
		break;
		case 2:
		
		break;
		case 3:
		
		break;
		case 4:
		
		break;
		case 5:
		
		break;
		default:
			updateLevel1();
		break;
	}
}

/**
* Charge les éléments du niveau 1 du jeu
*/
function loadLevel1() {
	canvas.style.backgroundColor = "#77abe5";
    // Montagne en arrière plan
    f1 = new Image();
    f1.onload = function () {
        context.drawImage(this, 0, 0);
        // Montagne à l'avant plan
        f2 = new Image();
        f2.onload = function() {
            context.drawImage(this, 0, 0);
			
			//Chargement du sol
			sol = new Image();
			sol.onload = function () {
				context.drawImage(this, 0, 465); //500(hauteur du canvas) - hauteur de l'image
			}
			sol.src = 'img/decors/lvl1/sol.png';
        };
        f2.src = 'img/decors/lvl1/montagneAvant.png';
    };
    // Toujours définir la source après ajout de l'écouteur
    f1.src = 'img/decors/lvl1/montagneArriere.png';
}

function updateLevel1() {
	context.drawImage(f1, x, 0);
	context.drawImage(f2, x, 0);
	context.drawImage(sol, 0, 465);
}

/**
* Charge les éléments du niveau 2 du jeu
*/
function loadLevel2() {

}

/**
* Charge les éléments du niveau 3 du jeu
*/
function loadLevel3() {

}

/**
* Charge les éléments du niveau 4 du jeu
*/
function loadLevel4() {

}

/**
* Charge les éléments du niveau 5 du jeu
*/
function loadLevel5() {

}