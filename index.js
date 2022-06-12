require('dotenv').config()
const express = require('express')

const PORT = process.env.PORT || 7000;
const HOST = process.env.HOST || '127.0.0.1';

const app = express();


app.listen(PORT, HOST, () => {
    console.log(`Server listens http://${HOST}:${PORT}`);
});
