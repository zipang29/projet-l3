function Joueur() {

	/**
	* Permet de gérer l'animation du personnage
	* 0 : personnage statique avant
	* 1 : état 1 de l'animation avant
	* 2 : état 2 de l'animation avant
	* 3 : personnage statique arrière
	* 4 : état 1 de l'animation arrière
	* 5 : état 5 de l'animation arrière
	*/
	this.statutPersonnage = 0;
	
	/**
	* Points de vie restant (3 sur 5 au début du jeu)
	*/
	this.vie = 3;
	
	/**
	* Position du joueur sur l'axe x
	*/
	this.x;
	
	/**
	* Position du joueur sur l'axe y
	*/
	this.y;
	
	this.update = function() {
		if (statutPersonnage == 0) {
		context.drawImage(p0, xPerso, canvas.height - p1.height - sol.height);
		}
		else if (statutPersonnage == 1) {
			context.drawImage(p1, xPerso, canvas.height - p1.height - sol.height);
		}
		else if (statutPersonnage == 2) {
			context.drawImage(p2, xPerso, canvas.height - p1.height - sol.height);
		}
		else if (statutPersonnage == 3) {
			context.drawImage(p3, xPerso, canvas.height - p1.height - sol.height);
		}
		else if (statutPersonnage == 4) {
			context.drawImage(p4, xPerso, canvas.height - p1.height - sol.height);
		}
		else {
			context.drawImage(p5, xPerso, canvas.height - p1.height - sol.height);
		}
	};
	
	this.sauter = function() {
		
	};
}