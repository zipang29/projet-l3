var listeBidon = new Array();

var listeTimerAnnimationBidon = new Array();
var listeTimerCollisionBidon = new Array();

var bidon0, bidon1, bidon2, bidon3, bidon4, bidon5; // Bidon statique 1, ...

/**
* Charge les images pour les énnemis de type bidon
*/
function initialiseBidon() {
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
}

/**
* Permet d'ajouter un nouveau bidon entre la position x1 et x2
* x1 : la position de départ du bidon
* x2 : le position maximale de déplacement du bidon
*/
function addBidon(x1, x2) {
	listeBidon[listeBidon.length] = new Array();
	var bidon = listeBidon[listeBidon.length-1];
	
	/**
	* Position x de déplacement maximum sur la gauche
	*/
	bidon['x1'] = x1;
	
	/**
	* Position y de déplacement maximum sur la droite
	*/
	bidon['x2'] = x2;
	
	/**
	* La position du bidon
	*/
	bidon['currentX'] = x1;
	
	/**
	* Détermine si le bidon avance (de gauche à droite) ou si il recule (de droite à gauche)
	*/
	bidon['avance'] = true;
	
	/**
	* Détermine l'image de l'annimation à afficher
	*/
	bidon['annimation'] = 0;
}


/**
* Permet de changer la position de l'énnemi. Cette méthode est faite pour être utilisée comme indiqué ci-après. Faire varier le temps d'actualisation de setInterval pour modifier la vitesse du bidon
* @param bidonNumber int Le numéro du bidon dans listeBidon
* @exemple setInterval("monbidon.lancerAnnimation()", 10);
*/
function annimationBidon(bidonNumber) {
	var b = listeBidon[bidonNumber]
	if (b['avance'] && b['currentX'] < b['x2']) {
		b['currentX'] += 1;
	}
	else {
		b['currentX'] -= 1;
	}
	if (b['currentX'] == b['x2']) {
		b['avance'] = false;
		b['annimation'] = 3;
	}
	else if (b['currentX'] == b['x1']) {
		b['avance'] = true;
		b['annimation'] = 0;
	}
}

/**
* Met à jour la position et l'image du bidon
* @param bidonNumber int Le numéro du bidon dans listeBidon
*/
function updateBidon() {
	for (var i = 0, c = listeBidon.length; i < c; i++) {
		var b = listeBidon[i];
		var y = canvas.height - bidon1.height - sol.height;
		if (b['avance']) {
			if (b['annimation'] == 0) {
				context.drawImage(bidon0, xFond + b['currentX'], y);
				b['annimation']++;
			}
			else if (b['annimation'] == 1) {
				context.drawImage(bidon1, xFond + b['currentX'], y);
				b['annimation']++;
			}
			else if (b['annimation'] == 2) {
				context.drawImage(bidon2, xFond + b['currentX'], y);
				b['annimation'] = 0;
			}
		}
		else {
			if (b['annimation'] == 3) {
				context.drawImage(bidon3, xFond + b['currentX'], y);
				b['annimation']++;
			}
			else if (b['annimation'] == 4) {
				context.drawImage(bidon4, xFond + b['currentX'], y);
				b['annimation']++;
			}
			else if (b['annimation'] == 5) {
				context.drawImage(bidon5, xFond + b['currentX'], y);
				b['annimation'] = 3;
			}
		}
	}
}

/**
* Détecte les collisions entre le joueur et un bidon
* @param bidonNumber int Le numéro du bidon dans listeBidon
* @return true si il y a collision, false sinon
*/
function collisionBidon(bidonNumber) {
	var b = listeBidon[bidonNumber];
	if ((vieJoueur>0) && ((xFond + b['currentX'] + 25) <= (xJoueur + p0.width)) && ((xFond + b['currentX'] + bidon1.height + 25) > (xJoueur + p0.width))) {
		if ((500 - sol.height - bidon1.height) < (yJoueur + p0.height)) {
			vieJoueur--;
			if (score>0) {
				score -= 50;
			}
			b['currentX'] += 50;
		}
	}
}

/**
* Lance les annimations et les collisions pour tout les bidons qui ont étés ajoutés
*/
function lancerBidon() {
	for (var i=0; i<listeBidon.length; i++) {
		listeTimerAnnimationBidon[i] = setInterval("annimationBidon("+i+")", 10);
		listeTimerCollisionBidon[i] = setInterval("collisionBidon("+i+")", 10);
	}
}

function desactiverBidon() {
	for (var i=0; i<listeTimerCollisionBidon.length; i++) {
		clearInterval(listeTimerCollisionBidon[i]);
		listeTimerCollisionBidon[i] = null;
		clearInterval(listeTimerAnnimationBidon[i]);
		listeTimerAnnimationBidon[i] = null;
	}
}
