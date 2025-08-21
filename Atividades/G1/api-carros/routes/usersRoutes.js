const express = require('express')
const router = express.Router()

router.route('/users')
    .get((req, res) => res.send("Get all users."))
    .post((req, res) => res.send("New user saved."))

router.route('/users/:id')
    .get((req, res) => res.send("Get user by id"))
    .put((req, res) => res.send("Updated user"))
    .delete((req, res) => res.send("User deleted"))

module.exports = router