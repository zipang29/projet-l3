/**
* Classe Bidon pour gérer les énnemies de type "bidon"
* x1 : la position de départ du bidon
* x2 : le position maximale de déplacement du bidon
*/
function Bidon(x1, x2) {

	/**
	* Position x de déplacement maximum sur la gauche
	*/
	this.x1 = x1;
	
	/**
	* Position y de déplacement maximum sur la droite
	*/
	this.x2 = x2;
	
	/**
	* La position du bidon
	*/
	this.currentX = x1;
	
	/**
	* Détermine si le bidon avance (de gauche à droite) ou si il recule (de droite à gauche)
	*/
	this.avance = true;

	/**
	* Permet de changer la position de l'énnemi. Cette méthode est faite pour être utilisée comme indiqué ci-après. Faire varier le temps d'actualisation de setInterval pour modifier la vitesse du bidon
	* @exemple setInterval("monbidon.lancerAnnimation()", 10);
	*/
	this.lancerAnnimation = function() {
		if (this.avance && this.currentX < this.x2) {
			this.currentX += 1;
		}
		else {
			this.currentX -= 1;
		}
		if (this.currentX == x2) {
			this.avance = false;
		}
		else if (this.currentX == x1) {
			this.avance = true;
		}
	};
	
	/**
	* Met à jour la position et l'image du bidon
	*/
	this.update = function() {
		if (this.avance) {
			context.drawImage(bidon2, x + this.currentX, canvas.height - bidon1.height - sol.height);
		}
		else {
			context.drawImage(bidon1, x + this.currentX, canvas.height - bidon1.height - sol.height);
		}
	};
	
	/**
	* Détecte les collisions entre le joueur et un bidon
	* @Joueur joueur Un objet de type joueur
	* @return true si il y a collision, false sinon
	*/
	this.collision = function(joueur) {
		if (((x + this.currentX + 25) <= (joueur.x + joueur.p0.width)) && ((x + this.currentX + bidon1.height + 25) > (joueur.x + joueur.p0.width))) {
			if ((500 - sol.height - bidon1.height) < (joueur.y + joueur.p0.height)) {
				joueur.vie--;
				this.currentX += 50;
			}
		}
	};
}
