const router = require('express').Router();
// const router = require('module').Router();
const db = require('../models');

router.get('/api/workouts', (req, res) => {
    console.log('API connected')
    db.Workout.find({})
        .then(workoutData => {
            res.json(workoutData)
        })
        .catch(err => {
            res.json(err);
        });
});

router.post('/api/workouts', (req, res) => {

    db.Workout.create({})
        .then(workoutData => {
            res.json(workoutData)
        })
        .catch(err => {
            res.json(err);
        });
});

router.put('/api/workouts/:id', (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, {
        $push: {
            exercises: req.body
        }
    }).then(workoutData => {
        res.json(workoutData)
    })
        .catch(err => {
            res.json(err);
        });
});

router.get('/api/workouts/range', (req, res) => {



    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" },
            }
        }])
        .then(workoutData => {
            res.json(workoutData)
        })
        .catch(err => {
            res.json(err);
        });
});


module.exports = router;