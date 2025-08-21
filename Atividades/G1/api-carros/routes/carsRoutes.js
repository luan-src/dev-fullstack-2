const express = require('express')
const carsData = require('../data/carsData')
const router = express.Router()

router.route('/cars')
    .get((req, res) => res.send("Get all cars."))
    .post((req, res) => res.send("New car saved."))

router.route('/cars/:id')
    .get((req, res) => {
        const id = parseInt(req.params.id)
        const car = carsData.find(t => t.id === id)

        if(!car)
            return res.status(404).json({error: 'Car not found'})

        res.json(car)
    })
    .put((req, res) => res.send("Updated car"))
    .delete((req, res) => res.send("Car deleted"))

module.exports = router