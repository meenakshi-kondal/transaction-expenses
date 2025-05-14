const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    description: { type: String, required: true },
    credit: { type: Number },
    debit: { type: Number },
    remaining_balance: { type: Number, default:5000 },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Expense",expenseSchema);