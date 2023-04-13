const { v4: uuidv4 } = require("uuid");
var express = require("express");
var router = express.Router();

const TicketsController = require('../controllers/TicketsControllers');

// CRUD OPERATIONS 
router.get("/all", TicketsController.getAllTickets);
router.post("/create-one", TicketsController.createOneTicket);
router.get("/get-one/:idToGet", TicketsController.getOneTicketById);
router.put("/update-one/:idToUpdate", TicketsController.updateOneTicket);
router.delete("/delete-one/:idToDelete", TicketsController.deleteOneTicketById);

module.exports = router;

 