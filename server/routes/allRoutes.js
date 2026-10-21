const express = require('express');
const router = express.Router();
const {protect, adminOnly} = require('../middleware/auth');
const {getdashboard, transfer, transactions, withdraw, deposit} = require('../src/controllers/admin');


//auth routes
router.post('/register', registerUser)
router.post('/login', login)
router.get('/me', protect, getme)
router.get('/lookup/:accountNumber', protect, lookup)



// user routes
router.get('user/dashboard', protect, getdashboard);
router.get('user/transfer', protect, transfer);
router.post('user/transaction', protect, transactions);
router.post('user/withdraw', protect, withdraw);
router.post('user/deposit', protect, deposit)

// bills routes
router.post('/airtime', protect, airtime);
router.put('/data', protect, getdata);
router.post('/electric', protect, electricity);

// loan routes
router.post('/apply', protect, getloan);
router.get('/myloans', protect, myloans);



//admin routes
router.get('/stats', protect, adminOnly, getstats);
router.get('/admin/transfer', protect, adminOnly, getuser);
router.post('/users', protect, adminOnly, createusers);
router.put('/users/:id', protect, adminOnly, updateusers);
router.put('/users/:id/ban', protect, adminOnly, banuser);
router.get('/loans', protect, adminOnly, loans);
router.post('/admin/transaction', protect, adminOnly, transactions);
router.post('/admin/withdraw', protect, adminOnly, withdraw);
router.post('/admin/deposit', protect, adminOnly, deposit);