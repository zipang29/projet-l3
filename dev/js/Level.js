/**
* Permet de connaitre le statut de l'image du personnage (pour l'animation) : 
* 0 : personnage statique avant
* 1 : état 1 de l'animation avant
* 2 : état 2 de l'animation avant
* 3 : personnage statique arrière
* 4 : état 1 de l'animation arrière
* 5 : état 5 de l'animation arrière
*/
var statutPersonnage;

/**
* Booleen permettant de savoir si on avance ou si on recule (pour l'animation du personnage)
*/
var reculer = false;

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
			updatePersonnage();
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
* Gère le chargement des images du personnages et affiche le personnage statique
*/
function loadPersonnage() {
	p0 = new Image();
	p1 = new Image();
	p2 = new Image();
	p3 = new Image();
	p4 = new Image();
	p5 = new Image();
	p0.onload = function() {
		context.drawImage(this, xPerso, canvas.height - p1.height - sol.height);
		statutPersonnage = 1; // On initialise à 1 (ou 2) car sinon la première fois qu'on va avancer, l'image statique s'affichera 2 fois d'affilé au lieu d'une
	}
	p0.src = 'img/personnage/joueur/0.png';
	p1.src = 'img/personnage/joueur/1.png';
	p2.src = 'img/personnage/joueur/2.png';
	p3.src = 'img/personnage/joueur/3.png';
	p4.src = 'img/personnage/joueur/4.png';
	p5.src = 'img/personnage/joueur/5.png';
}

/**
* Gère l'affichage du personnage (mise à jour) et son annimation
*/
function updatePersonnage() {
	if (!recule) {
		if (statutPersonnage == 0) {
			statutPersonnage++;
			context.drawImage(p0, xPerso, canvas.height - p1.height - sol.height);
		}
		else if (statutPersonnage == 1) {
			statutPersonnage++;
			context.drawImage(p1, xPerso, canvas.height - p1.height - sol.height);
		}
		else {
			statutPersonnage = 0;
			context.drawImage(p2, xPerso, canvas.height - p1.height - sol.height);
		}
	}
	if (recule) {
		if (statutPersonnage == 3) {
			statutPersonnage++;
			context.drawImage(p3, xPerso, canvas.height - p1.height - sol.height);
		}
		else if (statutPersonnage == 4) {
			statutPersonnage++;
			context.drawImage(p4, xPerso, canvas.height - p1.height - sol.height);
		}
		else {
			statutPersonnage = 3;
			context.drawImage(p5, xPerso, canvas.height - p1.height - sol.height);
		}
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
				context.drawImage(this, 0, canvas.height - sol.height);
				loadPersonnage();
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
	context.drawImage(sol, x, canvas.height - sol.height);
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