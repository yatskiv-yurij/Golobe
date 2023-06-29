import Flight from "../models/Flight.js";

const flightsController = {
    async create(req, res) {
        try{
            const doc = {
                airline: {
                    name: req.body.airline.name,
                    image: req.body.airline.image,
                    plane: req.body.airline.plane
                },
                rate: req.body.rate,
                info: {
                    departure: req.body.info.departure,
                    arrival: req.body.info.arrival,
                    stop: req.body.info.stop,
                    flightTime: req.body.info.flightTime
                },
                prices: {
                    econom: req.body.prices.econom,
                    firstClass:req.body.prices.firstClass,
                    businesClass:req.body.prices.businesClass
                },
                addressAirport: req.body.addressAirport,
                image: req.body.image
            }

            await Flight.create(doc);
            return res.status(200).json({
                success: true
            });
        }catch (err) {
            console.log(err);
            return res.status(400).json({ error: 'Failed create flight' });
        }
    },

    async getAll (req, res) {
        try {
            const flights = await Flight.find();
            return res.status(200).json(flights);
        } catch (err) {
            console.log(err);
            return res.status(400).json({error: 'Failed take flights'})
        }
    },

    async getById (req, res) {
        try {
            const flight = await Flight.findById(req.params.id);
            if (!flight) return res.status(500).json({ error: 'Flight not found' });
            return res.status(200).json(flight);
        } catch (err) {
            console.log(err);
            return res.status(400).json({error: 'Failed take flight'})
        }
    }
}

export default flightsController;