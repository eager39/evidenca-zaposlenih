-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: evidenca_zaposlenih
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.37-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `izraba_dopusta`
--

DROP TABLE IF EXISTS `izraba_dopusta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `izraba_dopusta` (
  `id` int(11) NOT NULL,
  `od` varchar(45) DEFAULT NULL,
  `do` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `izraba_dopusta`
--

LOCK TABLES `izraba_dopusta` WRITE;
/*!40000 ALTER TABLE `izraba_dopusta` DISABLE KEYS */;
/*!40000 ALTER TABLE `izraba_dopusta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pogodba_zaposlitev`
--

DROP TABLE IF EXISTS `pogodba_zaposlitev`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pogodba_zaposlitev` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `datum_sklenitve` int(30) NOT NULL,
  `datum_nastopa_dela` int(30) NOT NULL,
  `vrsta_pogodbe` varchar(20) CHARACTER SET utf32 COLLATE utf32_slovenian_ci NOT NULL,
  `razlog_dolocen_cas` varchar(20) CHARACTER SET utf32 COLLATE utf32_slovenian_ci NOT NULL,
  `poklic` varchar(20) CHARACTER SET utf32 COLLATE utf32_slovenian_ci NOT NULL,
  `strok_uspos` varchar(20) CHARACTER SET utf32 COLLATE utf32_slovenian_ci NOT NULL,
  `naziv_del_mesta` text CHARACTER SET utf32 COLLATE utf32_slovenian_ci NOT NULL,
  `st_ur_teden` int(5) NOT NULL,
  `razporeditev_del_casa` text CHARACTER SET utf32 COLLATE utf32_slovenian_ci NOT NULL,
  `kraj_dela` varchar(20) CHARACTER SET utf32 COLLATE utf32_slovenian_ci NOT NULL,
  `konkurencna_klavzula` varchar(20) CHARACTER SET utf32 COLLATE utf32_slovenian_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pogodba_zaposlitev`
--

LOCK TABLES `pogodba_zaposlitev` WRITE;
/*!40000 ALTER TABLE `pogodba_zaposlitev` DISABLE KEYS */;
/*!40000 ALTER TABLE `pogodba_zaposlitev` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(200) NOT NULL,
  `username` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (2,'$2y$10$JrY4s5Mdv2HlCWbB5Gs5ceRRLd7UCGidprsQfyMJOWEJIoHooIK96','test');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vastvo_delo`
--

DROP TABLE IF EXISTS `vastvo_delo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vastvo_delo` (
  `id` int(11) NOT NULL,
  `od` varchar(45) DEFAULT NULL,
  `do` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vastvo_delo`
--

LOCK TABLES `vastvo_delo` WRITE;
/*!40000 ALTER TABLE `vastvo_delo` DISABLE KEYS */;
/*!40000 ALTER TABLE `vastvo_delo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vzdrzevani_druz_clani`
--

DROP TABLE IF EXISTS `vzdrzevani_druz_clani`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vzdrzevani_druz_clani` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `ime` varchar(20) CHARACTER SET utf32 COLLATE utf32_slovenian_ci NOT NULL,
  `priimek` varchar(20) CHARACTER SET utf32 COLLATE utf32_slovenian_ci NOT NULL,
  `emso` int(13) NOT NULL,
  `davcna` int(8) NOT NULL,
  `sorod_razmerje` varchar(15) CHARACTER SET utf32 COLLATE utf32_slovenian_ci NOT NULL,
  `zaposleni_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tujifk` (`zaposleni_id`),
  CONSTRAINT `vzdrzevani_druz_clani_ibfk_1` FOREIGN KEY (`zaposleni_id`) REFERENCES `zaposleni` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vzdrzevani_druz_clani`
--

LOCK TABLES `vzdrzevani_druz_clani` WRITE;
/*!40000 ALTER TABLE `vzdrzevani_druz_clani` DISABLE KEYS */;
INSERT INTO `vzdrzevani_druz_clani` VALUES (1,'asd','asdd',12313,123123,'123123',2);
/*!40000 ALTER TABLE `vzdrzevani_druz_clani` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zaposleni`
--

DROP TABLE IF EXISTS `zaposleni`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zaposleni` (
  `emso` int(13) NOT NULL,
  `ime` varchar(20) CHARACTER SET utf32 COLLATE utf32_slovenian_ci NOT NULL,
  `kraj_rojstva` varchar(20) CHARACTER SET utf32 COLLATE utf32_slovenian_ci NOT NULL,
  `drzava_rojstva` varchar(20) CHARACTER SET utf32 COLLATE utf32_slovenian_ci NOT NULL,
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `maticna_st` int(5) NOT NULL,
  `davcna` int(11) NOT NULL,
  `drzavljanstvo` varchar(15) CHARACTER SET utf32 COLLATE utf32_slovenian_ci NOT NULL,
  `stalni_naslov` varchar(20) CHARACTER SET utf32 COLLATE utf32_slovenian_ci NOT NULL,
  `zacasni_naslov` varchar(20) CHARACTER SET utf32 COLLATE utf32_slovenian_ci NOT NULL,
  `izobrazba` varchar(20) CHARACTER SET utf32 COLLATE utf32_slovenian_ci NOT NULL,
  `invalidnost` int(5) NOT NULL,
  `kategorija_inv` int(5) NOT NULL,
  `delna_upok` int(5) NOT NULL,
  `last_change` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `ime_delodajalca_dop` varchar(10) CHARACTER SET utf32 COLLATE utf32_slovenian_ci NOT NULL,
  `naslov_delodajalca_dop` varchar(30) CHARACTER SET utf32 COLLATE utf32_slovenian_ci NOT NULL,
  `pogodba_fk` int(11) NOT NULL,
  `zaposlenicol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `pogodba_fk` (`pogodba_fk`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zaposleni`
--

LOCK TABLES `zaposleni` WRITE;
/*!40000 ALTER TABLE `zaposleni` DISABLE KEYS */;
INSERT INTO `zaposleni` VALUES (123,'asd','asd','asd',2,123,123,'?','qwe','qwe','?',1,1,1,'2019-01-09 12:18:58','','',0,NULL);
/*!40000 ALTER TABLE `zaposleni` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zdr_pregled_vel`
--

DROP TABLE IF EXISTS `zdr_pregled_vel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zdr_pregled_vel` (
  `id` int(11) NOT NULL,
  `od` varchar(45) DEFAULT NULL,
  `do` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zdr_pregled_vel`
--

LOCK TABLES `zdr_pregled_vel` WRITE;
/*!40000 ALTER TABLE `zdr_pregled_vel` DISABLE KEYS */;
/*!40000 ALTER TABLE `zdr_pregled_vel` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-30 16:19:50
