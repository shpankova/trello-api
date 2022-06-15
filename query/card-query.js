const createCard = `
    INSERT INTO 
        "TrelloSchema"."card" 
        ( board_id, name, description, estimate, status, due_date, labels) 
    VALUES 
        ($1, $2, $3, $4, $5, $6, $7)`;

const findCardById = `
    SELECT 
        card_id,
        board_id,
        name, 
        description,
        create_at,
        status,
        due_date,
        labels
    FROM 
        "TrelloSchema"."card" 
    WHERE 
        card_id = $1`;

const findCard = `
    SELECT EXISTS ( 
    SELECT 1
    FROM 
        "TrelloSchema"."card" 
    WHERE 
        card_id = $1)`;



const updateCardById = `
    UPDATE 
        "TrelloSchema"."card" 
    SET 
        board_id =$1,
        name = $2, 
        description = $3,
        estimate = $4,  
        status = $5, 
        due_date = $6,
        labels = $7
    WHERE 
        card_id = $8`;

const deleteCardById = `
    DELETE FROM 
        "TrelloSchema"."card" 
    WHERE 
        card_id = $1`;


module.exports = { createCard, findCardById, updateCardById, deleteCardById, findCard }