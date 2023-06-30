import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    ticket: {
        flight:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Flight',
        },
        stay: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Stay',
        }
    },
},
{
    timestamps: true,
});

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;