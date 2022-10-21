-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Client :  sqletud.u-pem.fr
-- Généré le :  Lun 07 Juin 2021 à 00:23
-- Version du serveur :  5.5.62-0+deb8u1-log
-- Version de PHP :  7.0.33-0+deb9u7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `lnguye23_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `pt_contact`
--

CREATE TABLE `pt_contact` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `objet` text NOT NULL,
  `message` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `pt_contact`
--

INSERT INTO `pt_contact` (`id`, `email`, `objet`, `message`, `date`) VALUES
(0, 'danie.lancea28@gmail.com', 'waouh', 'mais le projet est trop bien ça doit être une équipe de génies!!!\n', '2021-06-06 13:01:00');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `pt_contact`
--
ALTER TABLE `pt_contact`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `pt_contact`
--
ALTER TABLE `pt_contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
