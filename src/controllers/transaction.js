const Expense = require('../models/transactionModel');
const response = require('../common/response');
const EN = require('../common/EN');

// add expenses
exports.addExpense = async (req, res) => {
    try {

        const { description, debit, credit } = req.body;
        const lastExpense = await Expense.findOne().sort({ date: -1 })
        if (lastExpense) {
            let currentBalance = lastExpense?.remaining_balance;

            let newBalance = parseFloat(currentBalance)
            if (credit) {
                newBalance += credit
            }
            if (debit) {
                newBalance -= debit
            }
            const newExpense = new Expense({
                description,
                debit,
                credit,
                remaining_balance: newBalance,

            })
            await newExpense.save();
        } else {

            const newExpense = new Expense(req.body)
            await newExpense.save();
        }
        return response.success(res, EN.messages.CREATE, {});
    } catch (error) {
        return response.failed(res, error.message, {});
    }
}

// get all expenses
exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find().sort({ date: -1 });
        return response.success(res, EN.messages.FETCH, expenses);
    } catch (error) {
        return response.failed(res, error.message, {});
    }
}