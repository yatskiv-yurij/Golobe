import bcrypt from 'bcrypt';

import Card from "../models/Card.js";

const cardController = {
    async create(req, res) {
        try {

            const salt = await bcrypt.genSalt(5);
            const doc = {
                user: req.body.user,
                cardNumber: await bcrypt.hash(req.body.number, salt),
                cardExpDate: await bcrypt.hash(req.body.expDate, salt),
                cardCVC: await bcrypt.hash(req.body.cvc, salt),
            }

            await Card.create(doc);
            return res.status(200).json({ success: true })
        } catch (err) {
            console.log(err);
            return res.status(400).json({ error: 'Failed add card' }); 
        }
    },

    async getUserCard(req, res) {
        try {
            const cards = await Card.find({ user: req.params.id});
            if (!cards) return res.status(500).json({ error: 'Cards not found' });
            return res.status(200).json(cards);
        } catch (err) {
            console.log(err);
            return res.status(400).json({error: 'User card not found'});
        }
    },

    async delete(req, res) {
        try {
            await Card.deleteOne({ _id: req.params.id});
            res.json({
                success: true,
            });
        } catch (err) {
            console.log(err);
            return res.status(400).json({error: 'Card has not been deleted'});
        }
    }
}

export default cardController;