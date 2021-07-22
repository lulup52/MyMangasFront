-- source C:/wamp/www/MyMangas/todofront/src/bddSQL/myMangaBDD.sql;

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


INSERT INTO serie (title, nbr_of_tome, ilustration, author, sumary )
VALUES 
('Naruto',
 50,
 "https://www.betanews.fr/wp-content/uploads/2020/08/Date-de-sortie-prevue-de-la-serie-Naruto-distribution-intrigue.jpg",
  "Masashi Kishimoto",
  "Naruto Uzumaki est un jeune adolescent orphelin et turbulent. Il passe son temps  essayer de se faire remarquer en inventant des idioties toujours plus farfelues. Loin d’tre un ve brillant en cours ninja, cela ne l’empche pas de clamer haut et fort qu’il sera hokage (un chef du village) du village de Konoha"
),
('Boruto',
 50,
 "https://fr.web.img5.acsta.net/pictures/19/08/07/16/44/5650179.jpg",
  "Masashi Kishimoto",
  "C'est juste le fils de naruto"
),
('My Hero Academia',
 28,
 "https://image.animedigitalnetwork.fr/license/mha/tv/web/affiche_600x856.jpg",
  "Kohei Horikoshi",
  "Dans un monde ou 80 % de la population mondiale possede des super-pouvoirs, ici nommes Alters , n'importe qui peut devenir un heros ou, s'il le souhaite, un criminel. Le manga suit les aventures de Izuku Midoriya, dit Deku , l'un des rares humains ne possedant pas d'Alter, qui reve pourtant de rejoindre la filiere super-heroique de la grande academie Yuei et de devenir un jour un des plus grands heros de son epoque, a l'image de son heros, All Might. Un jour, il a la chance de rencontrer son idole et celui-ci va lui donner une chose dont il ne croyait jamais pouvoir beneficier."
)
;


INSERT INTO tome (serie_id, serie_title, ilustration, subtitle, num_tome, tome_sumary )
VALUES

(1, 
"Naruto",
"https://m.media-amazon.com/images/I/61oZGoXJo1L.jpg",
"le petit ninja",
1,
"Naruto galere a l'ecole et il lui arrive de petite peripeties."
),
(1, 
"Naruto",
"https://images-na.ssl-images-amazon.com/images/I/91FxLoh8EuL.jpg",
"on rencontre les copain",
2,
"Naruto galere galere toujours et vit toujours plus de peripeties mais se fait de nouveaux amis."
),
(1, 
"Naruto",
"https://images-na.ssl-images-amazon.com/images/I/711QaUsMZfL.jpg",
"premier chalenge",
3,
"Les premieres epruves commence et naruto et ses amis vont avoir du mal a les passer"
),
(2, 
"boruto",
"https://images-na.ssl-images-amazon.com/images/I/91F2tqPYZ3L.jpg",
"debut des aventures",
1,
"Boruto galere a l'ecole et il lui arrive de petite peripeties."
),
(2, 
"boruto",
"https://images-na.ssl-images-amazon.com/images/I/71iHBQnLrVL.jpg",
"la suite des aventures",
2,
"Boruto galere galere toujours et vit toujours plus de peripeties mais se fait de nouveaux amis."
),
(2, 
"boruto",
"https://static.fnac-static.com/multimedia/Images/FR/NR/71/f6/88/8975985/1507-1/tsp20210301161441/Boruto-Naruto-next-generations-Tome-3.jpg",
"la fin des aventures",
3,
"Les professeurs comprenent que boruto est doue et l'accompagne dans son entrainement"
),
(3, 
"My Hero Academia",
"https://images-na.ssl-images-amazon.com/images/I/71qTqgt7LvL.jpg",
"Izuku Midoria : les origines",
1,
"Izuku n'apas de pouvoir et recontre all-might qui lui en donne"
),
(3, 
"My Hero Academia",
"https://images-na.ssl-images-amazon.com/images/I/71ZzczktUgL.jpg",
"Dechaine toi maudit nerds",
2,
"Izuku passe les examens d'entree pour les admissions de yuei "
),
(3, 
"My Hero Academia",
"https://static.fnac-static.com/multimedia/Images/FR/NR/29/30/78/7876649/1540-1/tsp20170322154946/My-Hero-Academia.jpg",
"All Might",
3,
"l'entrainement de Izuku debute et c'est All Might qui va s'en charger"
)
;


INSERT INTO collection (user_id, tome_id )
VALUES 
(1,1),
(1,2),
(1,3),
(1,4),
(1,5),

(2,1),
(2,2),
(2,3),

(3,4),
(3,7),
(3,8),
(3,9)
;

INSERT INTO lecture (user_id, tome_id )
 VALUES 
(1,1),
(1,2),
(1,3),
(1,4),
(1,5),

(2,1),
(2,2),
(2,3),

(3,4),
(3,7),
(3,8),
(3,9)
;
