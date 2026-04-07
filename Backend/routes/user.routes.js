const exprees = require("express");
const { model } = require("mongoose");
const router = exprees.Router();
const { body } = require('express-validator');
const userController = require('../controller/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');



router.post('/register', [
    body('fullname.first').isLength({ min: 3 }).withMessage('first name must be at least 3 characters long'),
    body('email').isEmail().withMessage('invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('password must be at least 6 characters long')
], userController.registerUser);




router.post('/login', [
    body('email').isEmail().withMessage('invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('password must be at least 6 characters long')

],
    userController.loginUser
)

router.get('/profile', authMiddleware.authUser, userController.getUserProfile)
router.get('/logout', authMiddleware.authUser, userController.logoutUser)





module.exports = router;