-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: blog
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- -----------------------------------------------------
-- Schema blog
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `blog` DEFAULT CHARACTER SET utf8 ;
USE `blog` ;


--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idcategories_UNIQUE` (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (4,'Достопримечательности'),(2,'Культура'),(1,'Путешествия'),(5,'События'),(3,'Языки');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `markers`
--

DROP TABLE IF EXISTS `markers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `markers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `latitude` float NOT NULL,
  `longtitude` float NOT NULL,
  `text` varchar(100) DEFAULT NULL,
  `post_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idmarks_UNIQUE` (`id`),
  KEY `fk_mark_posts1_idx` (`post_id`),
  CONSTRAINT `fk_mark_posts1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `markers`
--

LOCK TABLES `markers` WRITE;
/*!40000 ALTER TABLE `markers` DISABLE KEYS */;
/*!40000 ALTER TABLE `markers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `moments`
--

DROP TABLE IF EXISTS `moments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `moments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `text` varchar(300) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `author_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idmoments_UNIQUE` (`id`),
  KEY `fk_moments_users1_idx` (`author_id`),
  CONSTRAINT `fk_moments_users1` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moments`
--

LOCK TABLES `moments` WRITE;
/*!40000 ALTER TABLE `moments` DISABLE KEYS */;
/*!40000 ALTER TABLE `moments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `desc` varchar(10000) NOT NULL,
  `img` varchar(255) NOT NULL,
  `date` datetime DEFAULT NULL,
  `uid` int NOT NULL,
  `cat` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_posts_users_idx` (`uid`),
  CONSTRAINT `fk_posts_users` FOREIGN KEY (`uid`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES 
(1,'Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.','https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80','2008-10-23 10:37:22',1,'travel'),
(2,'Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.','https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80','2008-10-23 10:37:22',1,'travel'),
(3,'Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.','https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80','2008-10-23 10:37:22',1,'travel'),
(4,'Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.','https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80','2008-10-23 10:37:22',1,'travel'),
(5,'Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.','https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80','2008-10-23 10:37:22',1,'travel'),
(36,'Post without photo','<p>Post without photo description</p>','http://imageipsum.com/1200x675','2023-06-06 18:11:57',3,''),
(37,'Test post for all markdown text features','<p>normal</p><h2>heading2</h2><h1>heading1</h1><p><strong>bold</strong></p><p><strong><em>italic</em></strong></p><p><strong><em><u>underlined</u></em></strong></p><p class=\"ql-indent-1\"><br></p>','http://imageipsum.com/1200x675','2023-06-06 18:27:28',3,'traveling'),
(40,'Заголовок с русским текстом','<p>Как выглядит русский текст в статьях</p><p><strong>Жирный</strong></p><p><strong><em>Курсив</em></strong></p><p><strong><em><u>Подчёркнутый</u></em></strong></p><p><strong><em><s><u>Зачёркнутый</u></s></em></strong></p>','http://imageipsum.com/1200x675','2023-06-06 20:34:03',3,'culture');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts_analytics`
--

DROP TABLE IF EXISTS `posts_analytics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts_analytics` (
  `id` int NOT NULL AUTO_INCREMENT,
  `views` int NOT NULL,
  `stars` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idanalytics_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts_analytics`
--

LOCK TABLES `posts_analytics` WRITE;
/*!40000 ALTER TABLE `posts_analytics` DISABLE KEYS */;
/*!40000 ALTER TABLE `posts_analytics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts_comments`
--

DROP TABLE IF EXISTS `posts_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts_comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `text` varchar(255) DEFAULT NULL,
  `posts_id` int NOT NULL,
  `author_id` int NOT NULL,
  `reply` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idcomments_UNIQUE` (`id`),
  KEY `fk_comments_posts1_idx` (`posts_id`),
  KEY `fk_comments_users1_idx` (`author_id`),
  KEY `fk_comments_comments1_idx` (`reply`),
  CONSTRAINT `fk_comments_comments1` FOREIGN KEY (`reply`) REFERENCES `posts_comments` (`id`),
  CONSTRAINT `fk_comments_posts1` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`),
  CONSTRAINT `fk_comments_users1` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts_comments`
--

LOCK TABLES `posts_comments` WRITE;
/*!40000 ALTER TABLE `posts_comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `posts_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts_has_categories`
--

DROP TABLE IF EXISTS `posts_has_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts_has_categories` (
  `posts_id` int NOT NULL,
  `categories_id` int NOT NULL,
  PRIMARY KEY (`posts_id`,`categories_id`),
  KEY `fk_posts_has_categories_categories1_idx` (`categories_id`),
  KEY `fk_posts_has_categories_posts1_idx` (`posts_id`),
  CONSTRAINT `fk_posts_has_categories_categories1` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `fk_posts_has_categories_posts1` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts_has_categories`
--

LOCK TABLES `posts_has_categories` WRITE;
/*!40000 ALTER TABLE `posts_has_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `posts_has_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES 
(1,'John','test','$2a$10$EmSFrcXQm1nLSehew0Xp/.yfForSxBwLOns3qJORH6pVD.qjMigQC','https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80'),
(2,'Petro','test2','$2a$10$EmSFrcXQm1nLSehew0Xp/.yfForSxBwLOns3qJORH6pVD.qjMigQC','https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'),
(3,'Alexander','test3','$2a$10$EmSFrcXQm1nLSehew0Xp/.yfForSxBwLOns3qJORH6pVD.qjMigQC','https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'),
(4,'Mikhail','test5','$2a$10$K8sf4Nw6Ju.A9GNAeTWxUOyoh/FTddd/pXmu04lGOnXAd3o8Gwcb2',NULL),
(5,'Arthur','test@gmail.com','$2a$10$EOwcBrUPRc52DuG4EECQ6eYjAHJ4Zk756tlXcHCbgGdaR0/XENsie',NULL),
(8,'Olga','testtest','$2a$10$SExESrRwdooHH1vhXdqDzONnSLwpUXe7F0nHC7k8r1SjiE3Jj.rRW',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- 
