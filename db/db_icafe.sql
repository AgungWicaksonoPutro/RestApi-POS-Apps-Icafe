-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 24, 2020 at 08:48 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_icafe`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `idCategory` int(11) NOT NULL,
  `categoryName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`idCategory`, `categoryName`) VALUES
(1, 'Drink'),
(4, 'Food');

-- --------------------------------------------------------

--
-- Table structure for table `employes`
--

CREATE TABLE `employes` (
  `idEmploye` int(10) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updateAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `idHistory` int(11) NOT NULL,
  `invoices` varchar(254) NOT NULL,
  `idEmploye` int(10) NOT NULL,
  `orders` varchar(254) NOT NULL,
  `amounts` int(20) NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updateAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `idProduct` int(11) NOT NULL,
  `nameProduct` varchar(50) NOT NULL,
  `stockProduct` int(5) NOT NULL,
  `descriptionProduct` text NOT NULL,
  `priceProduct` int(20) NOT NULL,
  `imageProduct` varchar(256) NOT NULL,
  `idCategory` int(11) NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updateAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`idProduct`, `nameProduct`, `stockProduct`, `descriptionProduct`, `priceProduct`, `imageProduct`, `idCategory`, `createAt`, `updateAt`) VALUES
(18, 'ABC', 1, 'fhbvjsvjhsbkvbskfvbkhsbvkj', 3784225, 'iknkjbv.com', 1, '2020-08-23 14:28:58', '2020-08-23 14:28:58'),
(23, 'djdfh', 1, ' vbsfbvhfsbvskjv ks', 3456, 'http://localhost:3000/uploads/1598234804460Komplain.jpg', 1, '2020-08-24 02:06:44', '2020-08-24 02:06:44'),
(24, 'Cobaaja', 1, 'nbvdncsmb', 1234567, 'http://localhost:3000/uploads/1598241564493Komplain.jpg', 1, '2020-08-24 03:59:24', '2020-08-24 03:59:24'),
(25, 'Cobaaja', 1, 'nbvdncsmb', 1234567, 'http://localhost:3000/uploads/1598242040020Komplain.jpg', 1, '2020-08-24 04:07:20', '2020-08-24 04:07:20');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `idUser` int(11) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(64) NOT NULL,
  `roleId` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`idUser`, `firstName`, `lastName`, `email`, `password`, `roleId`, `createdAt`, `updatedAt`) VALUES
(3, 'Agung', 'Wicaksono', 'agungwicaksono@gmail.com', '$2a$10$NO0vrAOIxEQMxPq2Snz.4.CQZKP/DuvpqYXTS6o7mQsrZ4kcTJyGG', 1, '2020-08-23 18:34:04', '2020-08-23 18:34:04'),
(5, 'Wicaksono', 'Putro', 'wicaksono@gmail.com', '$2a$10$WoQQ/HMG.wnHO/IoPffMSeR/7FfE/chLsxkXpqMm4mTh75wnTLLq.', 2, '2020-08-24 05:07:48', '2020-08-24 05:07:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`idCategory`);

--
-- Indexes for table `employes`
--
ALTER TABLE `employes`
  ADD PRIMARY KEY (`idEmploye`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`idHistory`),
  ADD KEY `idEmploye` (`idEmploye`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`idProduct`),
  ADD KEY `idCategory` (`idCategory`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `idCategory` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `idHistory` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `idProduct` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `fk-idEmploye-idEmploye` FOREIGN KEY (`idEmploye`) REFERENCES `employes` (`idEmploye`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `fk-idCategory-category` FOREIGN KEY (`idCategory`) REFERENCES `category` (`idCategory`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
