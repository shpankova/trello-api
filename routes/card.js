const Router = require('express').Router;
const router = new Router()
const controller = require("../controllers/cardController")

router.post('/createcard', controller.createCard);
router.get('/card/:id', controller.findCardById);
router.put('/updatecard/:id', controller.updateCardById)
router.delete('/deletecard/:id', controller.deleteCardById);

module.exports = router;