CREATE DATABASE journal

USE journal

CREATE TABLE content (
	id INT IDENTITY(1,1) PRIMARY KEY,
	szoveg NVARCHAR(MAX),
	datum DATE,
	felhasznalo INT
);