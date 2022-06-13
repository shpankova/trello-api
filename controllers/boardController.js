const db = require("../db");

class BoardController {
    async createBoard(req, res) {
        try {
            const { name, color, description, create_at } = req.body
            const { rows } = await db.query(
                `INSERT INTO "TrelloSchema"."board" ( name, color, description, create_at) VALUES ($1, $2, $3, $4)`,
                [ name, color, description, create_at]
            );
            res.status(201).send({
                message: "Board added successfully!",
                body: {
                    board: { name, color, description, create_at },
                },
            });
        } catch (error) {
            console.error('addBoard', error);
            res.status(500).send({
                message: "Unexpected error"
            });
        }

    };

    async cardsInBoard(req,res) {
        try {
            const { board_id, card_id } = req.body
            const { rows } = await db.query(
                `INSERT INTO "TrelloSchema"."boardcard" ( board_id, card_id ) VALUES ($1, $2)`,
                 [ board_id, card_id]

            );
            res.status(201).send({
                message: "Card added in board successfully!",
                body: {
                    board: { board_id, card_id },
                },
            });
        } catch (error) {
            console.error('addCoardInBoard', error);
            res.status(500).send({
                message: "Unexpected error"
            });
        }

    };

    async findBoardById(req, res) {
        try {
            const { id } = req.params;
            const { rows } = await db.query(`SELECT 
                                      board_id,
                                      name, 
                                      color,
                                      description,
                                      to_char(create_at, 'yyyy-MM-dd') as create_at
                                    FROM "TrelloSchema"."board" WHERE board_id = $1`,
                [id]
            );
            if (!rows.length) {
                throw 'board_not_found';
            }
            res.status(200).send(rows[0]);
        } catch (error) {
            console.error('findBoardById', error);
            if (error == 'board_not_found') {
                res.status(404).send({
                    message: "Board not found."
                });
            } else {
                res.status(500).send({
                    message: "Unexpected error"
                });
            }
        }
    };

    async updateBoardById(req, res) {
        try {
            const { id } = req.params;
            const { name, color, description, create_at } = req.body;
            const { rows } = await db.query(`UPDATE "TrelloSchema"."board" 
                                          SET name = $1, 
                                          color = $2,
                                          description = $3, 
                                          create_at = $4, 
                                          WHERE board_id = $7`,
                [name, color, description, create_at, id]
            );
            res.status(200).send({ message: "Board Updated Successfully!" });
        } catch (error) {
            console.error('updateBoardById', error);
            res.status(500).send({
                message: "Unexpected error"
            });
        }
    };

    async deleteBoardById(req, res) {
        try {
            const { id } = req.params;
            await db.query(`DELETE FROM "TrelloSchema"."board" WHERE board_id = $1`, [id]);
            res.status(200).send({ message: "Board deleted successfully!" });
        } catch (error) {
            console.error('deleteBoardById', error);
            res.status(500).send({
                message: "Unexpected error"
            });
        }
    } 
}

module.exports = new BoardController();
