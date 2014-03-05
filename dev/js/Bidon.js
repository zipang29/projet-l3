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
	
	this.update = function() {
		if (this.avance) {
			context.drawImage(bidon2, x + this.currentPos, canvas.height - bidon1.height - sol.height);
		}
		else {
			context.drawImage(bidon1, x + this.currentPos, canvas.height - bidon1.height - sol.height);
		}
	};
}
