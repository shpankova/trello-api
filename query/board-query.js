const createBoard = `
    INSERT INTO
        "TrelloSchema"."board" 
        ( name, color, description ) 
    VALUES 
        ($1, $2, $3)`;

const findBoardById = `
    SELECT 
        "TrelloSchema"."board"."board_id",
        "TrelloSchema"."board"."name" AS "board_name",
        "TrelloSchema"."board"."color" AS "board_color",
        "TrelloSchema"."board"."description" AS "board_description",
        "TrelloSchema"."board"."created_at" AS "board_created_at",
        "TrelloSchema"."card"."card_id",
        "TrelloSchema"."card"."name" AS "card_name",
        "TrelloSchema"."card"."description" AS "card_description",
        "TrelloSchema"."card"."created_at" AS "card_created_at",
        "TrelloSchema"."card"."estimate" AS "card_estimate",
        "TrelloSchema"."card"."status" AS "card_status",
        "TrelloSchema"."card"."due_date" AS "card_due_date",
        "TrelloSchema"."card"."labels" AS "card_labels"
    FROM 
        "TrelloSchema"."board" 
    JOIN 
        "TrelloSchema"."card" 
    ON 
        "TrelloSchema"."board"."board_id"="TrelloSchema"."card"."board_id" 
    WHERE 
        "TrelloSchema"."board"."board_id" = $1  `;



const findBoard = `
    SELECT EXISTS ( 
    SELECT 1
    FROM 
        "TrelloSchema"."board" 
    WHERE 
        board_id = $1)`;


const updateBoardById = `
    UPDATE "TrelloSchema"."board" 
    SET 
        name = $1, 
        color = $2,
        description = $3
    WHERE 
        board_id = $4`;

const deleteBoardById = `
    DELETE FROM 
        "TrelloSchema"."board" 
    WHERE 
        board_id = $1`;


module.exports = {createBoard, findBoardById, updateBoardById, deleteBoardById, findBoard};