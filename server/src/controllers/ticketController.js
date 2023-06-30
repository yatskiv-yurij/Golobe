import Ticket from "../models/Ticket.js";

const ticketController = {
    async create(req, res) {
        try {
            const doc = {
                user: req.body.user,
                ticket:req.body.ticket,
            }
    
            await Ticket.create(doc);
            return res.status(200).json({
                success: true
            });
        } catch (err) {
            console.log(err);
            return res.status(400).json({ error: 'Ticket not buy' });
        }
    },

    async getTickets(req, res) {
        try {
            const tickets = await Ticket.find({ user: req.body.user });
            return res.status(200).json(tickets);
        } catch (err) {
            console.log(err);
            return res.status(400).json({error: 'Failed take Tickets'});
        }
    }
}

export default ticketController;