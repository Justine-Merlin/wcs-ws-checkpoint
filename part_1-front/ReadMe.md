## Partie 1 : Frontend

Crée un nouveau projet React Typescript avec create react app.

Tu vas consommer une API GraphQL qui fournit des informations sur un pays : https://countries.nausicaa.wilders.dev/

- La query continents fournit une liste de continents avec un code et un nom (ex : {code:"EU", name:"Europe"})

- La query continent prend un code de continent en paramètre et retourne une liste de pays

- La query country prend un code de pays en paramètre et retourne le nom, la capitale, la monnaie et le drapeau du pays

Pour réaliser ce projet, tu peux si tu le souhaites utiliser https://reactrouter.com/en/main pour la gestion des routes en local ainsi que la biliothèque de composants https://ant.design/

Tu vas devoir développer 3 pages dans ce projet :

- Une page qui affiche la liste des continents dans une grille cliquable

- Une page qui affiche la liste des pays cliquables du continent sur lequel on a précédemment cliqué

- Une page qui affiche les détails du pays sur lequel on vient de cliquer

Bonus :

- Les pages affichant une liste contiennent un champ de texte permettant de filtrer les éléments
