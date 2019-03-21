const route = require('express').Router()

route.use('/users', require('./users'))
route.use('/products', require('./products'))

exports = module.exports = {
    route
}

//now we will start making our apis--> first users.js