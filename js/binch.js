var listeJoueurs = ['a','b','c','d','e','f','g'];
var choix;
var texteQuestion = 'une question';
var prenomJoueur = 'un prenom';
var montrerJoueur = 'p';
var n = 0;

// QUESTIONS 

var questionsOse = ['Bois un mélange qu’un de tes amis te prépare sans te dire de quoi il s’agit',
					'Joue 5 shots à pile ou face. Pile tu bois, face tu les donnes',
					'Finis le verre de 3 de tes amis ',
					'Choisi un a(l)ccolyte, à chaque fois que cette personne bois, tu bois avec elle',
					'Tu prend le double de gorgée pendant 3 tours',
					'Bien joué, tu as des “bawls”, distribue 3 gorgées … mais tu en prend 3 aussi ',
					'Tu ne dois plus dire le verbe boire et toutes ses conjugaisons, sous peine de devoir prendre 1 gorgées ( pendant 3 tours)',
					'Choisi un partenaire, faite un “chi-fou-mi” celui qui perd moi 5 gorgées',
					'CHAMPION DU MONDE, bois 2 gorgées',
					'On ose c’est bien ! Les garçons boivent le double de gorgée pendant 5 tours',
					'Qui perd gagne, fais un combat de pouce celui qui perd boit 3 gorgées mais en distribue 2 aussi',
					'Cadeau bois 1 gorgée',
					'Finis ton verre !! On doit partir en soirée',
					'1 habit enlevé = un shot à distribué .. Jusqu’à ou es-tu pres à aller ?',
					'Fait le poirier pendant 4 secondes, si tu donnes boit 3 gorgées']; 

var questionsOsePas = ['Jeux du mime, imite un animal, tu as 10 secondes pour le faire deviner sinon tu bois',
						'Tu as voulu faire le fragile du coup boit 5 shot',
						//'De quoi as-tu peur ? OSE' 
						'Tu dois sentir les chaussettes de ton camarade de droite', 
						'Vraiment marre des gens qui n’osent pas ! Pour la peine bois un shot',
						'Tu n’oses pas? t’es en soirée pour enfiler des perles? Lèche le lobes d’oreille d’une personne de ton choix sinon bois un 1 shot',
						'Apparement tu n’aimes pas l’alcool? Ok chacun des participants choisi pour toi un “liquide” que tu devras ingurgiter le tout mélangé ensemble',
						'A chaque fois que quelqu’un t’appelera par ton prénom tu devras te lever et faire un tour sur toi même',
						'T’as voulu jouer t’as perdu … Fini ton verre',
						'Tu dois parler avec l’accent chinois pendant 5 tours',
						'Les autres choisissent une chanson que tu dois chanter avec une gorgée dans la bouche',
						'Jeux du mime, imite un animal, tu as 10 secondes pour le faire deviner sinon tu bois']; 

//var boutons

var boutonGo = document.getElementById('go');
var boutonOse = document.getElementById('bouton_ose');
var boutonOsePas = document.getElementById('bouton_ose_pas');
var boutonFaitOse = document.getElementById('bouton_fait_ose');
var boutonFaitOsePas = document.getElementById('bouton_fait_ose_pas');
var boutonChangeOse = document.getElementById('change_ose');
var boutonChangeOsePas = document.getElementById('change_ose_pas');
var boutonToolsOse = document.getElementById('tools_ose');
var boutonToolsOsePas = document.getElementById('tools_ose_pas');
var boutonFermer = document.getElementById('fermer');




//var pages

var pageForm = document.getElementById('page_form');
var pagePrenom = document.getElementById('page_prenom');
var pageChoix = document.getElementById('page_choix');
var pageOse = document.getElementById('page_question_ose');
var pageOsePas = document.getElementById('page_question_ose_pas');
var pageTools = document.getElementById('page_tools');
//fonctions dans le jeu 

function recupererJoueurs(){
	var liste = [document.getElementById('joueur2').value , document.getElementById('joueur1').value];
}

function montrer(page){
	page.classList.remove('cacher');
}

function cacher(page){
	page.classList.add('cacher');
}

function choixJoueur(){

	var numJoueur = Math.round(Math.random() * listeJoueurs.length );
	prenomJoueur = listeJoueurs[numJoueur];

		if (prenomJoueur === 'a'){
			prenomJoueur = document.getElementById('joueur1').value;
		}else if (prenomJoueur === 'b'){
			prenomJoueur = document.getElementById('joueur2').value;
		}else if (prenomJoueur === 'c'){
			prenomJoueur = document.getElementById('joueur3').value;
		}else if (prenomJoueur === 'd'){
			prenomJoueur = document.getElementById('joueur4').value;
		}else if (prenomJoueur === 'e'){
			prenomJoueur = document.getElementById('joueur5').value;
		}else if (prenomJoueur === 'f'){
			prenomJoueur = document.getElementById('joueur6').value;
		}else if (prenomJoueur === 'g'){
			prenomJoueur = document.getElementById('joueur7').value;
		}
	
	montrerJoueur = document.createElement('p');
	var texteDuP = document.createTextNode(''+ prenomJoueur +'');
	pagePrenom.appendChild(montrerJoueur);
	montrerJoueur.appendChild(texteDuP);

	if (prenomJoueur === undefined){
		n = 1
	}else{
		n = prenomJoueur.length;	
	}

	if(n === 1){
		pagePrenom.removeChild(montrerJoueur);
		prenomJoueur = '';
		choixJoueur();
	}
}

function choixQuestionOse(){
	var numQuestion = Math.round(Math.random() * questionsOse.length );
	texteQuestion = questionsOse[numQuestion];
}

function choixQuestionOsePas(){
	var numQuestion = Math.round(Math.random() * questionsOsePas.length );
	texteQuestion = questionsOsePas[numQuestion];
}

//fonction d'une partie

function jeu(){

	cacher(pageOse);
	cacher(pageOsePas);

	choixJoueur();
	//empecher les undefined des cases non remplies 
	if (prenomJoueur === undefined){
		pagePrenom.removeChild(montrerJoueur);
		prenomJoueur = '';
		choixJoueur();
	}
	montrer(pagePrenom);

	pagePrenom.onclick = function(){
		cacher(pagePrenom);
		montrer(pageChoix);
		pagePrenom.removeChild(montrerJoueur);


		//choix du ose - ose pas

		boutonOse.onclick = function(){
			cacher(pageChoix);

			choixQuestionOse();

			var montrerQuestionOse = document.createElement('p');
			var texteQuestionOse = document.createTextNode('' + texteQuestion + '');
			document.getElementById('question_ose').appendChild(montrerQuestionOse);
			montrerQuestionOse.appendChild(texteQuestionOse);

			//régler les bugs avant d'afficher la page
			if (texteQuestion === undefined){
				montrerQuestionOse.removeChild(texteQuestionOse);
				document.getElementById('question_ose').removeChild(montrerQuestionOse);
				choixQuestionOse();
			}

			montrer(pageOse);

			boutonChangeOse.onclick = function(){
				console.log('changement');
				montrerQuestionOse.removeChild(texteQuestionOse);
				document.getElementById('question_ose').removeChild(montrerQuestionOse);
				choixQuestionOse();

				if (texteQuestion === undefined){
				montrerQuestionOse.removeChild(texteQuestionOse);
				document.getElementById('question_ose').removeChild(montrerQuestionOse);
				choixQuestionOse();
				}

				montrerQuestionOse = document.createElement('p');
				texteQuestionOse = document.createTextNode('' + texteQuestion + '');
				document.getElementById('question_ose').appendChild(montrerQuestionOse);
				montrerQuestionOse.appendChild(texteQuestionOse);
			}

			boutonToolsOse.onclick = function(){
				cacher(pageOse);
				montrer(pageTools);

				boutonFermer.onclick = function(){
					cacher(pageTools);
					montrer(pageOse);
				}
			}

			boutonFaitOse.onclick = function(){
				jeu();
				console.log('fin tour');
				montrerQuestionOse.removeChild(texteQuestionOse);
				document.getElementById('question_ose').removeChild(montrerQuestionOse);

			}
		} 

		boutonOsePas.onclick = function(){
			cacher(pageChoix);

			choixQuestionOsePas();

			var montrerQuestionOsePas = document.createElement('p');
			var texteQuestionOsePas = document.createTextNode('' + texteQuestion + '');
			document.getElementById('question_ose_pas').appendChild(montrerQuestionOsePas);
			montrerQuestionOsePas.appendChild(texteQuestionOsePas);

			//régler les bugs
			if (texteQuestion === undefined){
				montrerQuestionOsePas.removeChild(texteQuestionOsePas);
				document.getElementById('question_ose_pas').removeChild(montrerQuestionOsePas);
				choixQuestionOsePas();
			}

			montrer(pageOsePas);

			boutonChangeOsePas.onclick = function(){
				console.log('changement');
				montrerQuestionOsePas.removeChild(texteQuestionOsePas);
				document.getElementById('question_ose_pas').removeChild(montrerQuestionOsePas);
				choixQuestionOsePas();

				if (texteQuestion === undefined){
				montrerQuestionOsePas.removeChild(texteQuestionOsePas);
				document.getElementById('question_ose_pas').removeChild(montrerQuestionOsePas);
				choixQuestionOsePas();
			}

				montrerQuestionOsePas = document.createElement('p');
				texteQuestionOsePas = document.createTextNode('' + texteQuestion + '');
				document.getElementById('question_ose_pas').appendChild(montrerQuestionOsePas);
				montrerQuestionOsePas.appendChild(texteQuestionOsePas);
			}

			boutonToolsOsePas.onclick = function(){
				cacher(pageOsePas);
				montrer(pageTools);

				boutonFermer.onclick = function(){
					cacher(pageTools);
					montrer(pageOsePas);
				}
			}

			boutonFaitOsePas.onclick = function(){

				montrerQuestionOsePas.removeChild(texteQuestionOsePas);
				document.getElementById('question_ose_pas').removeChild(montrerQuestionOsePas);
				jeu();
				console.log('fin tour');
			}
		}
	}
}

//jeu 

boutonGo.onclick = function(){
	recupererJoueurs();
	cacher(pageForm);
	cacher(pageOse);
	cacher(pageOsePas);

	jeu();
}

