require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require("cors");
const routes = require('./src/routes/index');

app.use(bodyParser.urlencoded({limits: '1024', extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'))

app.use(cors());
app.use('/api/v1/icafe/', routes);
app.use('/uploads', express.static('./uploads-img'))

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server running`)
})