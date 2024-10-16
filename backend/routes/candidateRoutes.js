const express = require('express')
const router = express.Router();
const candidateController = require('../controllers/candidate')


router.post('/signup',candidateController.signup)
router.get('/signup',candidateController.getsignup)


module.exports = router