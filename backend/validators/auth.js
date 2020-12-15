const {check} = require('express-validator');

exports.userSignupValidator =[
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('email')
        .isEmail()
        .withMessage('must be a valid email address'),
    check('name')
        .isLength({min:6})
        .withMessage('Password must be at least 6 characters long'),

];