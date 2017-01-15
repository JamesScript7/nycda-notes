CREATE TABLE blog_posts (
	"id" INTEGER PRIMARY KEY AUTOINCREMENT,
	"title" VARCHAR(255) UNIQUE NOT NULL,
	"body" TEXT NOT NULL,
	"timestamp" DATETIME,
	"active" BOOLEAN,
	"category" VARCHAR DEFAULT 'news'
);

CREATE INDEX blog_posts_title ON blog_posts (title);

-- "Migrations" is a bit of code to alter a table.

-- ALTER TABLE NAME COLUMN something;

--this is a comment

--SEEDING the database

INSERT INTO blog_posts
(title, body, timestamp)
VALUES
("second post", "second body post", DATETIME());
("third post", "third body post", DATETIME());




