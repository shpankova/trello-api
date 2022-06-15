const db = require("../db");

const cardService = require('../service/card-service')
const { cardValidation } = require('../validation/card-validation')

class CardController {
    async createCard(req, res, next) {
        try {
            const {error} = cardValidation(req.body)
            if (error){
                return res.status(400).json({message: error.details[0].message})
            } 
            const { board_id, name, description, estimate, status, due_date, labels } = req.body
            const card = await cardService.createCard(board_id, name, description, estimate, status, due_date, labels)
            res.status(201).send({
                message: "Card added successfully!",
                body: {
                    card: { board_id, name, description, estimate, status, due_date, labels },
                },
            });
        } catch (e) {
            next(e)
        }

    };

    async findCardById(req, res, next) {
        try {
            const { id } = req.params;
            const card = await cardService.findCardById(id)
            res.status(200).send(card[0]);
        } catch (e) {
            next(e)
        }
    };

    async updateCardById(req, res, next) {
        try {
            const {error} = cardValidation(req.body)
            if (error){
                return res.status(400).json({message: error.details[0].message})
            } 
            const { id } = req.params;
            const { board_id, name, description, estimate, status, due_date, labels } = req.body;
            const card = await cardService.updateCardById(board_id, name, description, estimate, status, due_date, labels, id)
            res.status(200).send({ message: "Card Updated Successfully!" });
        } catch (e) {
            next(e)
        }
    };

    async deleteCardById(req, res, next) {
        try {
            const { id } = req.params;
            const card = await cardService.deleteCardById(id)
            res.status(200).send({ message: "Card deleted successfully!" });
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new CardController();
