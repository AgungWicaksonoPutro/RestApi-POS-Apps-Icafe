const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads-img')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    },
  })

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
  
upload = multer({ 
    storage: storage, 
    fileFilter: fileFilter,
    limits: {
        fieldSize: 1024*1
    }
})

module.exports = {
    upload
}