/**
* Charge le niveau correspondant
* @var int level Le num�ro du niveau � charger
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

function updateLevel(level) {
	switch (level) {
		case 1:
			updateLevel1();
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
			updateLevel1();
		break;
	}
}

/**
* Charge les �l�ments du niveau 1 du jeu
*/
function loadLevel1() {
	canvas.style.backgroundColor = "#77abe5";
    // Montagne en arri�re plan
    f1 = new Image();
    f1.onload = function () {
        context.drawImage(this, 0, 0);
        // Montagne � l'avant plan
        f2 = new Image();
        f2.onload = function() {
            context.drawImage(this, 0, 0);
			
			//Chargement du sol
			sol = new Image();
			sol.onload = function () {
				context.drawImage(this, 0, 465); //500(hauteur du canvas) - hauteur de l'image
			}
			sol.src = 'img/decors/lvl1/sol.png';
        };
        f2.src = 'img/decors/lvl1/montagneAvant.png';
    };
    // Toujours d�finir la source apr�s ajout de l'�couteur
    f1.src = 'img/decors/lvl1/montagneArriere.png';
}

function updateLevel1() {
	context.drawImage(f1, x, 0);
	context.drawImage(f2, x, 0);
	context.drawImage(sol, 0, 465);
}

/**
* Charge les �l�ments du niveau 2 du jeu
*/
function loadLevel2() {

}

/**
* Charge les �l�ments du niveau 3 du jeu
*/
function loadLevel3() {

}

/**
* Charge les �l�ments du niveau 4 du jeu
*/
function loadLevel4() {

}

/**
* Charge les �l�ments du niveau 5 du jeu
*/
function loadLevel5() {

}