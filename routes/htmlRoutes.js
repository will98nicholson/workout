const router = require('express').Router();
const path = require('path');
const { Workout } = require('../models');


router.get('/', async (req, res) => {
    try {
        res.render('index');
    } catch (err) {
        res.status(err).json(err);
    }
});

router.get('/exercise', async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
});

router.get('/stats', async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'))
});

module.exports = router