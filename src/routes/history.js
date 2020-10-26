const express = require('express');
const router = express.Router();
const historyController = require('../controllers/history')
const pagination = require('../middlewares/pagination')
const {verifyAccess} = require('../middlewares/auth')

router
    .get('/', verifyAccess, pagination.historys, historyController.getAllHistory)
    .get('/:id', )
    .post('/',verifyAccess, historyController.insertHistory)
    .patch('/:id',verifyAccess, historyController.updateHistory)
    .delete('/:id',verifyAccess, historyController.deleteHistory)

module.exports = router