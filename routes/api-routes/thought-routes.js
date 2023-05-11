const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtsById,
    createThought,
    updateThoughtById,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thought-controller');

// Get and Post routes for all thoughts defined
router.route('/').get(getAllThoughts).post(createThought);

// Get, Put and Delete routes for thoughts defined
router.route('/:id').get(getThoughtsById).put(updateThoughtById).delete(deleteThought);

// Post routes for reaction D
router.route('/:thoughtId/reactions/').post(addReaction);

// Delete reaction route

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;