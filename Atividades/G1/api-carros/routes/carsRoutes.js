const express = require('express')
let carsData = require('../data/carsData')
const router = express.Router()

router.route('/cars')
    .get((req, res) => {
        res.json(carsData)
    })
    .post((req, res) => {
        const newCar = {
            id: carsData.length++,
            "name": req.body.name,
            "trade": req.body.trade,
            "model": req.body.model,
            "year": req.body.year,
        }
        carsData.push(newCar)
        res.status(201).json(newCar)    
    })

router.route('/cars/:id')
    .get((req, res) => {
        const id = parseInt(req.params.id)
        const car = carsData.find(car => car.id === id)
        if(!car)
            return res.status(404).json({error: 'Car not found'})
        res.json(car)
    })
    .put((req, res) => {
        id = parseInt(req.params.id)
        const car = carsData.find(car => car.id === id)

        if(!car)
            return res.status(404).json({error:"Car not found"})
        
        const { name, trade, model, year } = req.body

        if (name != undefined)
            car.name = name
        if (trade != undefined)
            car.trade = trade
        if(model != undefined)
            car.model = model
        if(year != undefined)
            car.year = year

        res.json(car)
    })
    .delete((req, res) => {
        
        const id = parseInt(req.params.id)
        
        carsData = carsData.filter(car => car.id != id)
        
        res.status(204).send()
    })


module.exports = router