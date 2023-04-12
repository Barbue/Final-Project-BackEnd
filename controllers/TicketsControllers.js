// const Ticket = require('../models/tickets');
var express = require('express');
var router = express.Router();
const { db } = require("../mongo");
const { v4: uuidv4 } = require("uuid");

async function getAllTickets(req, res) {

    //query Tickets
    try {
        //res.send("respond with a resource");

     const allTickets =  await db().collection("tickets").find({}).toArray();
   
 res.json({tickets: allTickets });
    }catch(e){
      console.log(e);
    }
}

async function createOneTicket(req, res) {
    try {
      //parse out fields from POST request
      const title  = req.body.title 
      const text = req.body.text 
      const creator = req.body.creator
      const status =  req.body.status
      const year = req.body.year
  
      //pass fields to new Ticket model 
      //notice how it's way more organized and does the type checking for us
      const newTicket = {
          title: title,
          text: text,
          creator: creator,
          year: year,
          status: status,
          id: uuidv4(),
          creationdate: new Date(),
          lastModified: new Date(),
      };
  
      //save our new entry to the database 
      const insertNewTicket =  await db().collection("tickets").insertOne(newTicket);
      
      //return the successful request to the user 
      res.json({
          success: true,
          tickets: insertNewTicket
      });
  
    } catch (e) {
      console.log(typeof e);
      console.log(e);
      res.json({
        error: e.toString(),
      });
    }
  }

async function getOneTicket(req, res, next) {

    
    let oneTicketPost;

    try {
        oneTicketPost = await db().collection("tickets").findOne({id: req.params.id});
    } catch (error) {
        console.log(error);
    }
    res.json({
        sucess: true,
        oneTicket: oneTicketPost
    })
}

async function updateOneTicket(req,res){
    const entryId = req.params.id;

    try {
        await db().collection("tickets").updateOne({ id: entryId }, req.body);
    } catch (err) {
        console.log(err);
        throw err;  
    }
    res.json({
        success: true,
        message: `ticket entry id ${entryId} updated`
    })
}

async function deleteOneTicket(req,res){
    const entryId = req.params.id;

    try {
        await db().collection("tickets").deleteOne({id: entryId});
    } catch (err) {
        console.log(err);
        throw err;  
    }

    res.json({
        success: true,
        message: `ticket entry id ${entryId} deleted`
    })
}

module.exports = {
    createOneTicket,
    deleteOneTicket,
    getAllTickets,
    getOneTicket,
    updateOneTicket
};
