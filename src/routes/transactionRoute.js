const validateExpense =require("../validation/transaction.js");

const express = require('express');
const router = express.Router();
const {addExpense,getExpenses} = require('../controllers/transaction.js');

router.post('/add-expense',validateExpense,addExpense);
router.get('/get-expense',getExpenses);

module.exports = router;