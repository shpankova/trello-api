const Router = require('express').Router;
const router = new Router()
const controller = require("../controllers/cardController")


router.post('/cards', controller.createCard);
router.get('/cards/:id', controller.findCardById);
router.put('/cards/:id', controller.updateCardById)
router.delete('/cards/:id', controller.deleteCardById);

module.exports = router;
