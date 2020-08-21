const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./src/routes/index')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/api/v1/icafe', routes)

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})