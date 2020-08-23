const express = require('express');
const router = express.Router();
const historyController = require('../controllers/history')

router
    .get('/', historyController.getAllHistory)
    .get('/:id', )
    .post('/', historyController.insertHistory)
    .patch('/:id', historyController.updateHistory)
    .delete('/:id', historyController.deleteHistory)

module.exports = router