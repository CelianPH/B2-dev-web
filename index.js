//Exercice Tableaux

/** 1)Création tableau de 1 à 10
 let tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 for (let i = 0; i < tableau.length; i++) {
    console.log(tableau[i]);
 }
 */

 /** 2)tableau jour semaine
 let joursSemaine =["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
 //console.log (joursSemaine[0]);
 console.log(joursSemaine[0] + " est le premier jour de la semaine");
 */

/** 3)additioner les nombres du tableau
let nombresPairs = [2,4,6,8,10];
let somme = 0

for (let i = 0; i < nombresPairs.length; i++) {
    somme += nombresPairs[i];
}
console.log(somme)
*/

/** 4)ajout valeur tableau
let fruits = ["banane","fraise","cerise","orange","melon"];

fruits.unshift("pastèque");
console.log(fruits);
*/

/** moyenne de notes 
let notes = [12,15,8,11,17];
let sommeNotes = 0;

for (let i = 0; i < notes.length; i++) {
    sommeNotes += notes[i];
}

let moyenneNotes = sommeNotes / notes.length;

console.log(moyenneNotes);
*/

/** chercher element present dans tableau 
let nomOiseaux = ["Aigle","Aigrette","Busard cendré","Colibri","Faucon"];

let found = nomOiseaux.indexOf("Colibri")
if (found == -1){
    console.log("il n'est pas présent dans le tableau");
} else {
    console.log("il est présent dans le tableau");
}
*/

/** trier par orde A
let pays = ["France","Espagne","Bresil","Allemagne","Portugal","Chine"];
pays.sort();
console.log(pays);
*/

/** afficher le troisieme element  
let mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
console.log(mois[2]);
*/

/** trouver valeur min et max d'un tableau
let nombres = [12, 45, 27, 8, 94, 36, 62, 17, 53, 29];
let min = Math.min(...nombres);
let max = Math.max(...nombres);
console.log(min, max);
*/

/** trouvre phrase la plus long 
let phrases = ["Bonjour à tous", "Comment allez-vous aujourd'hui ?", "Je suis en train de préparer le dîner", "Le chat dort sur le canapé", "Il fait beau aujourd'hui"];
let phrasePlusLongue = phrases[0];
for (let i = 1; i < phrases.length; i++) {
    if (phrases[i].length > phrasePlusLongue.length) {
        phrasePlusLongue = phrases[i];
    }
}
console.log(phrasePlusLongue);
*/

// Exercice Fonctions

/** additionner deux valeurs
function additionner(a, b) {
    return a + b;
}
let resultat = additionner(2, 3);
console.log(resultat);
*/

/** tourver la valeur max d'un tableau 
function trouverMax(tableau) {
    let max = tableau[0];
    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] > max) {
            max = tableau[i];
        }
    }
    return max;
}
let nombres = [3, 7, 2, 10, 1, 8];
let resultat = trouverMax(nombres);
console.log(resultat);
*/

/**
function supprimerVoyelles(chaine) {
    let nouvelleChaine = "";
    for (let i = 0; i < chaine.length; i++) {
        let lettre = chaine[i];
        if (!estVoyelle(lettre)) {
            nouvelleChaine += lettre;
        }
    }
    return nouvelleChaine;
}

function estVoyelle(lettre) {
    return "aeiouyAEIOUY".indexOf(lettre) !== -1;
}
let chaine = "Bonjour tout le monde!";
let resultat = supprimerVoyelles(chaine);
console.log(resultat);
*/

//documenter sur spread operator et sur rest operator 