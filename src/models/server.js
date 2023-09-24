const express = require('express');
class Server {
	constructor() {
		this.port = process.env.PORT;
		this.app = express();
		this.paths = {
			users: '/api/users',
		};
	}

	middlewares() {
		this.app.use(express.static('public'));
	}

	routes() {
		this.app.use(this.paths.users, require('../routes/users'));
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log('Server running on port:', this.port);
		});
	}
}

module.exports = Server;
