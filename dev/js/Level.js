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
	if (joueur.vie > 0) {
		switch (level) {
			case 1:
				updateLevel1();
				updatePersonnage();
				for (var i = 0, c = ennemis.length; i < c; i++) {
					ennemis[i].update();
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

/**
* G�re le chargement des images du personnages et affiche le personnage statique
*/
function loadPersonnage() {
	p0 = new Image();
	p1 = new Image();
	p2 = new Image();
	p3 = new Image();
	p4 = new Image();
	p5 = new Image();
	p0.src = 'img/personnage/joueur/0.png';
	p1.src = 'img/personnage/joueur/1.png';
	p2.src = 'img/personnage/joueur/2.png';
	p3.src = 'img/personnage/joueur/3.png';
	p4.src = 'img/personnage/joueur/4.png';
	p5.src = 'img/personnage/joueur/5.png';
}

/**
* G�re l'affichage du personnage (mise � jour) et son annimation
*/
function updatePersonnage() {
	if (joueur.statutPersonnage == 0) {
		context.drawImage(p0, xPerso, canvas.height - p1.height - sol.height);
	}
	else if (joueur.statutPersonnage == 1) {
		context.drawImage(p1, xPerso, canvas.height - p1.height - sol.height);
	}
	else if (joueur.statutPersonnage == 2) {
		context.drawImage(p2, xPerso, canvas.height - p1.height - sol.height);
	}
	else if (joueur.statutPersonnage == 3) {
		context.drawImage(p3, xPerso, canvas.height - p1.height - sol.height);
	}
	else if (joueur.statutPersonnage == 4) {
		context.drawImage(p4, xPerso, canvas.height - p1.height - sol.height);
	}
	else {
		context.drawImage(p5, xPerso, canvas.height - p1.height - sol.height);
	}
}

function loadEnnemis() {
	bidon1 = new Image();
	bidon1.src = 'img/personnage/ennemis/bidon1.png';
	bidon2 = new Image();
	bidon2.src = 'img/personnage/ennemis/bidon2.png';
	b1 = new Bidon(400, 600);
	setInterval("b1.lancerAnnimation()", 10);
	setInterval("b1.collision(joueur)", 10);
	ennemis.push(b1);
	b2 = new Bidon(1400, 2000);
	setInterval("b2.lancerAnnimation()", 10);
	ennemis.push(b2);
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
}

/**
* Met � jour l'interface du jeu (score, coeurs de vie, bonus de sant�...etc)
*/
function updateInterface() {
	var xTmp = 10;
	for (var i=0; i<joueur.vie; i++) {
		context.drawImage(coeur, xTmp, 10);
		xTmp += 40;
	}
	if (joueur.vie < 5 && joueur.vie >= 0) {
		for (var i=joueur.vie; i<5; i++) {
			context.drawImage(coeurPerdu, xTmp, 10);
			xTmp += 40;
		}
	}
	context.fillText("Score : " + score, 830, 30);
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
			}
			sol.src = 'img/decors/lvl1/sol.png';
        };
        f2.src = 'img/decors/lvl1/montagneAvant.png';
    };
    // Toujours d�finir la source apr�s ajout de l'�couteur
    f1.src = 'img/decors/lvl1/montagneArriere.png';
	loadPersonnage();
	loadEnnemis();
	loadInterface();
}

function updateLevel1() {
	context.drawImage(f1, x, 0);
	context.drawImage(f2, x, 0);
	context.drawImage(sol, x, canvas.height - sol.height);
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
}