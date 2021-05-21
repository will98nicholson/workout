const router = require('express').Router();
// const router = require('module').Router();
// const Workout = require('../models/Workout');

router.get('/api/workouts', (req, res) => {
    console.log('API connected')
    // Workout.find({})
    //     .then(workoutData => {
    //         res.json(workoutData)
    //     })
    //     .catch(err => {
    //         res.json(err);
    //     });
});

// router.put('/api/workouts/:id', (req, res) => {
//     Workout.findByIdAndUpdate(req.params.id, {
//         $push: {
//             exercises: req.body
//         }
//     })
// })



module.exports = router;