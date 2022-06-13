CREATE SCHEMA IF NOT EXISTS "TrelloSchema";

CREATE TABLE IF NOT EXISTS "TrelloSchema"."board"
(   "board_id" SERIAL PRIMARY KEY, 
    "name" text NOT NULL,
	"color" text NOT NULL,
    "description" text NOT NULL,
    "create_at" timestamp without time zone NOT NULL
);

CREATE TABLE IF NOT EXISTS "TrelloSchema"."card"
(   "card_id" SERIAL PRIMARY KEY,
    "board_id" integer NOT NULL,
    "name" text NOT NULL,
    "description" text NOT NULL,
    "create_at" timestamp without time zone NOT NULL,
    "estimate" text,
    "status" text NOT NULL,
    "due_date" timestamp without time zone NOT NULL,
    labels text NOT NULL,
    FOREIGN KEY (board_id) REFERENCES "TrelloSchema"."board" (board_id)
);

