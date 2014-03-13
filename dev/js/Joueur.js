function Joueur(x) {

	/**
	* Permet de gérer l'animation du personnage
	* 0 : personnage statique avant
	* 1 : état 1 de l'animation avant
	* 2 : état 2 de l'animation avant
	* 3 : personnage statique arrière
	* 4 : état 1 de l'animation arrière
	* 5 : état 2 de l'animation arrière
	*/
	this.statutPersonnage = 0;
	
	/**
	* image 0 : personnage statique avant
	*/
	this.p0 = new Image();
	
	/**
	* image 1 : état 1 de l'animation avant
	*/
	this.p1 = new Image();
	
	/**
	* image 2 : état 2 de l'animation avant
	*/
	this.p2 = new Image();
	
	/**
	* image 3 : personnage statique arrière
	*/
	this.p3 = new Image();
	
	/**
	* image 4 : état 1 de l'animation arrière
	*/
	this.p4 = new Image();
	
	/**
	* image 5 : état 2 de l'animation arrière
	*/
	this.p5 = new Image();
	
	/**
	* Points de vie restant (3 sur 5 au début du jeu)
	*/
	this.vie = 3;
	
	/**
	* Position du joueur sur l'axe x
	*/
	this.x = x;
	
	/**
	* Position du joueur sur l'axe y
	*/
	this.y = 0;
	
	/**
	* Détermine si un saut est en cours
	*/
	this.saut = false;
	
	/**
	* Gère le chargement des images du personnages. Méthode à appeler en premier pour pouvoir afficher le personnage
	*/
	this.load = function() {
		this.p0.src = 'img/personnage/joueur/0.png';
		this.p1.src = 'img/personnage/joueur/1.png';
		this.p2.src = 'img/personnage/joueur/2.png';
		this.p3.src = 'img/personnage/joueur/3.png';
		this.p4.src = 'img/personnage/joueur/4.png';
		this.p5.src = 'img/personnage/joueur/5.png';
		this.y = canvas.height - this.p1.height - sol.height;
	}
	
	/**
	* Gère l'affichage du personnage (mise à jour) et son annimation
	*/
	this.update = function() {
		if (this.statutPersonnage == 0) {
			context.drawImage(this.p0, this.x, this.y);
		}
		else if (this.statutPersonnage == 1) {
			context.drawImage(this.p1, this.x, this.y);
		}
		else if (this.statutPersonnage == 2) {
			context.drawImage(this.p2, this.x, this.y);
		}
		else if (this.statutPersonnage == 3) {
			context.drawImage(this.p3, this.x, this.y);
		}
		else if (this.statutPersonnage == 4) {
			context.drawImage(this.p4, this.x, this.y);
		}
		else {
			context.drawImage(this.p5, this.x, this.y);
		}
	};
	
	this.sauter = function() {
		/*if (saut) {
			
		}
		else {
		
		}*/
	};
}