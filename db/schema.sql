CREATE TABLE burger (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255),
    devoured BOOLEAN,
    createAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);