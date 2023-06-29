import mongoose from "mongoose"

const staySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rate: {
        type: Number,
        required: true,
    },
    info: {
        address: {
            type: String,
            required: true,
        },
        hotelStar: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        }
    },
    prices: [{
        room: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true
        }
    }],
    amenities: {type: [String], required: true},    
    image: {type: [String], required: true}
});

const Stay = mongoose.model('Stay', staySchema);

export default Stay;