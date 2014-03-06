/**
* Classe Bidon pour gérer les énnemies de type "bidon"
* x1 : la position de départ du bidon
* x2 : le position maximale de déplacement du bidon
*/
function Bidon(x1, x2) {

	this.x1 = x1;
	this.x2 = x2;
	this.currentPos = x1;
	this.avance = true;

	/**
	* Permet de changer la position de l'énnemi. Cette méthode est faite pour être utilisée comme indiqué ci-après
	* @exemple setInterval("monbidon.lancerAnnimation()", 10);
	*/
	this.lancerAnnimation = function() {
		if (this.avance && this.currentPos < this.x2) {
			this.currentPos += 1;
		}
		else {
			this.currentPos -= 1;
		}
		if (this.currentPos == x2) {
			this.avance = false;
		}
		else if (this.currentPos == x1) {
			this.avance = true;
		}
	};
	
	/**
	* Met à jour la position et l'image du bidon
	*/
	this.update = function() {
		if (this.avance) {
			context.drawImage(bidon2, x + this.currentPos, canvas.height - bidon1.height - sol.height);
		}
		else {
			context.drawImage(bidon1, x + this.currentPos, canvas.height - bidon1.height - sol.height);
		}
	};
	
	/**
	* Détecte les collisions entre le joueur et un bidon
	* @Joueur joueur Un objet de type joueur
	* @return true si il y a collision, false sinon
	*/
	this.collision = function(joueur) {
	
	};
}
