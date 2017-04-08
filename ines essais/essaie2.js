var listeJoueurs = ['a','b','c'];
var choix;
var texteQuestion = 'une question';
var prenomJoueur = 'un prenom';
var montrerJoueur = 'p';



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

//var pages

var pageForm = document.getElementById('page_form');
var pagePrenom = document.getElementById('page_prenom');
var pageChoix = document.getElementById('page_choix');
var pageOse = document.getElementById('page_question_ose');
var pageOsePas = document.getElementById('page_question_ose_pas');


//fonctions dans le jeu 

function montrer(page){
	page.classList.remove('cacher');
}

function cacher(page){
	page.classList.add('cacher');
}

function choixJoueur(){

	var numJoueur = Math.round(Math.random() * listeJoueurs.length );
	prenomJoueur = listeJoueurs[numJoueur];
	
	montrerJoueur = document.createElement('p');
	var texteDuP = document.createTextNode(''+ prenomJoueur +'');
	pagePrenom.appendChild(montrerJoueur);
	montrerJoueur.appendChild(texteDuP);
}

function choixQuestionOse(){
	var numQuestion = Math.round(Math.random() * questionsOse.length );
	texteQuestion = questionsOse[numQuestion];
}

function choixQuestionOsePas(){
	var numQuestion = Math.round(Math.random() * questionsOsePas.length );
	var texteQuestion = questionsOsePas[numQuestion];
}

//fonctions d'une partie

function jeu(){

	cacher(pageOse);
	cacher(pageOsePas);

	choixJoueur();

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

				montrer(pageOse);

				boutonFaitOse.onclick = function(){
					jeu();
					console.log('fin tour');
					montrerQuestionOse.removeChild(texteQuestionOse);

				}

			} 

			boutonOsePas.onclick = function(){
				cacher(pageChoix);

				choixQuestionOsePas();

				var montrerQuestionOsePas = document.createElement('p');
				var texteQuestionOsePas = document.createTextNode('' + texteQuestion + '');
				document.getElementById('question_ose_pas').appendChild(montrerQuestionOsePas);
				montrerQuestionOsePas.appendChild(texteQuestionOsePas);

				montrer(pageOsePas);

				boutonFaitOsePas.onclick = function(){

					montrerQuestionOsePas.removeChild(texteQuestionOsePas);
					jeu();
					console.log('fin tour');
				}
			}
		}
}

//jeu 

boutonGo.onclick = function(){
	cacher(pageForm);
	cacher(pageOse);
	cacher(pageOsePas);

		jeu();

}

