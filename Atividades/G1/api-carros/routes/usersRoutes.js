const express = require('express')
let usersData = require('../data/usersData')
const router = express.Router()

router.route('/users')
    .get((req, res) => {
        res.json(usersData)
    })
    .post((req, res) => {
        const newUser = {
            id: usersData.length + 1,
            "name": req.body.name,
            "password": req.body.password,
            "userType": req.body.userType,
        }
        usersData.push(newUser)
        res.status(201).json(newUser)
    })

router.route('/users/:id')
    .get((req, res) => {
        const id = parseInt(req.params.id)
        const user = usersData.find(user => user.id === id)
        if(!user)
            return res.status(404).json({error: 'User not found'})
        res.json(user)
    })
    .put((req, res) => {
        const id = parseInt(req.params.id)
        const user = usersData.find(user => user.id === id)

        const { name, password, userType } = req.body

        if(name != undefined)
            user.name = name
        if(password != undefined)
            user.password = password
        if(userType != undefined)
            user.userType = userType
        res.json(user)
    })
    .delete((req, res) => {
        const id = parseInt(req.params.id)
        usersData = usersData.filter(user => user.id != id)
        res.status(204).send()
    })

module.exports = router