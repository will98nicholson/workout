const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type: { type: String, required: "Enter an excercise type" },
    name: { type: String, required: "Enter the name of the exercise" },
    distance: { type: Number },
    weight: { type: Number },
    sets: { type: Number },
    reps: { type: Number },
    duration: { type: Number, required: "Enter the exercise duration in minutes" },
});

const workoutSchema = new Schema({
    day: { type: Date, default: new Date() },
    exercises: [exerciseSchema]

});
const Workout = mongoose.model('workout', workoutSchema);

module.exports = Workout;
