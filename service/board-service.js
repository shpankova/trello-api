const db = require("../db");

const { createBoard, findBoardById, updateBoardById, deleteBoardById, findBoard } = require('../query/board-query')
const ApiError = require('../exceptions/api-error');

class BoardService {
    async createBoard(name, color, description, board_id) {
        const card = await db.query( findBoard,
            [board_id]
        );
        if (card.rows[0].exists) {
            throw ApiError.BadRequest('This board already exists')
        }
        const { rows } = await db.query(createBoard,
            [name, color, description]
        );
        return rows
    }

    async findBoardById(id) {
        const { rows } = await db.query(findBoardById, [id]);
        if (!rows.length) {
            throw ApiError.BadRequest('Nothing was found')
        }
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
