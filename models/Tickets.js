//import mongoose library
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

//create a ticketSchema 
const ticketSchema = new mongoose.Schema({
    title: String,
    description: String, 
    relatedTicketIds:[String],
    assignedToUserId: String,
    createdBy: String,
    status: String,
    organization: String,
    comments: String,
    createdById: {type: String, default: uuidv4},
    createdAt: { type: Date, default: Date.now},
    lastModified: Date, 
    lastUpdatedById: String,
    
}); 

// { type: Date, default: Date.now},


//register model to collection
const Ticket = mongoose.model("tickets", ticketSchema);

//make our model accessible to outside files 
module.exports = Ticket;
