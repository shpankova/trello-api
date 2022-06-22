const app = require('./app')
const config = require('./config.js');

const PORT = config.PORT || 8000;
const HOST = config.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`Server listens http://${HOST}:${PORT}`);
});
