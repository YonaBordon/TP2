const { Router } = require('express');
const { check } = require('express-validator');

const { validateJWT, validateRole } = require('../midleware');

const router = Router();

router.get('/products', (req, res) => {
	res.json({
		msg: 'get API - products',
	});
});

router.get('/products/:id', (req, res) => {
	res.json({
		msg: 'get API - products',
	});
});

router.post('/products', (req, res) => {
	res.json({
		msg: 'post API - products',
	});
});

router.put('/products/:id', (req, res) => {
	res.json({
		msg: 'put API - products',
	});
});

router.delete('/products/:id', (req, res) => {
	res.json({
		msg: 'delete API - products',
	});
});
