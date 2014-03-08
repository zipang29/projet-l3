function Joueur() {

	this.statutPersonnage = 0;
	
	this.vie = 3; // Points de vie restant (3 sur 5 au début du jeu)
	
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
}