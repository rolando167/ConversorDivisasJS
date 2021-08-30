const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send('Conversor de monedas...');
});



module.exports = router;