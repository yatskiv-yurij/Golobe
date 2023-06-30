import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    cardNumber: {
        type: String,
        required: true,
    },
    cardExpDate: {
        type: String,
        required: true,
    },
    cardCVC: {
        type: String,
        required: true
    }
});

const Card = mongoose.model('Card', cardSchema);

export default Card;