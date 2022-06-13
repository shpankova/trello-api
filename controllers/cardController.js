const db = require("../db");

class CardController {
    async createCard(req, res) {
        try {
            const { board_id, name, description, create_at, status, due_date, labels } = req.body
            const { rows } = await db.query(
                `INSERT INTO "TrelloSchema"."card" ( board_id, name, description, create_at, status, due_date, labels) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
                [board_id, name, description, create_at, status, due_date, labels]
            );
            res.status(201).send({
                message: "Card added successfully!",
                body: {
                    card: { board_id, name, description, create_at, status, due_date, labels },
                },
            });
        } catch (error) {
            console.error('addCard', error);
            res.status(500).send({
                message: "Unexpected error"
            });
        }

    };

    async findCardById(req, res) {
        try {
            const { id } = req.params;
            const { rows } = await db.query(`SELECT 
                                      card_id,
                                      name, 
                                      description,
                                      to_char(create_at, 'yyyy-MM-dd') as create_at,
                                      status,
                                      to_char(due_date, 'yyyy-MM-dd') as due_date,
                                      labels
                                    FROM "TrelloSchema"."card" WHERE card_id = $1`,
                [id]
            );
            if (!rows.length) {
                throw 'card_not_found';
            }
            res.status(200).send(rows[0]);
        } catch (error) {
            console.error('findCardById', error);
            if (error == 'card_not_found') {
                res.status(404).send({
                    message: "Card not found."
                });
            } else {
                res.status(500).send({
                    message: "Unexpected error"
                });
            }
        }
    };

    async updateCardById(req, res) {
        try {
            const { id } = req.params;
            const { name, description, create_at, status, due_date, labels } = req.body;
            const { rows } = await db.query(`UPDATE "TrelloSchema"."card" 
                                          SET name = $1, 
                                          description = $2, 
                                          create_at = $3, 
                                          status = $4, 
                                          due_date = $5,
                                          labels = $6
                                          WHERE card_id = $7`,
                [name, description, create_at, status, due_date, labels, id]
            );
            res.status(200).send({ message: "Card Updated Successfully!" });
        } catch (error) {
            console.error('updateCardById', error);
            res.status(500).send({
                message: "Unexpected error"
            });
        }
    };

    async deleteCardById(req, res) {
        try {
            const { id } = req.params;
            await db.query(`DELETE FROM "TrelloSchema"."card" WHERE card_id = $1`, [id]);
            res.status(200).send({ message: "Card deleted successfully!" });
        } catch (error) {
            console.error('deleteCardById', error);
            res.status(500).send({
                message: "Unexpected error"
            });
        }
    }
}

module.exports = new CardController();
