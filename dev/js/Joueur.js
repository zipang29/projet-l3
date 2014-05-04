/**
* Images pour l'animation du personnage
*/
var p0, p1, p2, p3, p4, p5;

/**
	* Permet de gérer l'animation du personnage
	* 0 : personnage statique avant
	* 1 : état 1 de l'animation avant
	* 2 : état 2 de l'animation avant
	* 3 : personnage statique arrière
	* 4 : état 1 de l'animation arrière
	* 5 : état 2 de l'animation arrière
	*/
var statusPersonnage;

/**
* Points de vie restant (3 sur 5 au début du jeu)
*/
var vieJoueur;

/**
* Score du Joueur 
*/
var score ;

var xJoueur, yJoueur;

/**
* Permet de garder en mémoire le setInterval du saut pour pouvoir arrêter l'annimation
*/
var saut;

/**
* Détermine si un saut est en cours
*/
var sautEnCours;

/**
* Boolean (peut valoir null si aucun saut n'est en cours) : true si le saut est en avant, false, si il est en arrière
*/
var sautAvant;

//Variables de configuration du saut
var v_x = 5; // Vitesse horizontale
var v_saut = -11;
var v_gravitation = 0.3;//32
var v_y = this.v_saut; // Vitesse verticale

/**
* Initialise le joueur dans le jeu
* @param xFond La position x du fond actuelle
*/
function createJoueur(xFond) {
	loadImg();
	vieJoueur = 3;
	score = 100;
	statusPersonnage = 0;
	xJoueur = xFond;
	sautEnCours = false;
	saut = false;
	sautAvant = null;
};

/**
* Charge les différentes images du joueur en mémoire et définit la variable yJoueur
*/
function loadImg() {
	p0 = new Image();
	p1 = new Image();
	p2 = new Image();
	p3 = new Image();
	p4 = new Image();
	p5 = new Image();
	p0.onload = function() {
		p1.onload = function() {
			p2.onload = function() {
				p3.onload = function() {
					p4.onload = function() {
						p5.onload = function() {
							yJoueur = canvas.height - p1.height - sol.height;
						};
						p5.src = 'img/personnage/joueur/5.png';
					};
					p4.src = 'img/personnage/joueur/4.png';
				};
				p3.src = 'img/personnage/joueur/3.png';
			};
			p2.src = 'img/personnage/joueur/2.png';
		};
		p1.src = 'img/personnage/joueur/1.png';
	};
	p0.src = 'img/personnage/joueur/0.png';
};

/**
* Gère l'affichage du personnage (mise à jour) et son annimation
*/
function annimJoueur() {
	if (statusPersonnage == 0) {
		context.drawImage(p0, xJoueur, yJoueur);
	}
	else if (statusPersonnage == 1) {
		context.drawImage(p1, xJoueur, yJoueur);
	}
	else if (statusPersonnage == 2) {
		context.drawImage(p2, xJoueur, yJoueur);
	}
	else if (statusPersonnage == 3) {
		context.drawImage(p3, xJoueur, yJoueur);
	}
	else if (statusPersonnage == 4) {
		context.drawImage(p4, xJoueur, yJoueur);
	}
	else {
		context.drawImage(p5, xJoueur, yJoueur);
	}
};

/**
* Animation pour le saut
*/
function sauter() {
	var ret = null;
	if (saut) {
		if (sautAvant) {
			statusPersonnage = 1;
			if (xJoueur == 450) {
				if (Math.abs(xFond - 10) < f1.width - canvas.width && Math.abs(xFond - 10) < f2.width - canvas.width) {
					ret = v_x;
				}
			}
			else {
				xJoueur += v_x;
				if (xJoueur > 450) {
					xJoueur = 450;
				}
			}
		}
		else {
			statusPersonnage = 4;
			if (xJoueur == 450) {
				if (Math.abs(xFond + 10) < f1.width - canvas.width && Math.abs(xFond + 10) < f2.width - canvas.width) {
					ret = -v_x;
				}
			}
			else {
				xJoueur -= v_x;
				if (xJoueur > 450) {
					xJoueur = 450;
				}
			}
		}
		yJoueur += v_y;
		if (yJoueur >= canvas.height - sol.height) {
			yJoueur = canvas.height - sol.height;
		}
		v_y += v_gravitation;
	}
	if ((yJoueur >= canvas.height - p1.height - sol.height)) {
		statusPersonnage = 0;
		v_y = v_saut;
		sautEnCours = false;
		clearInterval(saut);
		saut = null;
		yJoueur = canvas.height - p1.height - sol.height;
	}
	return ret;
};
