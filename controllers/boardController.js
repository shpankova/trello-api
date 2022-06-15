const boardService = require('../service/board-service')
const { boardValidation } = require('../validation/board-validation')

class BoardController {
    async createBoard(req, res, next) {
        try {
            const {error} = boardValidation(req.body)
            if (error){
                return res.status(400).json({message: error.details[0].message})
            } 
            const { name, color, description } = req.body
            const board = await boardService.createBoard(name, color, description)
            res.status(201).send({
                message: "Board added successfully!",
                body: {
                    board: { name, color, description },
                },
            });
        } catch (e) {
            next(e)
        }

    };

    async findBoardById(req, res, next) {
        try {
            const { id } = req.params;
            const board = await boardService.findBoardById(id)
            return res.json(board)
        } catch (e) {
           next(e)
        }
    };

    async updateBoardById(req, res, next) {
        try {
            const {error} = boardValidation(req.body)
            if (error){
                return res.status(400).json({message: error.details[0].message})
            } 
            const { id } = req.params;
            const { name, color, description } = req.body;
            const board = await boardService.updateBoardById(name, color, description, id)
            res.status(200).send({ message: "Board Updated Successfully!" });
        } catch (e) {
            next(e)
        }
    };

    async deleteBoardById(req, res, next) {
        try {
            const { id } = req.params;
            const board = await boardService.deleteBoardById(id)
            res.status(200).send({ message: "Board deleted successfully!" });
        } catch (e) {
            next(e)
        }
    } 
}

module.exports = new BoardController();
