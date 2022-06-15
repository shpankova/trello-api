const db = require("../db");

const { createBoard, findBoardById, updateBoardById, deleteBoardById } = require('../query/board-query')
const ApiError = require('../exceptions/api-error');


class BoardService {
    async createBoard(name, color, description) {

        const { rows } = await db.query(createBoard,
            [name, color, description]
        );
        return rows
    }

    async findBoardById(id) {
        const { rows } = await db.query(findBoardById, [id]);
        return rows
    }

    async updateBoardById(name, color, description, id) {
        const { rows } = await db.query(updateBoardById,
            [name, color, description, id]
        );
        return rows
    }

    async deleteBoardById(id) {
        const board = await db.query(deleteBoardById, [id]);
        return board
    }
}

module.exports = new BoardService();
