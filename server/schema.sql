CREATE DATABASE authenticationModule;
USE authenticationModule;

CREATE TABLE user_table (
    id SERIAL PRIMARY KEY,
    auth_provider_id VARCHAR(255) NOT NULL,
    auth_provider VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    img_link VARCHAR(255)
);

INSERT INTO user_table (auth_provider_id, auth_provider, password, username, img_link)
VALUES
    ('123456', 'google', 'hashed_password_1', 'user1', 'user1_image_link'),
    ('789012', 'facebook', 'hashed_password_2', 'user2', 'user2_image_link'),
    ('345678', 'twitter', 'hashed_password_3', 'user3', 'user3_image_link'),
    ('901234', 'github', 'hashed_password_4', 'user4', 'user4_image_link');




