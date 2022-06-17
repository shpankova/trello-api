require('dotenv').config()
const express = require('express')
const helmet = require('helmet')


const routerCard = require('./routes/card')
const routerBoard = require('./routes/board')
const errorMiddleware = require('./middlewares/error-middleware')


const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || '0.0.0.0';

const app = express();

app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use('/api', routerCard)
app.use('/api', routerBoard)

app.use(helmet())
app.use(errorMiddleware)


app.listen(PORT, HOST, () => {
    console.log(`Server listens http://${HOST}:${PORT}`);
});
