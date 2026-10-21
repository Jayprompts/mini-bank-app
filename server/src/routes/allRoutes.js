const express = require('express');
const router = express.Router();
const {protect, adminOnly} = require('../middleware/auth');
const {
    registeruser: registerUser,
    login,
    getme,
    lookup,
    getdashboard,
    transfer,
    transactions,
    withdraw,
    deposit
} = require('../controllers/authController');
const {airtime, getdata, electricity, getloan, myloans} = require('../controllers/billController');
const {
    getstats,
    getUsers: getuser,
    createUser: createusers,
    updateusers,
    banuser,
    getloan: loans
} = require('../controllers/adminController');


//auth routes
router.post('/auth/register', registerUser)
router.post('/auth/login', login)
router.get('/auth/me', protect, getme)
router.get('/auth/lookup/:accountNumber', protect, lookup)



// user routes
router.get('/account/dashboard', protect, getdashboard);
router.post('/account/transfer', protect, transfer);
router.get('/account/transactions', protect, transactions);
router.post('/account/withdraw', protect, withdraw);
router.post('/account/deposit', protect, deposit)

// bills routes
router.post('/bills/airtime', protect, airtime);
router.post('/bills/data', protect, getdata);
router.post('/bills/electricity', protect, electricity);

// loan routes
router.post('/loans/apply', protect, getloan);
router.get('/loans/my-loans', protect, myloans);



//admin routes
router.get('/admin/stats', protect, adminOnly, getstats);
router.get('/admin/users', protect, adminOnly, getuser);
router.post('/admin/users', protect, adminOnly, createusers);
router.put('/admin/users/:id', protect, adminOnly, updateusers);
router.put('/admin/users/:id/ban', protect, adminOnly, banuser);
router.get('/admin/loans', protect, adminOnly, loans);
router.post('/admin/transaction', protect, adminOnly, transactions);
router.post('/admin/withdraw', protect, adminOnly, withdraw);
router.post('/admin/deposit', protect, adminOnly, deposit);

module.exports = router;