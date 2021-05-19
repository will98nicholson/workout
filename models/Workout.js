const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: { type: Date, default: new Date() },
    type: { type: String, required: true },
    name: { type: String, required: true },
    distance: { type: Number, required: true },
    weight: { type: Number, required: true },
    sets: { type: Number, required: true },
    reps: { type: Number, required: true },
    duration: { type: Number, required: true },

});
const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
