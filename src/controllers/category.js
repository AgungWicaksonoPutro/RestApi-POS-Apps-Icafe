const categoryModel = require('../models/category');
const helpers = require('../helpers/response')

const category = {
    getAllCategory: (req, res)=>{
        categoryModel.getAllCategory()
            .then((result)=>{
                const resultCategory = result;
                helpers.response(res, resultCategory, 200, null)
            })
            .catch((err)=>{
                console.log(err)
            })
    },
    insertCategory: (req, res)=>{
        const {categoryName} = req.body
        const data = {
            categoryName,
        }
        categoryModel.insertCategory(data)
            .then((result)=>{
                const resultCategory = result
                helpers.response(res, resultCategory, 200, null)
            })
            .catch((err)=>{
                console.log(err)
            })
    },
    deleteCategory: (req, res)=>{
        const id = req.params.id
        console.log(id)
        categoryModel.deleteCategory(id)
            .then((result)=>{
                const resultCategory = result
                helpers.response(res, resultCategory, 200, null)
            })
            .catch((err)=>{
                console.log(err)
            })
    },
    updateCategory: (req, res)=>{
        const id = req.params.id
        const {categoryName} = req.body
        const data = {
            categoryName,
        }
        categoryModel.updateCategory(id, data)
        .then((result)=>{
            const resultCategory = result
            helpers.response(res, resultCategory, 200, null)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

module.exports = category;