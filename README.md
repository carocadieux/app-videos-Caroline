# AppVideosCaroline

Resumé

Ce projet conçu de le cadre de mon cours de technique de programmation 3, est l'aboutissement du travail de la session. Pendant toute la session j'ai construit cette application à partir du début. j'ai tout d'abord créé la base de données, bati l'API et ensuite connecté le tout avec l'interface.

Technologies

Application développé avec Angular CLI version 16.2.5 
Base de données développée avec MySQL, API en PHP.

  ## Development server

  Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Fonctionnalités


- Accueil : La page principale sert à présenter les vidéos offertes au public :
- Vidéos populaires (mini)
- Au format cartes (CSS, Angular ou autre)
- Affiche seulement les vidéos ayant un score supérieur à 1000 (ou autre valeur jugée
pertinente)
- Vidéo complète
- S’affiche au clic d’une vidéo
- Contient toutes les informations de la vidéo, de son auteur et ses avis.
- Précisions sur les vidéos mini ET complets :
- La durée
- doit être représentée en minutes : secondes si < 3 600
(afficher 0:xx si < à 60 secondes)
- doit être représentée en heures : minutes : secondes si >= 3 600
- Le nombre de visionnements
- doit être représenté en unités si < 1 000
- doit être représenté en milliers (arrondi inférieur) si >= 1 000 et < 1 000 000
- doit être représenté en millions (arrondi inférieur) si >= 1 000 000
- doit afficher “Aucun visionnement” ou 1 visionnement (singulier) ou n
visionnements (pluriel) en utilisant I18nPluralPipe
(https://angular.io/api/common/I18nPluralPipe)
- Lorsqu’on passe la souris sur le nombre de visionnements de la vidéo complète, un
composant Tooltip (Angular Material) affiche le nombre exact de visionnements.
- Veuillez privilégier la réutilisation des composants.
- Catégorie(s) X, Y, Z…
- Affiche une liste des vidéos correspondant à la catégorie sélectionnée.
- Veuillez privilégier la réutilisation des composants.
- À propos
- Page de contenu divers (texte, lorem ipsum, selon vos préférences)
- Administration ou Gestion (Sans authentification)
- Gestion des vidéos: Permet à l’utilisateur de gérer (afficher, ajouter, modifier et supprimer)
des vidéos.





