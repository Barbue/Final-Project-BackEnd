const { v4: uuidv4 } = require("uuid");
var express = require("express");
var router = express.Router();
//const { db } = require("../mongo");
const TicketsController = require('../controllers/TicketsControllers');

// CRUD OPERATIONS 
router.get("/all", TicketsController.getAllTickets);
router.post("/create-one", TicketsController.createOneTicket);
router.get("/get-one/:id", TicketsController.getOneTicket);
router.put("/update-one/:id", TicketsController.updateOneTicket);
router.delete("/delete-one/:id", TicketsController.deleteOneTicket);

module.exports = router;