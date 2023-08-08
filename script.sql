-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';





-- -----------------------------------------------------
-- Schema blog
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `blog` DEFAULT CHARACTER SET utf8 ;
USE `blog` ;

-- -----------------------------------------------------
-- Table `blog`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blog`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `telephone` VARCHAR(15) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `img` VARCHAR(255) NULL,
  `user_desc` VARCHAR(255) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blog`.`posts_analytics`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blog`.`posts_analytics` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `views` INT NOT NULL,
  `stars` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idanalytics_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blog`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blog`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `desc` VARCHAR(3000) NOT NULL,
  `img` VARCHAR(255) NOT NULL,
  `date` DATETIME NULL,
  `author_id` INT NOT NULL,
  `analytics_id` INT NOT NULL,
  PRIMARY KEY (`id`, `analytics_id`),
  INDEX `fk_posts_users_idx` (`author_id` ASC) VISIBLE,
  INDEX `fk_posts_analytics1_idx` (`analytics_id` ASC) VISIBLE,
  CONSTRAINT `fk_posts_users`
    FOREIGN KEY (`author_id`)
    REFERENCES `blog`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `fk_posts_analytics1`
    FOREIGN KEY (`analytics_id`)
    REFERENCES `blog`.`posts_analytics` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blog`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blog`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idcategories_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blog`.`markers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blog`.`markers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `latitude` FLOAT NOT NULL,
  `longtitude` FLOAT NOT NULL,
  `text` VARCHAR(100) NULL,
  `post_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idmarks_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_mark_posts1_idx` (`post_id` ASC) VISIBLE,
  CONSTRAINT `fk_mark_posts1`
    FOREIGN KEY (`post_id`)
    REFERENCES `blog`.`posts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blog`.`posts_has_categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blog`.`posts_has_categories` (
  `posts_id` INT NOT NULL,
  `categories_id` INT NOT NULL,
  PRIMARY KEY (`posts_id`, `categories_id`),
  INDEX `fk_posts_has_categories_categories1_idx` (`categories_id` ASC) VISIBLE,
  INDEX `fk_posts_has_categories_posts1_idx` (`posts_id` ASC) VISIBLE,
  CONSTRAINT `fk_posts_has_categories_posts1`
    FOREIGN KEY (`posts_id`)
    REFERENCES `blog`.`posts` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_posts_has_categories_categories1`
    FOREIGN KEY (`categories_id`)
    REFERENCES `blog`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blog`.`posts_comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blog`.`posts_comments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(255) NULL,
  `posts_id` INT NOT NULL,
  `author_id` INT NOT NULL,
  `reply` INT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idcomments_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_comments_posts1_idx` (`posts_id` ASC) VISIBLE,
  INDEX `fk_comments_users1_idx` (`author_id` ASC) VISIBLE,
  INDEX `fk_comments_comments1_idx` (`reply` ASC) VISIBLE,
  CONSTRAINT `fk_comments_posts1`
    FOREIGN KEY (`posts_id`)
    REFERENCES `blog`.`posts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comments_users1`
    FOREIGN KEY (`author_id`)
    REFERENCES `blog`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `fk_comments_comments1`
    FOREIGN KEY (`reply`)
    REFERENCES `blog`.`posts_comments` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blog`.`moments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blog`.`moments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(300) NOT NULL,
  `img` VARCHAR(255) NULL,
  `author_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idmoments_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_moments_users1_idx` (`author_id` ASC) VISIBLE,
  CONSTRAINT `fk_moments_users1`
    FOREIGN KEY (`author_id`)
    REFERENCES `blog`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
