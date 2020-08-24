const express = require('express');
const router = express.Router();
const historyController = require('../controllers/history')
const auth = require('../middlewares/auth')

router
    .get('/', historyController.getAllHistory)
    .get('/:id', )
    .post('/',auth.verifyAccess, historyController.insertHistory)
    .patch('/:id',auth.verifyAccess, historyController.updateHistory)
    .delete('/:id',auth.verifyAccess, historyController.deleteHistory)

module.exports = router