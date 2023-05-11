const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// Get and Post routes for all thoughts defined
router.route('/').get(getAllThoughts).post(createThought);

// Get, Put and Delete routes for thoughts defined
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

// Post routes for reaction D
router.route('/:thoughtId/reactions/').post(addReaction)

// Delete reaction route

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;