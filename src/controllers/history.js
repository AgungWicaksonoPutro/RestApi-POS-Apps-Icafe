const historyModel = require('../models/history');
const helpers = require('../helpers/response');

const history = {
    getAllHistory: (req, res)=>{
        historyModel.getAllHistory()
            .then((result)=>{
                const resultHistory = result;
                helpers.response(res, resultHistory, 200, null)
            })
            .catch((err)=>{
                console.log(err)
            })
    },
    insertHistory: (req, res)=>{
        const {invoices, idEmploye, orders, amounts} = req.body
        const data = {
            invoices,
            idEmploye,
            orders,
            amounts,
            createAt: new Date(),
            updateAt: new Date()
        }
        console.log(data)
        historyModel.insertHistory(data)
            .then((result)=>{
                const resultHistory = result
                helpers.response(res, resultHistory, 200, null)
            })
            .catch((err)=>{
                console.log(err)
            })
    },
    deleteHistory: (req, res)=>{
        const id = req.params.id
        console.log(id)
        historyModel.deleteHistory(id)
            .then((result)=>{
                const resultHistory = result
                helpers.response(res, resultHistory, 200, null)
            })
            .catch((err)=>{
                console.log(err)
            })
    },
    updateHistory: (req, res)=>{
        const id = req.params.id
        const {invoices, idEmploye, orders, amounts} = req.body
        const data = {
            invoices,
            idEmploye,
            orders,
            amounts,
            updateAt: new Date()
        }
        historyModel.updateHistory(id, data)
        .then((result)=>{
            const resultHistory = result
            helpers.response(res, resultHistory, 200, null)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

module.exports = history;