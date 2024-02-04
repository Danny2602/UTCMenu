-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: utcmenu
-- ------------------------------------------------------
-- Server version	8.0.35

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

--
-- Table structure for table `administradores`
--

DROP TABLE IF EXISTS `administradores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administradores` (
  `id_ad` varchar(10) NOT NULL,
  `nombre_ad` varchar(50) DEFAULT NULL,
  `correo_ad` varchar(50) DEFAULT NULL,
  `fono_ad` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id_ad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administradores`
--

LOCK TABLES `administradores` WRITE;
/*!40000 ALTER TABLE `administradores` DISABLE KEYS */;
INSERT INTO `administradores` VALUES ('1','danny','danny.simba','0995878111');
/*!40000 ALTER TABLE `administradores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `id_com` int NOT NULL AUTO_INCREMENT,
  `desc_com` varchar(100) DEFAULT NULL,
  `fecha_com` varchar(100) DEFAULT NULL,
  `fkid_res` int NOT NULL,
  `fkid_usu` int NOT NULL,
  PRIMARY KEY (`id_com`),
  KEY `comentarios_ibfk_1` (`fkid_res`),
  KEY `comentarios_ibfk_2` (`fkid_usu`),
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`fkid_res`) REFERENCES `restaurantes` (`id_res`),
  CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`fkid_usu`) REFERENCES `usuarios` (`id_usu`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (2,'descripcion','fecha',33,7),(3,'soledad','cualquiera',32,7),(4,'hola','12',32,7),(5,'hoa','12',32,7),(6,'hoa','12',32,7),(7,'hoa','12',32,7),(8,'todos','12',32,7),(9,'pan','12',32,7),(10,'jaja','12',32,7),(11,'jaja','12',32,7),(12,'jaja','12',32,7),(13,'dato','3/2/2024, 19:44:25',32,7),(14,'hola','3/2/2024, 19:45:54',32,7),(15,'patas','3/2/2024, 19:50:25',32,7),(16,'probemos este','3/2/2024, 19:54:46',33,7),(17,'hola','3/2/2024, 20:28:55',33,7),(18,'que es todo esto funciona si o no talves ','3/2/2024, 20:37:37',33,7),(19,'todo esta bien aqui','3/2/2024, 20:38:54',33,7),(20,'que talllll','3/2/2024, 20:41:24',33,7),(21,'que tal ahora si funciona','3/2/2024, 20:42:36',32,9),(22,'pan apna pan','3/2/2024, 20:43:00',33,9),(23,'1 2 3 4 5 6 7 8 9 10 11','3/2/2024, 20:43:56',32,9);
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estadousuario`
--

DROP TABLE IF EXISTS `estadousuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estadousuario` (
  `id_est` int NOT NULL,
  `est_est` varchar(30) DEFAULT NULL,
  `mot_est` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_est`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estadousuario`
--

LOCK TABLES `estadousuario` WRITE;
/*!40000 ALTER TABLE `estadousuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `estadousuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menus`
--

DROP TABLE IF EXISTS `menus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menus` (
  `id_menu` int NOT NULL AUTO_INCREMENT,
  `platoNom` varchar(50) DEFAULT NULL,
  `platodesc` varchar(100) DEFAULT NULL,
  `platoprec` decimal(4,2) DEFAULT NULL,
  `platoest` varchar(20) DEFAULT NULL,
  `platohora` varchar(45) DEFAULT NULL,
  `fkid_res` int DEFAULT NULL,
  PRIMARY KEY (`id_menu`),
  KEY `menus_ibfk_1` (`fkid_res`),
  CONSTRAINT `menus_ibfk_1` FOREIGN KEY (`fkid_res`) REFERENCES `restaurantes` (`id_res`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menus`
--

LOCK TABLES `menus` WRITE;
/*!40000 ALTER TABLE `menus` DISABLE KEYS */;
INSERT INTO `menus` VALUES (50,'Arroz con carne','Delicioso arroz con carne',1.50,'Activo',NULL,33),(51,'panes con queso','agua',1.75,'Disponible','10:14',32),(52,'pan con agua','nada',0.10,'No Disponible','12:03',32),(53,'helado','de agua',0.50,'12',NULL,33),(56,'seco de pollo','papas con pollo',12.70,'No Disponible','12:03',32),(58,'helados','de miel de pan de helado',13.00,'No Disponible','12:03',32),(59,'hola','helado',12.00,'No Disponible','12:03',32),(60,'12','21',21.00,'Disponible','12:02',32),(61,'pan','queso',12.00,'Disponible','12:02',32),(62,'helados1','sad',12.00,'Disponible','12:12',32),(64,'queso','helado',12.00,'Disponible','12:03',32),(66,'jaja','123',12.00,'Disponible','12:03',32),(69,'veammos si funciona','jaja',12.00,'Disponible','23:12',32);
/*!40000 ALTER TABLE `menus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `miembros`
--

DROP TABLE IF EXISTS `miembros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `miembros` (
  `id_mie` varchar(10) NOT NULL,
  `nom_mie` varchar(30) DEFAULT NULL,
  `contra_mie` varchar(50) DEFAULT NULL,
  `fkid_ad` varchar(10) DEFAULT NULL,
  `fkid_res` int DEFAULT NULL,
  `fkid_usu` int DEFAULT NULL,
  PRIMARY KEY (`id_mie`),
  KEY `fkid_ad` (`fkid_ad`),
  KEY `fkid_usu` (`fkid_usu`),
  KEY `miembros_ibfk_2` (`fkid_res`),
  CONSTRAINT `miembros_ibfk_1` FOREIGN KEY (`fkid_ad`) REFERENCES `administradores` (`id_ad`),
  CONSTRAINT `miembros_ibfk_2` FOREIGN KEY (`fkid_res`) REFERENCES `restaurantes` (`id_res`) ON DELETE CASCADE,
  CONSTRAINT `miembros_ibfk_3` FOREIGN KEY (`fkid_usu`) REFERENCES `usuarios` (`id_usu`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `miembros`
--

LOCK TABLES `miembros` WRITE;
/*!40000 ALTER TABLE `miembros` DISABLE KEYS */;
INSERT INTO `miembros` VALUES ('1','admin','2602','1',NULL,NULL),('RE32','123','1234',NULL,32,NULL),('RE33','veci','123',NULL,33,NULL),('USU7','danny','123',NULL,NULL,7),('USU8','eddy','1234',NULL,NULL,8),('USU9','bossun','1234',NULL,NULL,9);
/*!40000 ALTER TABLE `miembros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurantes`
--

DROP TABLE IF EXISTS `restaurantes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurantes` (
  `id_res` int NOT NULL AUTO_INCREMENT,
  `nombre_res` varchar(50) DEFAULT NULL,
  `ubi_res` varchar(100) DEFAULT NULL,
  `desc_res` varchar(100) DEFAULT NULL,
  `hora_res` varchar(100) DEFAULT NULL,
  `fkid_ad` varchar(10) DEFAULT NULL,
  `imagen_res` longblob,
  PRIMARY KEY (`id_res`),
  UNIQUE KEY `nombre_res_UNIQUE` (`nombre_res`),
  KEY `fkid_ad` (`fkid_ad`),
  CONSTRAINT `restaurantes_ibfk_1` FOREIGN KEY (`fkid_ad`) REFERENCES `administradores` (`id_ad`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurantes`
--

LOCK TABLES `restaurantes` WRITE;
/*!40000 ALTER TABLE `restaurantes` DISABLE KEYS */;
INSERT INTO `restaurantes` VALUES (32,'utc','asd','asd','12:03 hasta 12:34','1',''),(33,'El vecino del buen sabor','Latacunga','Restaurante sumido en la desesperacion','08:00 hasta 18:00','1','');
/*!40000 ALTER TABLE `restaurantes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_usu` int NOT NULL AUTO_INCREMENT,
  `nom_usu` varchar(50) DEFAULT NULL,
  `correo_usu` varchar(50) DEFAULT NULL,
  `fkid_est` int DEFAULT NULL,
  `fkid_ad` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id_usu`),
  KEY `fkid_est` (`fkid_est`),
  KEY `fkid_ad` (`fkid_ad`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`fkid_est`) REFERENCES `estadousuario` (`id_est`),
  CONSTRAINT `usuarios_ibfk_2` FOREIGN KEY (`fkid_ad`) REFERENCES `administradores` (`id_ad`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'','',NULL,NULL),(2,'','',NULL,NULL),(3,'','',NULL,NULL),(4,'RestaurantName','Location',NULL,NULL),(5,'','',NULL,NULL),(6,'danny','danny@gmail.com',NULL,NULL),(7,'hola','danny@gmail.com',NULL,NULL),(8,'Eddy','eddysopalo85@gmail.com',NULL,NULL),(9,'yo','todos',NULL,NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-04 17:56:54
