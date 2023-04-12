var express = require('express');
var router = express.Router();

// const Ticket = require('../models/tickets');

/* GET home page. */
router.get('/', async function(req, res) {

  //query all tickets
  try {
    const allTickets = await db().collection("tickets").find({});
    res.json({tickets: allTickets });
  }catch(e){
    console.log(e);
  }
});


module.exports = router;
