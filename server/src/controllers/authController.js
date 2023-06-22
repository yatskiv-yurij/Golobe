import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';

import 'dotenv/config';
import User from "../models/User.js";

const authController = {
    async register(req, res) {
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json(errors.array());
            }

            const candidate = await User.findOne({email: req.body.email});
            if (candidate) return res.status(409).json({ error: 'User already exist' });
        
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(req.body.password, salt)

            const doc = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                phone: req.body.phone,
                passwordHash: hash,
            }

            const user = await User.create(doc);

            const token = jwt.sign({
                _id: user._id,
                email: user.email
            },
            process.env.SECRET_KEY,
            {
                expiresIn: '30d',
            }
            )

            const {passwordHash, ...userData} = user._doc;

            res.json({
                ...userData,
                token,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: 'Registration failed',
            })
        } 
    },

    async login(req, res){
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json(errors.array());
            }

            const user = await User.findOne({ email: req.body.email });

            if(!user) {
                return res.status(400).json({
                    message: "Invalid login or password",
                });
            }

            const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);
            if(!isValidPass) {
                return res.status(400).json({
                    message: "Invalid login or password",
                });
            }

            const token = jwt.sign({
                _id: user._id,
                email: user.email
            },
            process.env.SECRET_KEY,
            {
                expiresIn: '30d',
            }
            );

            const {passwordHash, ...userData} = user._doc;

            res.json({
                ...userData,
                token,
            });


        }catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "Authorization failed",
            });
        }
    }
}

export default authController;