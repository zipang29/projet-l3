/**
* temps de jeu du Joueur 
*/
var chrono = 0.0 ;

/**
* Charge le niveau correspondant
* @var int level Le num�ro du niveau � charger
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
				collisionBidon(4);
				chrono += 0.003 ; // incremente le chrono de 30 milisecondes
				updateBidon();
				displayAllElevateurs();
				displayAllPlateformes();
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
	initialiseBidon();
	addBidon(400, 600);
	addBidon(1400, 2000);
	addBidon(5000, 5200);
	addBidon(5300, 5400);
	addBidon(7000, 7300);
	lancerBidon();
}

/**
* Charge l'interface du jeu (score, coeurs de vie, bonus de sant�...etc)
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
	context.fillText("Temps : " + chrono.toFixed(2), 830, 50);

}

/**
* Met � jour l'interface du jeu (score, coeurs de vie, bonus de sant�...etc)
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
	context.fillText("Temps : " + chrono.toFixed(2), 830, 50);

}

/**
* Ajoute les plateformes du niveau 1
*/
function addAllPlateformesLevel1() {
	initElevateur();
	initPlateforme();
	addElevateur(1000-195, canvas.height - sol.height, 1000-195, 200);//position de la plateforme (ligne ci-apr�s) moins la largeur de l'image d'un �l�vateur
	addPlateforme(1000, 200);
}

/**
* Charge les �l�ments du niveau 1 du jeu
*/
function loadLevel1() {
	canvas.style.backgroundColor = "#77abe5";
    // Montagne en arri�re plan
    f1 = new Image();
    f1.onload = function () {
        context.drawImage(this, 0, 0);
        // Montagne � l'avant plan
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
			}
			sol.src = 'img/decors/lvl1/sol.png';
        };
        f2.src = 'img/decors/lvl1/montagneAvant.png';
    };
    // Toujours d�finir la source apr�s ajout de l'�couteur
    f1.src = 'img/decors/lvl1/montagneArriere.png';
}

function updateLevel1() {
	context.drawImage(f1, xFond, 0);
	context.drawImage(f2, xFond, 0);
	context.drawImage(sol, xFond, canvas.height - sol.height);
}

/**
* Charge les �l�ments du niveau 2 du jeu
*/
function loadLevel2() {

}

/**
* Charge les �l�ments du niveau 3 du jeu
*/
function loadLevel3() {

}

/**
* Charge les �l�ments du niveau 4 du jeu
*/
function loadLevel4() {

}

/**
* Charge les �l�ments du niveau 5 du jeu
*/
function loadLevel5() {

}

/**
* Fonction appel� lorsque le joueur n'a plus de vie et a donc perdu
*/
function perdu() {
	context.fillText("Perdu !", 500, 250);
	context.fillText("Score : " + score, 830, 30);
	context.fillText("Temps : " + chrono.toFixed(2), 830, 50);
}