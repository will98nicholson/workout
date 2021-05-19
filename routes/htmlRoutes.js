const router = require('express').Router();
const { Workout } = require('../models');


router.get('/', async (req, res) => {
    try {
        res.render('index');
    } catch (err) {
        res.status(err).json(err);
    }
});

router.get('/stats', async (req, res) => {
    try {
        res.render('stats');
    } catch (err) {
        res.status(err).json(err);
    }
});

module.exports = router