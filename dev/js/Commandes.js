/**
* Booleen permettant de savoir si on avance ou si on recule (pour l'animation du personnage)
*/
var reculer = false;

/**
* Permet de g�rer la r�p�tition des touches au clavier et de faire en sorte qu'il n'y ait plus une "pause" apr�s le premier appuie sur une touche
*/
var timer = null;

var saut;

/**
* Fonction anonyme qui s'ex�cute (�v�nement) � la pression d'une touche du clavier
*/
document.onkeydown = function(e) {
	if (timer) return;
	timer = setInterval(function(){
		// Fl�che droite : on avance
		if (e.keyCode == 39) {
			recule = false;
			if (joueur.statutPersonnage >= 0 && joueur.statutPersonnage < 2) {
				joueur.statutPersonnage++;
			}
			else {
				joueur.statutPersonnage = 0;
			}
			if (joueur.x == 450) {
				if (Math.abs(xFond - 10) < f1.width - canvas.width && Math.abs(xFond - 10) < f2.width - canvas.width) {
					xFond -= 10; // Permet de faire avancer de 10 pixel � chaque appuie sur une touche
				}
			}
			else {
				joueur.x += 10;
			}
		}
		// Fl�che gauche : on recule
		if (e.keyCode == 37) {
			recule = true;
			if (joueur.statutPersonnage >= 3 && joueur.statutPersonnage < 5) {
				joueur.statutPersonnage++;
			}
			else {
				joueur.statutPersonnage = 3;
			}
			if (joueur.x <= 450 && joueur.x > 0) {
				joueur.x -= 10;
			}
			else {
				if (xFond + 10 <= 0) {
					xFond += 10;
				}
			}
		}
    }, 30); // Le dernier param�tre sert � modifier la vitesse d'avancement du joueur
	
	// On met ceci hors de la fonction de r�p�tition car on ne doit pas pouvoir sauter plusieurs fois d'affiler (pas avant d'avoir toucher le sol � nouveau)
	if (e.keyCode == 32) {
		if (!joueur.sautEnCours) {
			joueur.sautEnCours = true;
			joueur.saut = setInterval(function() {
				var tmp = joueur.sauter();
				if (tmp != -1) {
					xFond -= tmp;
				}
			}, 30);
			recule = false;
		}
	}
};

/**
* Fonction anonyme qui s'ex�cute lorsqu'on relache une touche du clavier
*/
document.onkeyup = function(e) {
	clearTimeout(timer);
    timer = null;
	// Si on relache la fl�che droite
	if (e.keyCode == 39 || e.keyCode == 37) {
		if (!recule) {
			joueur.statutPersonnage = 0; // On affiche l'image du personnage qui ne marche pas
		}
		else {
			joueur.statutPersonnage = 5;
		}
		context.drawImage(joueur.p1, joueur.x, canvas.height - joueur.p1.height - sol.height);
	}
}
