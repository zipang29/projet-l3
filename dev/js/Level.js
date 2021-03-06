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
				displayAllObjects();
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
	piece = new Image();
	piece.src = 'img/objets/piece1.png';

	context.font = '20px Arial';
	context.fillText("Score : " + score, 830, 30);
	context.fillText("Temps : " + minutes + ":" + secondes + ":" + dixiemes, 830, 50);
}

/**
* Met � jour l'interface du jeu (score, coeurs de vie, bonus de sant�...etc)
*/
function updateInterface() {
	var xTmp = 10;
	for (var i=0, v=vieJoueur; i<v; i++) {
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
	addElevateur(1000-195, canvas.height - sol.height, 1000-195, 200);//position de la plateforme (ligne ci-apr�s) moins la largeur de l'image d'un �l�vateur
	addPlateforme(1000, 200);
	addElevateur(8900-195, canvas.height - sol.height, 8900-195, 200);
	addPlateforme(8900, 200);
	lancerElevateurs();
}

function addAllObjectLevel1() {
	addCoeurRamassable(1150, 150);
	addCoeurRamassable(9050, 150);
	
	addPieceRamassable(1075, 135);
	addPieceRamassable(1095, 115);
	addPieceRamassable(1115, 95);
	addPieceRamassable(1135, 75);
	addPieceRamassable(1155, 55);
	addPieceRamassable(1175, 55);
	addPieceRamassable(1195, 75);
	addPieceRamassable(1215, 95);
	addPieceRamassable(1235, 115);
	addPieceRamassable(1255, 135);
	
	addPieceRamassable(1375, 55);
	addPieceRamassable(1395, 75);
	addPieceRamassable(1415, 95);
	addPieceRamassable(1435, 115);
	addPieceRamassable(1455, 135);
	addPieceRamassable(1395, 55);
	addPieceRamassable(1415, 75);
	addPieceRamassable(1435, 95);
	addPieceRamassable(1455, 115);
	addPieceRamassable(1475, 135);
	addPieceRamassable(1395, 55);
	addPieceRamassable(1435, 75);
	addPieceRamassable(1455, 95);
	addPieceRamassable(1475, 115);
	addPieceRamassable(1495, 135);
	
	addPieceRamassable(1375, 250);
	addPieceRamassable(1395, 250);
	addPieceRamassable(1415, 250);
	addPieceRamassable(1435, 250);
	addPieceRamassable(1455, 250);
	addPieceRamassable(1475, 250);
	addPieceRamassable(1495, 250);
	
	addPieceRamassable(1375, 410);
	addPieceRamassable(1395, 410);
	addPieceRamassable(1415, 410);
	addPieceRamassable(1435, 410);
	addPieceRamassable(1455, 410);
	addPieceRamassable(1475, 410);
	addPieceRamassable(1495, 410);
	
	addPieceRamassable(1675, 410);
	addPieceRamassable(1695, 410);
	addPieceRamassable(1715, 410);
	addPieceRamassable(1735, 410);
	addPieceRamassable(1755, 410);
	addPieceRamassable(1775, 410);
	addPieceRamassable(1795, 410);
	
	addPieceRamassable(3095, 410);
	addPieceRamassable(3115, 410);
	addPieceRamassable(3135, 410);
	
	addPieceRamassable(6035, 310);
	addPieceRamassable(6035, 290);
	addPieceRamassable(6035, 270);
	addPieceRamassable(6035, 250);
	
	addPieceRamassable(8335, 410);
	addPieceRamassable(8355, 410);
	addPieceRamassable(8375, 410);
	addPieceRamassable(8395, 410);
	addPieceRamassable(8415, 410);
	addPieceRamassable(8335, 390);
	addPieceRamassable(8355, 390);
	addPieceRamassable(8375, 390);
	addPieceRamassable(8395, 390);
	addPieceRamassable(8415, 390);
	
	addPieceRamassable(13000, 300);
	addPieceRamassable(13030, 300);
	addPieceRamassable(13060, 300);
	addPieceRamassable(13090, 300);
	addPieceRamassable(13120, 300);
	
	addPieceRamassable(13000, 280);
	addPieceRamassable(13030, 280);
	addPieceRamassable(13060, 280);
	addPieceRamassable(13090, 280);
	addPieceRamassable(13120, 280);
	
	addPieceRamassable(13000, 260);
	addPieceRamassable(13030, 260);
	addPieceRamassable(13060, 260);
	addPieceRamassable(13090, 260);
	addPieceRamassable(13120, 260);
	
	addPieceRamassable(13000, 260);
	addPieceRamassable(13030, 260);
	addPieceRamassable(13060, 260);
	addPieceRamassable(13090, 260);
	addPieceRamassable(13120, 260);
	
	addPieceRamassable(13000, 240);
	addPieceRamassable(13030, 240);
	addPieceRamassable(13060, 240);
	addPieceRamassable(13090, 240);
	addPieceRamassable(13120, 240);
	
	addPieceRamassable(8975, 135);
	addPieceRamassable(8995, 115);
	addPieceRamassable(9015, 95);
	addPieceRamassable(9035, 75);
	addPieceRamassable(9055, 55);
	addPieceRamassable(9075, 55);
	addPieceRamassable(9095, 75);
	addPieceRamassable(9115, 95);
	addPieceRamassable(9135, 115);
	addPieceRamassable(9155, 135);
	
	setInterval("onObject()", 100);
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
				addAllObjectLevel1();
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
    // Toujours d�finir la source apr�s ajout de l'�couteur
    f1.src = 'img/decors/lvl1/montagneArriere.png';
}

function updateLevel1() {
	context.drawImage(f1, Math.abs(xFond), 0, 1000, 500, 0, 0, 1000, 500);
	context.drawImage(f2, Math.abs(xFond), 0, 1000, 500, 0, 0, 1000, 500);
	context.drawImage(sol, Math.abs(xFond), 0, 1000, 35, 0, canvas.height - sol.height, 1000, 35);
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

function gagner() {
	music.pause();
	music.currentTime = 0;
	suspendreChronometre();
	context.fillText("Vous avez gagne !", 450, 250);
	context.fillText("Score : " + score, 830, 30);
	context.fillText("Temps : " + minutes + ":" + secondes + ":" + dixiemes, 830, 50);
}

/**
* Fonction appel� lorsque le joueur n'a plus de vie et a donc perdu
*/
function perdu() {
	var music = document.getElementById("music");
	music.pause();
	music.currentTime = 0;
	suspendreChronometre();
	context.fillText("Perdu !", 500, 250);
	context.fillText("Score : " + score, 830, 30);
	context.fillText("Temps : " + minutes + ":" + secondes + ":" + dixiemes, 830, 50);
}