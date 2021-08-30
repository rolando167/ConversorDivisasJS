const express = require('express');
const router = express.Router();
// const {getItems, getiItem, createItem, updateItem, deleteItem} = require('../controllers/UserController');


// router.get('/', getItems)

// define the home page route
router.get('/', function(req, res) {
	// res.json({
	//     nombre:'Sandra',
	//     edad: 28
	// });
	res.send('Desde usuarios');
});

// define the about route
router.get('/about', function(req, res) {
	res.send('el about de usuarios');
});

router.post('/save/:id', function(req, res) {
	// POST: http://localhost:4000/api/1.0/users/save/2
	console.log(req.body);
	console.log(req.params);
	res.send('Guardando usuarios POST.');
});

router.delete('/:id', function(req, res) {
	res.send(`Eliminar el usuario -> ${req.params.id}`);
});

// router.get('/:id', getiItem )


// router.post('/', createItem)

// router.patch('/:id', updateItem)

// router.delete('/:id', deleteItem)


module.exports = router;