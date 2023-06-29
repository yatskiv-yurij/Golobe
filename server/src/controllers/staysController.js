import Stay from "../models/Stay.js";

const staysController = {
    async create (req, res) {
        try {
            const doc = {
                name: req.body.name,
                rate: req.body.rate,
                info: req.body.info,
                prices: req.body.prices,
                amenities: req.body.amenities,    
                image: req.body.images,
            }

            await Stay.create(doc);
            return res.status(200).json({
                success: true
            });
        } catch (err) {
            console.log(err);
            return res.status(400).json({ error: 'Failed create stay' });
        }
    }
}

export default staysController;