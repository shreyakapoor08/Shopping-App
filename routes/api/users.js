const User = require('../../db').User
const route = require('express').Router()

route.get('/', (req, res) => {
    //we want to send an array of all users
    //from our DB here

    //user which we require we will find all the users
    //this works using promise api
    User.findAll()
        .then((users) => {
            res.status(200).send(users)
        })
        .catch((err) => { //when we are unable to find user
            res.status(500).send({ //we will set status code of 500
                error: "Could not retrieve users"
            })
        })

})

route.post('/', (req, res) => {
 // we expect the req to have name in it
    //we will create a new user

    User.create({ //it takes a new User object
        name: req.body.name //fetching from req,body.name
    }) .then((user) => {
        res.status(201).send(user)
    }).catch((err) => {
        error: "Could not add new user"
    })
})

exports = module.exports = route