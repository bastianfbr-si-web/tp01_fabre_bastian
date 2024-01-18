# TP01 - Architecture Web

Ce TP01 concerne la mise en place d'une architecture web de base pour une page HTML 5 avec un formulaire de saisie de compte client, des contrôles de saisie en JavaScript et jQuery, et une intégration responsive basée sur Bootstrap.

# Architecture du Projet

Le projet est structuré comme suit :

┣ 📂src
┃ ┣ 📂js
┃ ┃ ┗ 📜validation.js
┃ ┗ 📂styles
┃ ┃ ┣ 📜styles.css
┃ ┃ ┗ 📜styles.less
┣ 📜.gitignore
┣ 📜README.md
┣ 📜index.html
┣ 📜package-lock.json
┗ 📜package.json


- **src**: Le répertoire principal des sources du projet.
  - **js**: Contient les fichiers JavaScript.
    - **validation.js**: Fichier contenant les scripts de validation du formulaire.
  - **styles**: Contient les fichiers de style.
    - **styles.css**: Fichier CSS généré à partir de LESS.
    - **styles.less**: Fichier LESS source, utilisé pour générer le CSS.

- **.gitignore**: Fichier spécifiant les éléments à ignorer lors de la gestion de version avec Git.

- **README.md**: Ce fichier contient des informations sur le projet, notamment cette structure et des explications sur son fonctionnement.

- **index.html**: Le fichier HTML principal de l'application.

- **package-lock.json**: Fichier généré par npm pour verrouiller les versions des dépendances.

- **package.json**: Fichier de configuration du projet, contenant les dépendances et les scripts.

# Compiler les fichiers LESS en CSS

Pour compiler les fichiers LESS en CSS, utilisez le script `npm run build`. Il exécute la commande `lessc` pour prendre le fichier `styles.less` comme source et générer le fichier CSS résultant `styles.css` dans le répertoire `src/styles`. Cette étape est importante lorsque vous apportez des modifications à vos styles LESS et que vous souhaitez les appliquer à votre application web.

Pour exécuter le script, ouvrez un terminal et exécutez la commande suivante dans le répertoire du projet :

```sh
npm run build
```

Assurez-vous d'avoir les dépendances nécessaires installées pour que le script fonctionne correctement.


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