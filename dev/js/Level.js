var statutPersonnage; // Permet de connaitre 

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
	p0.onload = function() {
		context.drawImage(this, 50, canvas.height - p1.height - sol.height);
		statutPersonnage = 0;
	}
	p0.src = 'img/personnage/joueur/0.png';
	p1.src = 'img/personnage/joueur/1.png';
	p2.src = 'img/personnage/joueur/2.png';
}

function updatePersonnage() {
	if (statutPersonnage == 0) {
		statutPersonnage++;
		context.drawImage(p0, 50, canvas.height - p1.height - sol.height);
	}
	else if (statutPersonnage == 1) {
		statutPersonnage++;
		context.drawImage(p1, 50, canvas.height - p1.height - sol.height);
	}
	else {
		statutPersonnage = 0;
		context.drawImage(p2, 50, canvas.height - p1.height - sol.height);
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
	context.drawImage(sol, 0, canvas.height - sol.height);
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