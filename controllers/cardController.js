const db = require("../db");

const cardService = require('../service/card-service')
class CardController {
    async createCard(req, res) {
        try {
            const { board_id, name, description, create_at, status, due_date, labels } = req.body
            const card = await cardService.createCard(board_id, name, description, create_at, status, due_date, labels)
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
            const card = await cardService.findCardById(id)
            res.status(200).send(card[0]);
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
            const { board_id, name, description, create_at, status, due_date, labels } = req.body;
            const card = await cardService.updateCardById(board_id, name, description, create_at, status, due_date, labels, id)
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
            const card = await cardService.deleteCardById(id)
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
