/**
* Charge le niveau correspondant
* @var int level Le numéro du niveau à charger
*/
function loadLevel(level) {
	switch (level) {
		case 1:
			loadLevel1();
		break;
		case 2:
		
		break;
		case 3:
		
		break;
		case 4:
		
		break;
		case 5:
		
		break;
		default:
			loadLevel1();
		break;
	}
}

/**
* Charge les éléments du niveau 1 du jeu
*/
function loadLevel1() {
	canvas.style.backgroundColor = "#77abe5";
    // Montagne en arrière plan
    var montagneFond = new Image();
    montagneFond.onload = function () {
        context.drawImage(this, 0, 0);
        // Montagne à l'avant plan
        var montagneAvant = new Image();
        montagneAvant.onload = function() {
            context.drawImage(this, 0, 0);
			
			//Chargement du sol
			var sol = new Image();
			sol.onload = function () {
				context.drawImage(this, 0, 465); //500(hauteur du canvas) - hauteur de l'image
			}
			sol.src = 'img/decors/lvl1/sol.png';
        };
        montagneAvant.src = 'img/decors/lvl1/montagneAvant.png';
    };
    // Toujours définir la source après ajout de l'écouteur
    montagneFond.src = 'img/decors/lvl1/montagneArriere.png';
}

/**
* Charge les éléments du niveau 2 du jeu
*/
function loadLevel2() {

}

/**
* Charge les éléments du niveau 3 du jeu
*/
function loadLevel3() {

}

/**
* Charge les éléments du niveau 4 du jeu
*/
function loadLevel4() {

}

/**
* Charge les éléments du niveau 5 du jeu
*/
function loadLevel5() {

}