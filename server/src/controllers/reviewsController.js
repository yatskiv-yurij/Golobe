import { validationResult } from 'express-validator';

import Review from "../models/Review.js";

const reviewsController = { 
    async create(req, res) {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json(errors.array());
        }
        const doc = {
            title: req.body.title,
            description: req.body.description,
            rate: req.body.rate,
            user: req.body.user,
            image: req.body.image
        }

        const review = await Review.create(doc);
        return res.status(200).json(review);
    },

    async getAll(req, res) {
        try{
            const reviews = await Review.find().populate('user').exec();;
            return res.status(200).json(reviews);
        }catch(err) {
            console.log(err);
            res.status(500).json({
                message: 'Failed take reviews',
            })
        }
    }
}

export default reviewsController;