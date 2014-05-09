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
	if (vieJoueur > 0 && Math.abs(xFond) + xJoueur < 14300) {
		switch (level) {
			case 1:
				updateLevel1();
				annimJoueur();
				collisionBidon(4);
				updateBidon();
				displayAllElevateurs();
				displayAllPlateformes();
				updateInterface();
				context.drawImage(finNiveau, xFond + 14200, 217);
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
	else if (Math.abs(xFond) + xJoueur >= 14300) {
		gagner();
	}
	else {
		perdu();
	}
}

function loadEnnemis() {
	initialiseBidon();
	addBidon(400, 600);
	addBidon(1400, 2000);
	addBidon(2300, 2450);
	addBidon(3000, 3200);
	addBidon(4000, 4200);
	addBidon(5000, 5200);
	addBidon(6000, 6050);
	addBidon(7000, 7300);
	addBidon(7300, 7400);
	addBidon(8000, 8400);
	addBidon(8000, 8500);
	addBidon(8600, 8700);
	addBidon(9400, 9600);
	addBidon(9500, 9700);
	addBidon(10000, 10800);
	addBidon(12000, 12200);
	addBidon(13000, 13100);
	lancerBidon();
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
	context.fillText("Temps : " + minutes + ":" + secondes + ":" + dixiemes, 830, 50);
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
	context.fillText("Temps : " + minutes + ":" + secondes + ":" + dixiemes, 830, 50);
}

/**
* Ajoute les plateformes du niveau 1
*/
function addAllPlateformesLevel1() {
	initElevateur();
	initPlateforme();
	addElevateur(1000-195, canvas.height - sol.height, 1000-195, 200);//position de la plateforme (ligne ci-après) moins la largeur de l'image d'un élévateur
	addPlateforme(1000, 200);
	addElevateur(8900-195, canvas.height - sol.height, 8900-195, 200);
	addPlateforme(8900, 200);
	lancerElevateurs();
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
				addAllPlateformesLevel1();
				loadInterface();
				initChronometre();
				finNiveau = new Image();
				finNiveau.src = 'img/decors/lvl1/finNiveau.png';
				setInterval("verifGravite()", 100);
			};
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

function gagner() {
	context.fillText("Vous avez gagne !", 450, 250);
}

/**
* Fonction appelé lorsque le joueur n'a plus de vie et a donc perdu
*/
function perdu() {
	context.fillText("Perdu !", 500, 250);
	context.fillText("Score : " + score, 830, 30);
	context.fillText("Temps : " + minutes + ":" + secondes + ":" + dixiemes, 830, 50);
}