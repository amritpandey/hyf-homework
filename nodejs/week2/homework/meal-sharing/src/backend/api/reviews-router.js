const express = require('express');
const router = express.Router();

const reviews = require('./../data/reviews.json');

// api/reviews

router.get('/', async (request, response) => {
    try {
        const allReview = reviews.map((review) => review);
        response.send(allReview);
    } catch (error) {
        throw error;
    }
});

// api/reviews/{id}

router.get('/:id', async (request, response) => {
    try {
        const id = Number(request.params.id);
        const reviewId = reviews.find((review) => review.id === id);
        response.send(reviewId);
    } catch (error) {
        throw error;
    }
});

module.exports = router;
