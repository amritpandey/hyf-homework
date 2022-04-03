const express = require('express');
const router = express.Router();

const reservations = require('./../data/reservations.json');

// /api/reservations
router.get('/', async (request, response) => {
    try {
        response.json(reservations);
    } catch (error) {
        throw error;
    }
});

// /api/reservations/{id}
router.get('/:id', async (request, response) => {
    try {
        const id = Number(request.params.id);
        const reservation = reservations.find(
            (reservation) => reservation.id === id,
        );
        response.json(reservation);
    } catch (error) {
        throw error;
    }
});

module.exports = router;
