-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 01-Dez-2021 às 00:28
-- Versão do servidor: 10.4.22-MariaDB
-- versão do PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `universidade`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cadastroprofessores`
--

CREATE TABLE `cadastroprofessores` (
  `chapaProfessor` varchar(8) NOT NULL,
  `nomeProfessor` varchar(45) NOT NULL,
  `salarioProfessor` float NOT NULL,
  `titulaçaoProfessor` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `cadastroprofessores`
--

INSERT INTO `cadastroprofessores` (`chapaProfessor`, `nomeProfessor`, `salarioProfessor`, `titulaçaoProfessor`) VALUES
('pk0000', 'Paulo Santos', 3000, 'Me.'),
('pk0001', 'Maria Aparecida da Silva', 3500, 'Me.'),
('pk0002', 'Thiago Vieira da Silva', 5600, 'Dr.'),
('pk0003', 'Claudia Santos Silva', 2900, 'Dr.'),
('pk0004', 'Aparecida da Silva', 3400, 'Me.'),
('pk0005', 'Maiara Borges de Jesus', 4564, 'Dr.'),
('pk0006', 'Matheus Borges de Santos', 3453, 'Dr.'),
('pk0007', 'Fernando Lopes Ferreira', 7896, 'Me.'),
('pk0008', 'Diego Sanches Silva', 1200, 'Bel.'),
('pk0009', 'Bruna Nascimento', 3500, 'Me.'),
('pk0010', 'Emersom Prado Santos', 4000, 'Dr.');

-- --------------------------------------------------------

--
-- Estrutura da tabela `horariosprofessores`
--

CREATE TABLE `horariosprofessores` (
  `chapaProfessor` varchar(8) NOT NULL,
  `nomeProfessor` varchar(45) NOT NULL,
  `segundaM` varchar(45) DEFAULT NULL,
  `segundaN` varchar(45) DEFAULT NULL,
  `terçaM` varchar(45) DEFAULT NULL,
  `terçaN` varchar(45) DEFAULT NULL,
  `quartaM` varchar(45) DEFAULT NULL,
  `quartaN` varchar(45) DEFAULT NULL,
  `quintaM` varchar(45) DEFAULT NULL,
  `quintaN` varchar(45) DEFAULT NULL,
  `sextaM` varchar(45) DEFAULT NULL,
  `sextaN` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `horariosprofessores`
--

INSERT INTO `horariosprofessores` (`chapaProfessor`, `nomeProfessor`, `segundaM`, `segundaN`, `terçaM`, `terçaN`, `quartaM`, `quartaN`, `quintaM`, `quintaN`, `sextaM`, `sextaN`) VALUES
('pk0000', 'Paulo Santos', 'Sistemas Operacionais', 'Programação web', 'Programação web', '', 'Programação web', 'Sistemas Operacionais', '', 'Programação web', '', 'Sistemas Operacionais'),
('pk0001', 'Maria Aparecida da Silva', 'Engenharia de Software', 'Complexidade de Algoritmos', 'POO', 'Engenharia de Software', '', 'Complexidade de Algoritmos', 'POO', '', 'Engenharia de Software', 'POO'),
('pk0002', 'Thiago Vieira da Silva', 'Sistemas Operacionais', 'Estrutura de dados', '', 'Redes de computadores', 'Estrutura de dados', '', 'Redes de computadores', 'Estrutura de dados', 'Redes de computadores', 'Estrutura de dados'),
('pk0003', 'Claudia Santos Silva', 'POO', '', '', 'ADS', 'Engenharia de Software', 'POO', 'Complexidade de Algoritmos', 'Algoritmos', 'Programação Web', ''),
('pk0004', 'Aparecida da Silva', 'Sistemas Operacionais', '', 'Programação web', 'Redes de computadores', '', 'Complexidade de Algoritmos', 'POO', '', 'Engenharia de Software', 'Estrutura de dados'),
('pk0005', 'Maiara Borges de Jesus', 'Engenharia de Software', 'Estrutura de dados', '', 'Redes de computadores', 'Programação web', 'Complexidade de Algoritmos', '', 'Programação web', 'Redes de computadores', 'POO'),
('pk0006', 'Matheus Borges de Santos', 'Logica de Programação', '', 'Programação web', '', 'Estrutura de dados', 'Logica de Programação', 'POO', '', 'Redes de computadores', 'Logica de Programação'),
('pk0007', 'Fernando Lopes Ferreira', 'Logica de Programação', 'Estrutura de dados', 'POO', 'Engenharia de Software', 'Programação web', 'Sistemas Operacionais', 'Redes de computadores', 'Estrutura de dados', 'Redes de computadores', 'POO'),
('pk0008', 'Diego Sanches Silva', 'POO', 'Sistemas Operacionais', 'Analise de Sistemas', 'ADS', 'Engenharia de Software', 'POO', 'Complexidade de Algoritmos', '', '', 'POO'),
('pk0009', 'Bruna Nascimento', '', 'Sistemas Operacionais', 'Analise de Sistemas', '', '', 'POO', 'Complexidade de Algoritmos', 'Algoritmos', 'Programação Web', 'POO'),
('pk0010', 'Emersom Prado Santos', 'POO', '', 'Analise de Sistemas', 'ADS', '', 'POO', 'Complexidade de Algoritmos', 'Algoritmos', 'Programação Web', '');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `cadastroprofessores`
--
ALTER TABLE `cadastroprofessores`
  ADD PRIMARY KEY (`chapaProfessor`);

--
-- Índices para tabela `horariosprofessores`
--
ALTER TABLE `horariosprofessores`
  ADD PRIMARY KEY (`chapaProfessor`),
  ADD KEY `chapaProfessor` (`chapaProfessor`);

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `horariosprofessores`
--
ALTER TABLE `horariosprofessores`
  ADD CONSTRAINT `horariosprofessores_ibfk_1` FOREIGN KEY (`chapaProfessor`) REFERENCES `cadastroprofessores` (`chapaProfessor`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
