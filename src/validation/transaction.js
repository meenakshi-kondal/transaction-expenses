const { body, validationResult } = require('express-validator');
const EN = require('../common/EN');
const response = require('../common/response');

// validation rules
const validateExpense = [
    body('description')
        .notEmpty()
        .withMessage(`Title ${EN.REQUIRED}`),

    // custom validation
    // body().custom((value) => {
    //     const isDebit = value.hasOwnProperty('debit');
    //     const isCredit = value.hasOwnProperty('credit');

    //     if (isDebit && isCredit) {
    //         throw new Error(EN.messages.ONE_ENTRY)
    //     }

    //     if (!isDebit && !isCredit) {
    //         throw new Error(`Either credit or debit ${EN.messages.REQUIRED}`)
    //     }

    //     // if (isDebit && (typeof value.isDebit !== 'number' || value.debit <= 0)) {
    //     //     throw new Error(`Debit ${EN.messages.VALID_ENTRY}`)
    //     // }

    //     // if (isCredit && (typeof value.isCredit !== 'number' || value.credit <= 0)) {
    //     //     throw new Error(`Credit ${EN.messages.VALID_ENTRY}`)
    //     // }

    // }),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors)
            return response.failed(res, errors.array(), {});
        }
        next();
    }
];

module.exports = validateExpense;