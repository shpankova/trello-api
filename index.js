require('dotenv').config()
const express = require('express')
const helmet = require('helmet')

const routerCard = require('./routes/card')
const routerBoard = require('./routes/board')

const PORT = process.env.PORT || 7000;
const HOST = process.env.HOST || '127.0.0.1';

const app = express();

app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: false }))
app.use('/api/card', routerCard)
app.use('/api/board', routerBoard)

app.use(helmet())

app.listen(PORT, HOST, () => {
    console.log(`Server listens http://${HOST}:${PORT}`);
});
