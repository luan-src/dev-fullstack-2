const express = require("express");
const router = express.Router();

router.route("/produtos")
  .get((req, res) => res.send("Listar produtos"))
  .post((req, res) => res.send("Criar produto"));

module.exports = router