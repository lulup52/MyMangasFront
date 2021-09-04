-- source C:/wamp/www/MyMangas/MyMangasFront/src/bddSQL/myMangaBDD.sql;

DROP DATABASE my_mangas;
CREATE DATABASE my_mangas;
USE my_mangas;

CREATE TABLE `user`
(
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `user_name` VARCHAR(100) NOT NULL,
    `pass` VARCHAR(100) NOT NULL
)engine=innodb;

CREATE TABLE `serie`
(
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `nbr_of_tome` INT,
    `ilustration` VARCHAR(500),
    `author` VARCHAR(150),
    `sumary` VARCHAR(750)
)engine=innodb;

CREATE TABLE `tome`
(
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `serie_id` INT NOT NULL,
    `serie_title` VARCHAR(100) ,
    CONSTRAINT fk_tome_serie FOREIGN KEY (serie_id) REFERENCES serie (id),
    `ilustration` VARCHAR(500),
    `subtitle` VARCHAR(100) ,
    `num_tome` INT,
    `tome_sumary` VARCHAR(750)
)engine=innodb;


CREATE TABLE `collection`
(
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `tome_id` INT,
    `user_id` INT,
    CONSTRAINT fk_colection_tome FOREIGN KEY (tome_id) REFERENCES tome (id),
    CONSTRAINT fk_colection_user FOREIGN KEY (user_id) REFERENCES user (id)
)engine=innodb;

CREATE TABLE `lecture`
(
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `tome_id` INT,
    `user_id` INT,
    CONSTRAINT fk_lecture_tome FOREIGN KEY (tome_id) REFERENCES tome (id),
    CONSTRAINT fk_lecture_user FOREIGN KEY (user_id) REFERENCES user (id)

)engine=innodb;


INSERT INTO user (user_name, pass)
VALUES 
('lucas', '0000'),
('bob', '1111'),
('toto', '2222');


INSERT INTO serie (id, title, nbr_of_tome, ilustration, author, sumary )
VALUES 

(1,
'Naruto',
 50,
 "https://www.betanews.fr/wp-content/uploads/2020/08/Date-de-sortie-prevue-de-la-serie-Naruto-distribution-intrigue.jpg",
  "Masashi Kishimoto",
  "Naruto Uzumaki est un jeune adolescent orphelin et turbulent. Il passe son temps  essayer de se faire remarquer en inventant des idioties toujours plus farfelues. Loin d’tre un ve brillant en cours ninja, cela ne l’empche pas de clamer haut et fort qu’il sera hokage (un chef du village) du village de Konoha"
),
(2,
'Boruto',
 50,
 "https://fr.web.img5.acsta.net/pictures/19/08/07/16/44/5650179.jpg",
  "Masashi Kishimoto",
  "C'est juste le fils de naruto"
),
(3,
'My Hero Academia',
 28,
 "https://image.animedigitalnetwork.fr/license/mha/tv/web/affiche_600x856.jpg",
  "Kohei Horikoshi",
  "Dans un monde ou 80 % de la population mondiale possede des super-pouvoirs, ici nommes Alters , n'importe qui peut devenir un heros ou, s'il le souhaite, un criminel. Le manga suit les aventures de Izuku Midoriya, dit Deku , l'un des rares humains ne possedant pas d'Alter, qui reve pourtant de rejoindre la filiere super-heroique de la grande academie Yuei et de devenir un jour un des plus grands heros de son epoque, a l'image de son heros, All Might. Un jour, il a la chance de rencontrer son idole et celui-ci va lui donner une chose dont il ne croyait jamais pouvoir beneficier."
),
(4,
'D.Gray-Man',
 27,
 "https://www.nautiljon.com/images/anime/00/99/d_gray-man_199.jpg",
  "Katsura hoshino",
  "Vers la fin d'un 19e siecle imaginaire et particulierement gothique, le jeune Allen Walker est un exorciste appartenant a un ordre special appele Congregation de l'Ombre. Pour mener a bien ce combat, les exorcistes disposent chacun d'une Innocence, sorte d'arme personnelle fantastique extremement rare"
)
;


INSERT INTO tome (id,serie_id, serie_title, ilustration, subtitle, num_tome, tome_sumary )
VALUES

(1,
1, 
"Naruto",
"https://m.media-amazon.com/images/I/61oZGoXJo1L.jpg",
"le petit ninja",
1,
"Naruto galere a l'ecole et il lui arrive de petite peripeties."
),
(2,
1, 
"Naruto",
"https://images-na.ssl-images-amazon.com/images/I/91FxLoh8EuL.jpg",
"on rencontre les copain",
2,
"Naruto galere galere toujours et vit toujours plus de peripeties mais se fait de nouveaux amis."
),
(3,
1, 
"Naruto",
"https://images-na.ssl-images-amazon.com/images/I/711QaUsMZfL.jpg",
"premier chalenge",
3,
"Les premieres epruves commence et naruto et ses amis vont avoir du mal a les passer"
),
(4,
1, 
"Naruto",
"https://images-na.ssl-images-amazon.com/images/I/91woCMb8RHL.jpg",
"naruto va vivre le tome 4 ",
4,
"ceci est un resume aleatoire pour le tome 4 de naruto"
),
(5,
1, 
"Naruto",
"https://images-na.ssl-images-amazon.com/images/I/81b9177wDTL.jpg",
"naruto va vivre le tome 5",
5,
"Ceci 5 est un resume aleatoire pour le tome 5 de naruto"
),
(6,
2, 
"boruto",
"https://images-na.ssl-images-amazon.com/images/I/91F2tqPYZ3L.jpg",
"debut des aventures",
1,
"Boruto galere a l'ecole et il lui arrive de petite peripeties."
),
(7,
2, 
"boruto",
"https://images-na.ssl-images-amazon.com/images/I/71iHBQnLrVL.jpg",
"la suite des aventures",
2,
"Boruto galere galere toujours et vit toujours plus de peripeties mais se fait de nouveaux amis."
),
(8,
2, 
"boruto",
"https://static.fnac-static.com/multimedia/Images/FR/NR/71/f6/88/8975985/1507-1/tsp20210301161441/Boruto-Naruto-next-generations-Tome-3.jpg",
"la fin des aventures",
3,
"Les professeurs comprenent que boruto est doue et l'accompagne dans son entrainement"
),
(9,
2, 
"boruto",
"https://static.fnac-static.com/multimedia/Images/FR/NR/be/c8/8b/9160894/1540-1/tsp20210301164714/Boruto-Naruto-next-generations-Tome-4.jpg",
"sous titre du tome 4",
4,
"ceci est le resume du tome 4 de boruto et sert de test"
),
(10,
2, 
"boruto",
"https://static.fnac-static.com/multimedia/Images/FR/NR/1e/b9/94/9746718/1507-1/tsp20210301164714/Boruto-Naruto-next-generations-Tome-5.jpg",
"sous ti5tre du5 tome 5",
4,
"cec5i est le res5ume du tome 5 de boruto et 5sert de test"
),
(11,
3, 
"My Hero Academia",
"https://images-na.ssl-images-amazon.com/images/I/71qTqgt7LvL.jpg",
"Izuku Midoria : les origines",
1,
"Izuku n'a pas de pouvoir et recontre all-might qui lui en donne"
),
(12,
3, 
"My Hero Academia",
"https://images-na.ssl-images-amazon.com/images/I/71ZzczktUgL.jpg",
"Dechaine toi maudit nerds",
2,
"Izuku passe les examens d'entree pour les admissions de yuei "
),
(13,
3, 
"My Hero Academia",
"https://static.fnac-static.com/multimedia/Images/FR/NR/29/30/78/7876649/1540-1/tsp20170322154946/My-Hero-Academia.jpg",
"All Might",
3,
"l'entrainement de Izuku debute et c'est All Might qui va s'en charger"
),
(14,
4, 
"D.Gray-man",
"https://static.fnac-static.com/multimedia/FR/Images_Produits/FR/fnac.com/Visual_Principal_340/8/4/8/9782723455848/tsp20121012172717/Prologue.jpg",
"Prologue",
1,
"Akuma, arme de guerre malefique concue a base de pieces mecaniques, d’ame et de tragedie.
Allen Walker, jeune exorciste marque d’une croix divine a la main gauche, part en croisade contre le Comte millenaire, faiseur d’akuma et partisan de la fin du monde."
),
(15,
4, 
"D.Gray-man",
"https://www.glenat.com/sites/default/files/images/livres/couv/9782723492430-T.jpg",
"Le vieil homme et l'aria d'un soir de solitude",
2,
"Un fantome hante l'antique cite de Matera, desertee depuis des siecles par ses habitants. Allen et Kanda, tous deux depeches sur les lieux, vont y faire une etrange rencontre… Il leur faudra une fois encore combattre les akuma pour proteger l'innocence !"
),
(16,
4, 
"D.Gray-man",
"https://www.glenat.com/sites/default/files/images/livres/couv/9782723492447-T.jpg",
"un jour sans fin",
3,
"Une force mysterieuse empeche les traqueurs de la Congregation d'y penerer… Allen et Lenalee sont envoyes sur place pour enqueter sur la cause de ce phenomene etrange. Des ennemis plus puissants que jamais les y attendent… Qui sont ces “descendants de Noe”, qui se proclament les veritables “apotres de Dieu” ?"
),
(17,
4, 
"D.Gray-man",
"https://www.glenat.com/sites/default/files/images/livres/couv/9782723492454-T.jpg",
"Les marechaux en perils",
4,
"L'oeil gauche creve par Road Kamelot, membre du mysterieux “clan Noe”, Allen erre en ville, des questions plein la tete. Alors qu'il est en route pour sa prochaine mission, son voyage est interrompu par un homme en detresse : son village serait la proie d'un vampire !"
),
(18,
4, 
"D.Gray-man",
"https://www.glenat.com/sites/default/files/images/livres/couv/9782723492461-001-T.jpeg",
"Premonitions",
5,
"L'oeil gauche d'Allen se retablit et devoile la veritable nature d'Eliade. Krory, de son cote, comprend enfin qui il est. La chasse au “coeur”, de plus en plus violente, va causer de graves pertes dans les rangs de la Congregation…"
)
;


INSERT INTO collection (user_id, tome_id )
VALUES 
(1,1),
(1,2),
(1,3),
(1,4),
(1,5),
(1,14),
(1,15),
(1,16),
(1,17),
(1,18),

(2,7),
(2,8),
(2,9),

(3,10),
(3,11),
(3,12),
(3,13),
(3,14),
(3,15),
(3,16),
(3,17)
;

INSERT INTO lecture (user_id, tome_id )
 VALUES 

(1,18),

(2,1),
(2,2),
(2,8),

(3,4),
(3,7),
(3,8),
(3,9)
;
