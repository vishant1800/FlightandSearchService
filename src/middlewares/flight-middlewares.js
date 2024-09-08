const validateCreateFlight = (req, res, next) => {
    if (
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ) {
        //if any of body params is missing, we inside the if
        return res.status(400).json({
            data: {},
            success: false,
            message: 'Invalid request body for create flight',
            error: 'Missing mandatory properties for creating a flight'
        })
    }

    next();
}

module.exports = {
    validateCreateFlight
}