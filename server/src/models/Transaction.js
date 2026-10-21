const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type: {
    type: String, 
    enum: ['TRANSFER_OUT', 'TRANSFER_IN', 'WITHDRAWAL', 'BILL_PAYMENT', 'LOAN_DISBURSEMENT', 'DEPOSIT', 'BONUS'], 
    required: true
    },
    amount: {type: Number, required: true},
    balanceAfter: {type: Number},
    description: {type: String, required: true},
    reference: {type: String, required: true},
    counterparty: {
        name: {type: String},
        accountNumber: {type: String},
        bank: {type: String}
    },
    metadata: {type: Object, default:{}},
},{
    timestamps: true
})
module.exports = mongoose.model('Transaction', TransactionSchema)