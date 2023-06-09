SET NAMES UTF8MB4;
SET GLOBAL time_zone = '+02:00';
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';
SET GLOBAL event_scheduler = 'ON';

DROP TABLE IF EXISTS `events_tags`,`events_users`,`roles_users`,`events`,`categories`,`tags`, `users`, `roles`;

CREATE TABLE `users` (
    `id` int NOT NULL AUTO_INCREMENT,
    `last_name` varchar(100) NOT NULL,
    `first_name` varchar(100) NOT NULL,
    `email` varchar(150) NOT NULL,
    `password` varchar(255) NOT NULL,
    `age` int NOT NULL,
    `public_ip` varchar(15) DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `roles` (
    `id` int NOT NULL AUTO_INCREMENT,
    `label` varchar(30) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `role_label_unique` (`label`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `categories` (
    `id` int NOT NULL AUTO_INCREMENT,
    `label` varchar(30) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `category_label_unique` (`label`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `tags` (
    `id` int NOT NULL AUTO_INCREMENT,
    `label` varchar(30) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `tag_label_unique` (`label`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `events` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(100) NOT NULL,
    `size` int DEFAULT NULL,
    `description` LONGTEXT DEFAULT NULL,
    `event_date` DATETIME NOT NULL,
    `address` varchar(255) NOT NULL,
    `coordinates` varchar(255) NOT NULL,
    `user_id` int NOT NULL,
    `category_id` int NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`),
    FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `roles_users` (
    `user_id` int NOT NULL,
    `role_id` int NOT NULL,
    PRIMARY KEY (`user_id`,`role_id`),
    FOREIGN KEY (`user_id`)
        REFERENCES `users`(`id`)
        ON DELETE CASCADE,
    FOREIGN KEY (`role_id`)
        REFERENCES `roles`(`id`)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `events_users` (
    `user_id` int NOT NULL,
    `event_id` int NOT NULL,
    PRIMARY KEY (`user_id`,`event_id`),
    FOREIGN KEY (`user_id`)
        REFERENCES `users`(`id`)
        ON DELETE CASCADE,
    FOREIGN KEY (`event_id`)
        REFERENCES `events`(`id`)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `events_tags` (
    `event_id` int NOT NULL,
    `tag_id` int NOT NULL,
    PRIMARY KEY (`event_id`,`tag_id`),
    FOREIGN KEY (`event_id`)
        REFERENCES `events`(`id`)
        ON DELETE CASCADE,
    FOREIGN KEY (`tag_id`)
        REFERENCES `tags`(`id`)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;