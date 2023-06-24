import mongoose from "mongoose"

const flightSchema = new mongoose.Schema({
    airline: {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        plane: {
            type: String,
            required: true,
        }
    },
    rate: {
        type: Number,
        required: true,
    },
    info: {
        departure: {
            type: String,
            required: true,
        },
        arrival: {
            type: String,
            required: true,
        },
        stop: {
            type: String,
            required: true,
        },
        flightTime: {
            type: String,
            required: true,
        }
    },
    prices: {
        econom:{
            type: Number,
            required: true,
        },
        firstClass:{
            type: Number,
            required: true,
        },
        businesClass:{
            type: Number,
            required: true,
        }
    },
    addressAirport: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
});

const Flight = mongoose.model('Flight', flightSchema);

export default Flight;