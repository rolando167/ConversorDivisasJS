const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const PORT  = process.env.PORT || 4000;

function logger(req, res, next) {
    console.log(`Route Received 💻: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next(); // pass control to the next handler
};

app.use(cors());
app.use(express.json());
// app.use(logger); // ejecuta a dodne va el usuario o sino usar morgan
app.use(morgan('dev'));

app.use('/api/1.0', require('./app/routes'));

// -------------------------
app.use(express.static('public'))

// ------------------------- Arrancar la app
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT} 👍`);
});