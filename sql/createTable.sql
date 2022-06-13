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
    "name" text NOT NULL,
    "description" text NOT NULL,
    "create_at" timestamp without time zone NOT NULL,
    "estimate" text,
    "status" text NOT NULL,
    "due_date" timestamp without time zone NOT NULL,
    labels text NOT NULL
);

CREATE TABLE IF NOT EXISTS "TrelloSchema".boardcard
(
	id SERIAL NOT NULL,
    board_id integer NOT NULL,
	card_id integer NOT NULL,
	FOREIGN KEY (board_id) REFERENCES board (board_id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE,
	FOREIGN KEY (card_id) REFERENCES card (card_id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE
    
);