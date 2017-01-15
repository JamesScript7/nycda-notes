CREATE TABLE blog_posts (
	"id" INTEGER PRIMARY KEY AUTOINCREMENT,
	"title" VARCHAR(255) UNIQUE NOT NULL,
	"body" TEXT NOT NULL,
	"timestamp" DATETIME
);

--this is a comment