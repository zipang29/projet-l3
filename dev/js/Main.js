//Variables globales à définir ici
var canvas, context;
var currentLevel;
var partieEnCours ;
var score = 0;

var joueur;

var xFond; // Position de x actuelle pour le fond

/** 
* Images 
*/
var f1, f2, sol; // Image de fond 1, image de fond 2, image du sol
var coeur; // Image de coeur de vie
var coeurPerdu; // Image d'un coeur de vie perdu
/** Les ennemis */
var bidon0, bidon1, bidon2, bidon3, bidon4, bidon5; // Bidon statique 1, Bidon statique 2

/**
* Fonction utilisée pour initialiser et lancer le jeu
*/
function init() 
{
 partieEnCours=0 ;

	xFond = 0;
	boutpause=document.getElementById("pause")
      boutpause.onclick = changBout1;
	canvas = document.getElementById("elevator");
    context = canvas.getContext("2d");
	currentLevel = 1;
	loadLevel(currentLevel);
	window.onload = function() {
		setInterval("redraw()", 30/1000);
	
	chronometrer() ;
	
}
}

var changBout1 = function() 
{
timer=setInterval("init()",0);
     boutpause=document.getElementById("pause")
      boutpause.onclick = changBout2;
window.clearInterval();
suspendreChronometre();
      boutpause.value = "Redémarrer";
//chronometrer();

    }

var changBout2 = function() {

      boutpause.onclick = changBout1;
      boutpause.value = "Mettre en pause";
      
    }

 var chronometreDemarre;
    var dixiemes = 0;
    var secondes = 0;
    var minutes = 0;





    var chronometrer = function() {
      dixiemes++;
      if ( dixiemes > 9 ) {
        dixiemes = 0;
        secondes++;
      }
      if ( secondes > 59 ) {
        secondes = 0;
        minutes++;
      }
      document.getElementById("dixiemes").innerHTML = dixiemes;
      document.getElementById("secondes").innerHTML = secondes < 10 ? "0"+secondes : secondes;
      document.getElementById("minutes").innerHTML = minutes < 10 ? "0"+minutes : minutes;
      chronometreDemarre = setTimeout(chronometrer,100);
    }

//arreter chrono
var suspendreChronometre = function() {
      clearTimeout(chronometreDemarre);
    }
/**
* Actualise la vue courante
*/
function redraw() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	updateLevel(currentLevel);
}
