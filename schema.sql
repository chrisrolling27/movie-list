-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'movies'
--
-- ---

USE movies;

DROP TABLE IF EXISTS `movies`;

CREATE TABLE `movies` (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL
);

ALTER TABLE `movies` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `movies` (`id`,`title`) VALUES
(1,'Gladiator');