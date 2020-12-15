# Comment utiliser l'application

## Pour l'application HAL

Il faut d'abord avoir nodejs et npm d'installer sur la machine.\
Depuis la racine du dossier Archives-app:\
Ensuite il faut faire un `npm install` à la racine du dossier afin d'installer les dépendances.\
Ensuite il faut faire un `npm start` afin de démarrer l'application.\
Il est nécessaire de l'utiliser sur Chrome.\
L'application fonctionne avec Reactjs et des requêtes HTTP.

## Pour l'application arXiv

Il suffit juste d'ouvrir la page HTML.\
La requête fonctionne avec Jquery et Ajax.

## Utilisation de la base de données

Il faut d'abord avoir nodejs et npm d'installer sur la machine.\
Depuis la racine du dossier Node:\
Ensuite il faut faire un `npm install` à la racine du dossier afin d'installer les dépendances.\
Il faut installer un utilitaire pour utiliser la base de données MySQL comme MAMP pour MacOS.\
Ensuite, après avoir démarrer MAMP pour ouvrir la page PHPMyAdmin, ajouter une base de données du nom de articledb.\
Ensuite il faut inserer le .sql présent dans le zip pour réaliser la création de la base de données automatiquement.\
Ensuite il faut faire un `npm start` afin de démarrer le serveur.\
Le serveur va se connecter à la base de données sur le port 5000.\
L'application avec React pourra donc faire des requêtes sur le port 5000 pour discuter mettre à jour les informations de la base de données.
