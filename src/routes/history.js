const express = require('express');
const router = express.Router();
const historyController = require('../controllers/history')
const {verifyAccess} = require('../middlewares/auth')
const pagination = require('../middlewares/pagination')

router
    .get('/', verifyAccess, historyController.getAllHistory)
    .get('/:id', )
    .post('/',verifyAccess, historyController.insertHistory)
    .patch('/:id',verifyAccess, historyController.updateHistory)
    .delete('/:id',verifyAccess, historyController.deleteHistory)

module.exports = router