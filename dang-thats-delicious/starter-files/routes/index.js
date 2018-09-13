const express = require('express')
const router = express.Router()
const storeController = require('../controllers/storeController')

const { catchErrors } = require('../handlers/errorHandlers')

router.get('/', catchErrors(storeController.getStores))
router.get('/stores', catchErrors(storeController.getStores))
router.get('/add', storeController.addStore)
router.post('/add', storeController.createStore)
router.post('/add/:id', storeController.updateStore)
router.get('/stores/:id/edit', catchErrors(storeController.editStore))

module.exports = router