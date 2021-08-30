const express = require('express');
const router = express.Router();

var users = require('./users');


router.get('/', function(req, res, next) {
    res.send('Bienvenidos a la pagina principal API!! ✋');
});

// define the home page route
router.use('/users', users);
router.use('/conversor', require('./conversor'));


module.exports = router;