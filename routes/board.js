const Router = require('express').Router;
const router = new Router()
const controller = require("../controllers/boardController")
const roleMiddleware = require('../middlewares/roles-middleware')

router.post('/board', roleMiddleware(["admin"]), controller.createBoard);
router.get('/board/:id', controller.findBoardById);
router.put('/board/:id', roleMiddleware(["admin"]), controller.updateBoardById)
router.delete('/board/:id', roleMiddleware(["admin"]), controller.deleteBoardById);

module.exports = router;