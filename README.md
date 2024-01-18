# TP01 - Architecture Web

Ce TP01 concerne la mise en place d'une architecture web de base pour une page HTML 5 avec un formulaire de saisie de compte client, des contrôles de saisie en JavaScript et jQuery, et une intégration responsive basée sur Bootstrap.

## 1. La page HTML 5 doit inclure les éléments suivants :

- La structuration par défaut d'une page HTML 5.
- La notion d'encodage.
- Une feuille de style externe.
- Un balisage HTML 5 bien structuré.
- Un formulaire HTML 5 pour la saisie d'un compte client :
  - Nom, prénom, adresse, cp, ville, tel, email, civilité, password, login.
- Des contrôles de saisie de surface.
- Un rendu responsive design basé sur Bootstrap.
- Créez vos feuilles de styles CSS sur la base d'un programme LESS.

## 2. TP : Écrire des contrôles de surface en Javascript et jQuery

Faites évoluer le formulaire de saisie de comptes clients en suivant ces étapes :
- Téléchargez jQuery.
- Liez jQuery à la page HTML du formulaire de compte client.
- Écrivez une fonction de validation appelée sur l'évènement onSubmit du formulaire. Elle doit en particulier vérifier :
  - La validité du mot de passe conforme au champ de confirmation.
  - Afficher des messages d'erreur spécifiques permettant d'indiquer à l'utilisateur les données à corriger.