import { body } from 'express-validator';


export const loginValidation = [
    body('email', 'Invalid email format').isEmail(),
    body('password', 'The password must be at least 5 characters long').isLength({ min: 5 }),
];

export const registerValidation = [
    body('email', 'Invalid email format').isEmail(),
    body('password', 'The password must be at least 5 characters long').isLength({ min: 5 }),
    body('lastName', 'Enter the last name').isLength({ min: 3 }),
    body('firstName', 'Enter your name').isLength({ min: 3 }),
    body('phone', 'Enter a valid phone number').isLength({min: 9}),
];

export const updateValidation = [
    body('email', 'Invalid email format').optional().isEmail(),
    body('password', 'The password must be at least 5 characters long').optional().isLength({ min: 5 }),
    body('lastname', 'Enter the last name').optional().isLength({ min: 3 }),
    body('name', 'Enter your name').optional().isLength({ min: 3 }),
    body('phone', 'Enter a valid phone number').optional().isLength({min: 9}),
    body('address', 'Enter your address').optional().isLength({ min: 5 }),
    body('birthday', 'Enter your date of birth').optional().isDate()
];