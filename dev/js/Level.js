/**
* temps de jeu du Joueur 
*/
var chrono = 0.0 ;

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
	if (vieJoueur > 0) {
		switch (level) {
			case 1:
				updateLevel1();
				annimJoueur();
				chrono += 0.003 ; // incremente le chrono de 30 milisecondes
				for (var i = 0, c = listeBidon.length; i < c; i++) {
					updateBidon(i);
				}
				updateInterface();
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
	else {
		perdu();
	}
}

function loadEnnemis() {
	bidon0 = new Image();
	bidon0.src = 'img/personnage/ennemis/bidon0.png';
	bidon1 = new Image();
	bidon1.src = 'img/personnage/ennemis/bidon1.png';
	bidon2 = new Image();
	bidon2.src = 'img/personnage/ennemis/bidon2.png';
	bidon3 = new Image();
	bidon3.src = 'img/personnage/ennemis/bidon3.png';
	bidon4 = new Image();
	bidon4.src = 'img/personnage/ennemis/bidon4.png';
	bidon5 = new Image();
	bidon5.src = 'img/personnage/ennemis/bidon5.png';
	addBidon(400, 600);
	setInterval("lancerAnnimationBidon(0)", 10);
	setInterval("collisionBidon(0)", 10);
	addBidon(1400, 2000);
	setInterval("lancerAnnimationBidon(1)", 10);
	setInterval("collisionBidon(1)", 10);
}

/**
* Charge l'interface du jeu (score, coeurs de vie, bonus de santé...etc)
*/
function loadInterface() {
	coeur = new Image();
	coeur.onload = function() {
		context.drawImage(this, 10, 10);
		context.drawImage(this, 50, 10);
		context.drawImage(this, 90, 10);
	}
	coeur.src = 'img/objets/coeurPlain.png';
	coeurPerdu = new Image();
	coeurPerdu.onload = function() {
		context.drawImage(this, 130, 10);
		context.drawImage(this, 170, 10);
	}
	coeurPerdu.src = 'img/objets/coeurVide.png';
	context.font = '20px Arial';
	context.fillText("Score : " + score, 830, 30);
	context.fillText("Temps : " + String.fromCharCode(chrono), 830, 50);

}

/**
* Met à jour l'interface du jeu (score, coeurs de vie, bonus de santé...etc)
*/
function updateInterface() {
	var xTmp = 10;
	for (var i=0; i<vieJoueur; i++) {
		context.drawImage(coeur, xTmp, 10);
		xTmp += 40;
	}
	if (vieJoueur < 5 && vieJoueur >= 0) {
		for (var i=vieJoueur; i<5; i++) {
			context.drawImage(coeurPerdu, xTmp, 10);
			xTmp += 40;
		}
	}
	context.fillText("Score : " + score, 830, 30);
	context.fillText("Temps : " + chrono, 830, 50);

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
				createJoueur(50);
				loadEnnemis();
				loadInterface();
			}
			sol.src = 'img/decors/lvl1/sol.png';
        };
        f2.src = 'img/decors/lvl1/montagneAvant.png';
    };
    // Toujours définir la source après ajout de l'écouteur
    f1.src = 'img/decors/lvl1/montagneArriere.png';
}

function updateLevel1() {
	context.drawImage(f1, xFond, 0);
	context.drawImage(f2, xFond, 0);
	context.drawImage(sol, xFond, canvas.height - sol.height);
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

/**
* Fonction appelé lorsque le joueur n'a plus de vie et a donc perdu
*/
function perdu() {
	context.fillText("Perdu !", 500, 250);
}