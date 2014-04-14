-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Serveur: localhost
-- Généré le : Lun 07 Avril 2014 à 12:42
-- Version du serveur: 5.5.8
-- Version de PHP: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `jeux`
--
CREATE DATABASE `jeux` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `jeux`;

-- --------------------------------------------------------

--
-- Structure de la table `joueur`
--

CREATE TABLE IF NOT EXISTS `joueur` (
  `pseudo` varchar(30) NOT NULL,
  `ville` varchar(30) NOT NULL,
  `mail` varchar(30) NOT NULL,
  `sexe` varchar(30) NOT NULL,
  `pays` varchar(30) NOT NULL,
  `score` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `joueur`
--

INSERT INTO `joueur` (`pseudo`, `ville`, `mail`, `sexe`, `pays`, `score`) VALUES
('mer', 'VANNES', 'm@f.com', 'femme', 'FRANCE', 100),
('a', 'abc', 'a@b.fr', 'homme', 'FRANCE', 200),
('zadvfe', 've', 'eafe', 'femme', 'France', 0),
('zadvfe', 've', '', 'femme', 'France', 0),
('zadvfe', 've', 'mar@gmail.com', 'femme', 'France', 0),
('efr', 'efr', 'ef', 'femme', 'France', 0),
('efr', 'efr', 'ef', 'femme', 'France', 0);
