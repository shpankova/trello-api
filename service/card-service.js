const db = require("../db");

const {createCard, findCardById, updateCardById, deleteCardById, findCard} = require('../query/card-query')
const ApiError = require('../exceptions/api-error');


class CardService {
    async createCard(board_id, name, description, estimate, status, due_date, labels) {
        const { rows } = await db.query( createCard,
            [board_id, name, description, estimate, status, due_date, labels]
        );
        return rows
    }

    async findCardById(id) {
        const { rows } = await db.query(findCardById, [id]);
        return rows
    }

    async updateCardById(board_id, name, description, estimate, status, due_date, labels, id) {
        const { rows } = await db.query(updateCardById,
        [board_id, name, description, estimate, status, due_date, labels, id]);
        return rows
    }

    async deleteCardById(id) {
        const card = await db.query(deleteCardById, 
        [id]);
        return card
    }
}

module.exports = new CardService();