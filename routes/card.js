const Router = require('express').Router;
const router = new Router()
const controller = require("../controllers/cardController")


router.post('/card', controller.createCard);
router.get('/card/:id', controller.findCardById);
router.put('/card/:id', controller.updateCardById)
router.delete('/card/:id', controller.deleteCardById);

module.exports = router;