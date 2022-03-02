# GIT

Nommer les messages de commits Le message d’un commit doit être clair et concis,
il doit indiquer ce qui a été modifié et la raison de cette modification. La
convention de nommage la plus utilisée est la “Conventional Commits“.

L’avantage de respecter cette convention, outre le fait de rendre plus
compréhensibles vos commits, est de permettre de respecter la sémantique de
versions (SemVer) et d’automatiser certaines tâches (comme la génération d’un
fichier Changelog par exemple).

Format des messages Le format du message est le suivant :

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

Voyons plus en détail chacune des parties du message.

**Le type**

Le type du commit décrit l’origine du changement. Il peut prendre différentes
valeurs :

- feat: Ajout d’une nouvelle fonctionnalité;
- fix: Correction d’un bug;
- build: Changement lié au système de build ou qui concerne les dépendances
  (npm, grunt, gulp, webpack, etc.).
- ci: Changement concernant le système d’intégration et de déploiement continu
  (Jenkins, Travis, Ansible, gitlabCI, etc.)
- docs: Ajout ou modification de documentation (README, JSdoc, etc.);
- perf: Amélioration des performances;
- refactor: Modification n’ajoutant pas de fonctionnalités ni de correction de
  bug (renommage d’une variable, suppression de code redondant, - simplification
  du code, etc.);
- style: Changement lié au style du code (indentation, point virgule, etc.);
- test: Ajout ou modification de tests;
- revert: Annulation d’un précédent commit;
- chore: Toute autre modification (mise à jour de version par exemple). Pour
  chacun des types, vous pouvez également utiliser un système d’emoji comme
  gitmoji.

**Le scope**

Cet élément facultatif indique simplement le contexte du commit. Il s’agit des
composants de notre projet, voici une liste non exhaustive :

- controller;
- route;
- middleware;
- view;
- config;
- service;
- etc.

**Le sujet**

Le sujet décrit succinctement la modification. Certaines règles doivent être
respectées :

Le sujet doit faire moins de 50 caractères; Les verbes doivent être à
l’impératif (add, update, change, remove, etc.); La première lettre ne doit pas
être en majuscule; Le sujet ne doit pas se terminer par un point. Le corps du
message

Le corps du message, qui est optionnel, doit contenir les raisons de la
modification ou tout simplement donner plus détails sur le commit. Il peut
également indiquer les changements importants (breaking changes). Celui-ci doit
faire moins de 100 caractères.

Le footer

Le footer est également facultatif, celui-ci est surtout utilisé pour faire
référence aux tickets (issue) de Github ou Gitlab par exemple que le commit
règle ou aux changements importants (breaking changes). Celui-ci doit faire
moins de 100 caractères.

exemple:

```
refactor(repository): remove deprecated method
 
BREAKING CHANGE: findById and findByPrimary methods have been removed.
 
Closes #78
```

**Nota**

Contourner les hooks Il est possible de contourner l’utilisation des hooks via
l’option --no-verify de la plupart des commandes git, n’hésitez pas à aller lire
la documentation de chacune des commandes pour en savoir plus.
