/**
* Booleen permettant de savoir si on avance ou si on recule (pour l'animation du personnage)
*/
var reculer = false;

/**
* Permet de g�rer la r�p�tition des touches au clavier et de faire en sorte qu'il n'y ait plus une "pause" apr�s le premier appuie sur une touche
*/
var timer = null;

/**
* D�termine si un saut est en cours
*/
var saut;

/**
* Fonction anonyme qui s'ex�cute (�v�nement) � la pression d'une touche du clavier
*/
document.onkeydown = function(e) {
	if (!enPause) {
		// On met ceci hors de la fonction de r�p�tition car on ne doit pas pouvoir sauter plusieurs fois d'affiler (pas avant d'avoir toucher le sol � nouveau)
		if (e.keyCode == 32) {
			if (!sautEnCours) {
				sautEnCours = true;
				if (statusPersonnage == 0 || statusPersonnage == 1 || statusPersonnage == 2) {
					sautAvant = true;
				}
				else {
					sautAvant = false;
				}
				saut = setInterval(function() {
					var tmp = sauter();
					if (tmp != null) {
						xFond -= tmp;
					}
				}, 30);
				recule = false;
			}
		}
		else {
			if (timer) return;
			timer = setInterval(function(){
				if (!sautEnCours) {
					// Fl�che droite : on avance
					if (e.keyCode == 39) {
						recule = false;
						if (statusPersonnage >= 0 && statusPersonnage < 2) {
							statusPersonnage++;
						}
						else {
							statusPersonnage = 0;
						}
						if (xJoueur == 450) {
							if (Math.abs(xFond - 10) < f1.width - canvas.width && Math.abs(xFond - 10) < f2.width - canvas.width) {
								xFond -= 10; // Permet de faire avancer de 10 pixel � chaque appuie sur une touche ou r�p�tition de touche
							}
						}
						else if (xJoueur < 450) {
							xJoueur += 10;
						}
					}
					// Fl�che gauche : on recule
					if (e.keyCode == 37) {
						recule = true;
						if (statusPersonnage >= 3 && statusPersonnage < 5) {
							statusPersonnage++;
						}
						else {
							statusPersonnage = 3;
						}
						if (xFond + 10 <= 0) {
							xFond += 10;
						}
						else {
							if (xJoueur - 10 > 0) {
								xJoueur -= 10;
							}
						}
					}
				}
			}, 30); // Le dernier param�tre sert � modifier la vitesse d'avancement du joueur
		}
	}
};

/**
* Fonction anonyme qui s'ex�cute lorsqu'on relache une touche du clavier
*/
document.onkeyup = function(e) {
	if (!enPause) {
		// Si on relache la fl�che droite
		if (e.keyCode == 39 || e.keyCode == 37) {
			clearInterval(timer);
			timer = null;
			if (!recule) {
				statusPersonnage = 0; // On affiche l'image du personnage qui ne marche pas
			}
			else {
				statusPersonnage = 5;
			}
			context.drawImage(p1, xJoueur, yJoueur);
		}
	}
}
