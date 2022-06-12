const Router = require('express').Router;
const router = new Router()
const controller = require("../controllers/boardController")

router.post('/createboard', controller.createBoard);
router.get('/board/:id', controller.findBoardById);
router.put('/updateboard/:id', controller.updateBoardById)
router.delete('/deleteboard/:id', controller.deleteBoardById);

module.exports = router;