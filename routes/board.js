const Router = require('express').Router;
const router = new Router()
const controller = require("../controllers/boardController")
const roleMiddleware = require('../middlewares/roles-middleware')

router.post('/boards', roleMiddleware(["admin"]), controller.createBoard);
router.get('/boards/:id', controller.findBoardById);
router.put('/boards/:id', roleMiddleware(["admin"]), controller.updateBoardById)
router.delete('/boards/:id', roleMiddleware(["admin"]), controller.deleteBoardById);

module.exports = router;
