const express = require('express');
const router = express.Router();

const reservations = require('./../data/reservations.json');

// /api/reservations

router.get('/', async (request, response) => {
    try {
        const allReservations = reservations.map((r) => r);
        response.send(allReservations);
    } catch (error) {
        throw error;
    }
});

// /api/reservations/{id}

router.get('/:id', async (request, response) => {
    try {
        const id = Number(request.params.id);
        const allReservations = reservations.find((r) => r.id === id);
        response.send(allReservations);
    } catch (error) {
        throw error;
    }
});

module.exports = router;
