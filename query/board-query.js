const createBoard = `
    INSERT INTO
        "TrelloSchema"."board" 
        ( name, color, description ) 
    VALUES 
        ($1, $2, $3)`;

const findBoardById = `
    SELECT *
    FROM 
        "TrelloSchema"."board" 
    JOIN 
        "TrelloSchema"."card" 
    ON 
        "TrelloSchema"."board"."board_id"="TrelloSchema"."card"."board_id" 
    WHERE 
        "TrelloSchema"."board"."board_id" = $1  `;


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


module.exports = {createBoard, findBoardById, updateBoardById, deleteBoardById};