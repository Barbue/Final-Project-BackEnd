const Ticket = require('../models/Tickets');
var express = require('express');
var router = express.Router();
// const { db } = require("../mongo");
const { v4: uuidv4 } = require("uuid");

async function getAllTickets(req, res) {

    //query Tickets
    try {
        const allTickets =  await Ticket.find({});
        res.json({success: true, tickets: allTickets });
    }catch(error){
     res.json({success: false, message: error})
      
    }
}

async function createOneTicket(req, res) {
    try {
      //parse out fields from POST request
      const title  = req.body.title 
      const description = req.body.description
      const creator = req.body.creator
      const status =  req.body.status
      const comments = req.body.comments
  
      //pass fields to new Ticket model 
      //notice how it's way more organized and does the type checking for us
      const newTicket = new Ticket({
          title: title,
          description: description,
          creator: creator,
          status: status,
          comments: comments,
          
      });
  
      //save our new entry to the database 
      const response =  await newTicket.save();
      
      //return the successful request to the user 
      res.json({
          success: true,
          addedTicket: response 
      });
  
    } catch (error) {
      console.log(error);
      res.json({success: false, message: error});
    }
}

async function getOneTicketById(req, res) {
      let oneTicketPost;
      //console.log(req.params);
      const {idToGet} = req.params;

    try {
        oneTicketPost = await Ticket.findOne({id: idToGet});
        //check if the blog exists
        //throw will move to catch
        if(oneTicketPost === null) throw "Ticket not found";

        res.json({
            sucess: true,
            oneTicket: oneTicketPost});

    } catch (error) {
        console.log("Error Message", error);
        res.json({success: false, message: error});
    }
}

async function updateOneTicket(req,res){
    
    try {
        const { idToUpdate } = req.params;

    const updatedTicket = await Ticket.findOneAndUpdate(
        { id: idToUpdate }, req.body);

    // const updatedTicket = Ticket.updateOne({id: req.params.id}, req.body);

     res.json({success: true, ticketUpdate: updatedTicket });

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error});
    }
    
}

async function deleteOneTicketById(req,res){
    try {

        const { idToDelete } = req.params;
        const deletedTicket = await Ticket.findOneAndDelete({id: idToDelete});

        res.json({
            success: true,
            deletedTicket: deletedTicket
        });
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error}); 
    }
}

module.exports = {
    createOneTicket,
    deleteOneTicketById,
    getAllTickets,
    getOneTicketById,
    updateOneTicket
};
