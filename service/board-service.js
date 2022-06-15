const db = require("../db");

const {createBoard, findBoardById, updateBoardById, deleteBoardById} = require('../query/board-query')


class BoardService {
    async createBoard(name, color, description, create_at) {
        const { rows } = await db.query(createBoard,
            [ name, color, description, create_at]
        );
        return rows
    }

    async findBoardById(id) {
        const { rows } = await db.query(findBoardById, [id]);
        return rows
    }

    async updateBoardById(name, color, description, create_at, id) {
        const { rows } = await db.query(updateBoardById,
            [name, color, description, create_at, id]
        );
        return rows
    }

    async deleteBoardById(id) {
        const board = await db.query(deleteBoardById, [id]);
        return board
    }
}

module.exports = new BoardService();
