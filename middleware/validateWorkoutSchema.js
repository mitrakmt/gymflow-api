let validateWorkoutSchema = (req, res, next) => {
    let workout = req.body.workout

    // check top level value types
    if (!Array.isArray(workout)) {
        res.status(400).send({
            error: "Workout is not of type Array"
        })
        return;
    }
    
    // Loop through and check set and exercise schema
    for (let setIndex = 0; setIndex < workout.length; setIndex++) {
        // Check if set is an object
        if (workout[setIndex] === null || typeof workout[setIndex] !== 'object') {
            res.status(400).send({
                error: "All sets must be of type Object"
            })
            return;
        }
    
        // check set schema
        // Check if exercises exists
        if (!workout[setIndex].exercises) {
            res.status(400).send({
                error: "Each set must contain an exercises array"
            })
            return;
        }
    
        // Check for set ID and type of number
        if (workout[setIndex].id === undefined || typeof workout[setIndex].id !== 'number') {
            res.status(400).send({
                error: "Each set must contain an ID that is of type number"
            })
            return;
        }
    
        // Check exercises type is an Array
        if (!Array.isArray(workout[setIndex].exercises)) {
            res.status(400).send({
                error: "Workout is not of type Array"
            })
            return;
        }
    
        // Loop through and check exercise schema
        for (let exerciseIndex = 0; exerciseIndex < workout[setIndex].exercises.length; exerciseIndex++) {
            // Check for IDs and type of number
            if (workout[setIndex].exercises[exerciseIndex].id === undefined || typeof workout[setIndex].exercises[exerciseIndex].id !== 'number') {
                res.status(400).send({
                    error: "Each excersize must contain an ID that is of type number"
                })
                return;
            }
    
        // Check for name
        if (!workout[setIndex].exercises[exerciseIndex].name) {
            res.status(400).send({
                error: "Each excersize must contain a name"
            })
            return;
            }
        }
    
    }
    
    next()
}

module.exports = validateWorkoutSchema
