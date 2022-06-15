const boardService = require('../service/board-service')

class BoardController {
    async createBoard(req, res) {
        try {
            const { name, color, description, create_at } = req.body
            const board = await boardService.createBoard(name, color, description, create_at)
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

    async findBoardById(req, res) {
        try {
            const { id } = req.params;
            const board = await boardService.findBoardById(id)
            return res.json(board)
            // res.status(200).send(JSON.parse(board));
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
            const board = await boardService.updateBoardById(name, color, description, create_at, id)
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
            const board = await boardService.deleteBoardById(id)
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
