# DWM10_consommerUneApi

- Lien de l'api : https://developer.riotgames.com/

#### J'ai choisi une api différente de celles qui sont proposées car aucune des api ne m'inspiraient et je souhaitais utiliser l'authentification avec une apiKey.


## Caractéristiques de l'application :

- Liste de champions
- Affichage des informations d'un champion sélectionné

#### L'application propose la liste complète des champions lorsque l'on clique sur le bouton. Afin d'économiser les requêtes, j'ai choisi de mettre le contenu de ma requête dans le localStorage. Si l'on clique sur le nom d'un des champions, une autre requête est faite pour récupérer les informations du champion et j'ai choisi d'en afficher certaines.

## Difficultés rencontrées :

#### J'ai mis 1h30 à choisir une api car je m'entêtais à tenter d'utiliser une des api proposées. L'api n'était pas simple à comprendre et à faire fonctionner mais une fois passé la découverte de l'api j'étais finalement à l'aise pour rechercher les informations que je voulais.
#### J'ai eu des difficultés à comprendre la façon dont je pouvais récupérer les images, je n'ai d'ailleurs pas l'autorisation de récupérer certaines images.
#### J'ai laissé en commentaire le code servant à récupérer l'image du passif car, si hier je pouvais encore accéder à ces images, aujourd'hui ce n'est pus possible, même lorsque je faisais le test sur leur site, alors qu'hier cela fonctionnait aussi via le site.
#### Vers 10h30 ce vendredi, j'ai commencé à mettre en place le css sur le navigateur pour éviter de faire des requêtes car l'api m'a souvent bloquée par des "too many requests". A 11h, au moment où je commençais à mettre mes modifications css du navigateur sur mon style.css, une coupure de courant est survenue et mon api refusait mes requêtes pendant 20min.
#### J'ai mis 1h30 à choisir une api car je m'entêtais à tenter d'utiliser une des api proposées. L'api n'était pas simple à comprendre et à faire fonctionner mais une fois passé la découverte de l'api j'étais finalement à l'aise pour rechercher les informations que je voulais.Vers 10h30 ce vendredi, j'ai commencé à mettre en place le css sur le navigateur pour éviter de faire des requêtes car l'api m'a souvent bloquée par des "too many requests". A 11h, au moment où je commençais à mettre mes modifications css du navigateur sur mon style.css, une coupure de courant est survenue et mon api refusait mes requêtes pendant 20min.
#### J'ai souhaité organiser mon code en créant une fonction qui récupère et affiche les informations du champion, seulement j'ai manqué de temps.
