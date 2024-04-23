# apartment-contributions-tracker

Je veux créer une application web avec html, JavaScript, css , 
Le projet et le suivant :
J’ai 24 appartement, chaque appartement cotise avec une montant d’argent par mois ( 80=> montant<=120 depuis 2015 .
L’application se compose des pages suivantes :
Form.html : Formulaire d’enregistrement de données : champs visible (numéro de l’appartement, Mois a cotiser, Année a cotiser, montant) , champs invisible (mois d’enregistrement de données , année d’enregistrement de données ), il faut toujours vérifier avant l’envoie des données que le montant est limiter entre 80 et 120 , vérifier que  les données ne sont pas déjà enregistrer pour ne pas avoir de doublant . et de donner une seconde chance a celui qui fait la saisie pour la correction avant l’envoie de données .
Recherche.html : page avec un formulaire de deux champs et deux boutons ,1 pour la recherche par appartement, 2 pour la recherche avec année. les résultat s’affiche sous forme des tableaux ,chaque tableaux pour une année .
Somme.html :  page ou afficher un tableau de l’année et les mois en cours ou les donnes serrant enregistrer quel que soit l’année ou le mois de cotisation. Dans le tableau la somme de tous les montant enregistrer dans le mois actuel.
Les données serrant enregistrer sur une feuille Google sheets 


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/apartment-contributions-tracker.git
cd apartment-contributions-tracker
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
