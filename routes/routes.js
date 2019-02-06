'use strict'

const responder = require('helpers/response.helper')

// Require api-docs routes
const index = require('routes/index')

// Require routes

module.exports = function (app) {

	// app routes

	app.use(responder.notFound)
	app.use(responder.error)
}
