-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: sql211.infinityfree.com
-- Tempo de geração: 12/04/2024 às 16:35
-- Versão do servidor: 10.4.17-MariaDB
-- Versão do PHP: 7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `if0_36067284_mylove`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `cadastro`
--

CREATE TABLE `cadastro` (
  `idcadastro` int(11) NOT NULL,
  `user_name` varchar(20) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `cel` varchar(20) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `color_fav` varchar(10) DEFAULT NULL,
  `food_fav` varchar(45) DEFAULT NULL,
  `hobby` varchar(100) DEFAULT NULL,
  `love_number` int(11) DEFAULT NULL,
  `love_me` varchar(5) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `cadastro`
--

INSERT INTO `cadastro` (`idcadastro`, `user_name`, `name`, `email`, `cel`, `birth_date`, `age`, `address`, `color_fav`, `food_fav`, `hobby`, `love_number`, `love_me`, `password`) VALUES
(1, 'Gustavo-Sander', 'Gustavo Henrique Sander', 'gustavosander2006@gmail.com', '+55 (51) 99936-0949', '2006-05-05', 17, 'Cohab Leste, Campo Bom, RS', '#0011fa', 'Lasanha e docinho ', 'Ler, escutar música, treinar e ficar com meu amor.', 1000, 'much', '@Iservice1'),
(2, 'Ana-Thiesen', 'Ana Clara Thiesen', 'thieanaclara@gmail.com', '+55 (51) 99535-5910', '2007-09-19', 16, 'Colina Deuner, Campo Bom, RS', '#ff0088', 'Sushi', 'Escutar música, estudar, treinar na academia, fazer receita, ficar com meu namorado.', -8, 'no', '@AnaThiesen1');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `cadastro`
--
ALTER TABLE `cadastro`
  ADD PRIMARY KEY (`idcadastro`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `cadastro`
--
ALTER TABLE `cadastro`
  MODIFY `idcadastro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
