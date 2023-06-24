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
    }
}

export default flightsController;