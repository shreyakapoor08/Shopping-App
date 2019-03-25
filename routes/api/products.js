const Product = require('../../db').Product
const route =  require('express').Router();

route.get('/', (req, res) => {
    //get all products
    Product.findAll()
        .then((products) => {
            res.status(200).send(products)
        })
        .catch((err) => {
            res.status(500),send({
                error: "Could not retrieve products"
            })
        })

})

route.post('/', (req, res)  => {
    //Add a new product
    Product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: parseFloat(req.body.price) //in post request everything goes as a string
    })


})

exports = module.exports = route;