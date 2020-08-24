require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan')
const routes = require('./src/routes/index');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'))


app.use('/api/v1/icafe/', routes);
app.use('/uploads', express.static('./uploads-img'))
const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server running`)
})